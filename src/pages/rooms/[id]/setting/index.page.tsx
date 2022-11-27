import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import * as S from './setting.styles';
import { RoomSettingProps } from './setting.types';

import AuthGuard from '@src/features/auth/components/AuthGuard';
import useDeleteMemoRoomMutation from '@src/features/room/api/useDeleteMemoRoomMutation';
import useMemoRoomQuery, { getMemoRoom } from '@src/features/room/api/useMemoRoomQuery';
import { RoomDetailMenu, UpsertRoomDialog } from '@src/features/room/components';
import { Header } from '@src/shared/components';
import { queryClient } from '@src/shared/configs/react-query';
import useConfirm from '@src/shared/hooks/useConfirm';
import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

const images = ['/images/alarm.png', '/images/bell.png', '/images/bell.png', '/images/bell.png'];

const RoomSetting: NextPageWithLayout<RoomSettingProps> = ({ id }) => {
  const { confirm } = useConfirm();
  const router = useRouter();

  const { data: memoRoom } = useMemoRoomQuery(id);
  const { mutate: deleteMemoRoom } = useDeleteMemoRoomMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(memoRoomKeys.list());
      router.replace('/');
    },
  });

  const [isUpdateRoomDialogOpen, setIsUpdateRoomDialogOpen] = useState(false);

  if (!memoRoom) {
    return null;
  }

  const openUpdateRoomDialog = () => {
    setIsUpdateRoomDialogOpen(true);
  };

  const closeUpdateRoomDialog = () => {
    setIsUpdateRoomDialogOpen(false);
  };

  const handleDeleteClick = async () => {
    if (
      await confirm({
        title: '메모룸을 나가시겠습니까?',
        description: '모든 메모 내용이 사라집니다.',
        variant: 'danger',
      })
    ) {
      deleteMemoRoom({ id: memoRoom.id });
    }
  };

  //TODO: count api나오면 변경
  const menuItems = [
    {
      title: '사진',
      count: 124,
      onClick: () => alert('click'),
      children: (
        <S.ImageBox>
          {images.map((image) => (
            <S.Image
              key={image}
              layout="responsive"
              width="100%"
              height="100%"
              objectFit="cover"
              src={image}
              alt={image}
            />
          ))}
        </S.ImageBox>
      ),
    },
    { title: '파일', count: 14, onClick: () => alert('click') },
    { title: '링크', count: 4, onClick: () => alert('click') },
  ];

  return (
    <>
      <Header title={memoRoom.name} hasBottomLine />
      <S.Wrapper>
        <S.RoomBaseInfo>
          <S.Thumbnail
            alt="ok"
            src={memoRoom.roomCategory.thumbnail}
            layout="fixed"
            width={120}
            height={120}
          />
          <S.RoomTitleBox>
            <S.RoomTitle>{memoRoom.name}</S.RoomTitle>
            <S.RoomTitleChangeButton onClick={openUpdateRoomDialog}>변경</S.RoomTitleChangeButton>
          </S.RoomTitleBox>
        </S.RoomBaseInfo>
        {menuItems.map((menuItem, index) => (
          <RoomDetailMenu key={`${menuItem.title}-${index}`} {...menuItem} />
        ))}
        <RoomDetailMenu onClick={handleDeleteClick} variant="danger" title="메모룸 나가기" />
      </S.Wrapper>
      <UpsertRoomDialog
        type="update"
        selectedRoomId={memoRoom.id}
        open={isUpdateRoomDialogOpen}
        onClose={closeUpdateRoomDialog}
        defaultValues={{
          name: memoRoom.name,
          roomCategoryId: memoRoom.roomCategory.id,
        }}
      />
    </>
  );
};

export const getServerSideProps: GetServerSidePropsWithState<RoomSettingProps> = async (ctx) => {
  const id = parseInt(ctx.query.id.toString());

  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(memoRoomKeys.detail(id), () => getMemoRoom(id));
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

RoomSetting.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default RoomSetting;
