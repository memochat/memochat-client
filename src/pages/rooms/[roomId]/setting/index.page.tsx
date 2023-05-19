import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

import AuthGuard from '@src/features/auth/components/AuthGuard';
import useDeleteRoomMutation from '@src/features/room/api/useDeleteRoomMutation';
import useRoomQuery from '@src/features/room/api/useRoomQuery';
import { RoomDetailMenu, UpsertRoomDialog } from '@src/features/room/components';
import { Header } from '@src/shared/components';
import useConfirm from '@src/shared/hooks/useConfirm';
import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';

import { RoomSettingProps } from './setting.types';
import * as S from './setting.styles';

const images = ['/images/alarm.png', '/images/bell.png', '/images/bell.png', '/images/bell.png'];

const RoomSetting: NextPageWithLayout<RoomSettingProps> = ({ roomId }) => {
  const { confirm } = useConfirm();
  const router = useRouter();

  const { data: room } = useRoomQuery({ variables: { roomId } });
  const { mutate: deleteRoom } = useDeleteRoomMutation();

  const [isUpdateRoomDialogOpen, setIsUpdateRoomDialogOpen] = useState(false);

  if (!room) {
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
      deleteRoom(
        { id: room.id },
        {
          onSuccess: () => {
            void router.replace('/');
          },
        },
      );
    }
  };

  //TODO: count api나오면 변경
  const menuItems = [
    {
      title: '사진',
      count: 124,
      onClick: () => alert('click'),
      children: (
        <S.ImagePreviews>
          {images.map((image) => (
            <S.ImagePreviewWrapper key={image}>
              <Image
                src={image}
                alt={image}
                fill
                style={{
                  backgroundColor: '#ebeef6',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  aspectRatio: '1/1',
                }}
              />
            </S.ImagePreviewWrapper>
          ))}
        </S.ImagePreviews>
      ),
    },
    { title: '파일', count: 14, onClick: () => alert('click') },
    { title: '링크', count: 4, onClick: () => alert('click') },
  ];

  return (
    <>
      <Header title={room.name} hasBottomLine />
      <S.Wrapper>
        <S.RoomBaseInfo>
          <S.Thumbnail alt="ok" src={room.roomCategory.thumbnail} width={120} height={120} />
          <S.RoomTitleBox>
            <S.RoomTitle>{room.name}</S.RoomTitle>
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
        selectedRoomId={room.id}
        open={isUpdateRoomDialogOpen}
        onClose={closeUpdateRoomDialog}
        defaultValues={{
          name: room.name,
          roomCategoryId: room.roomCategory.id,
        }}
      />
    </>
  );
};

export const getServerSideProps: GetServerSidePropsWithState<RoomSettingProps> = async (ctx) => {
  const query = ctx.query;
  const roomId = Number(query.roomId);
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(useRoomQuery.getKey({ roomId }), useRoomQuery.queryFn);
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      roomId,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

RoomSetting.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default RoomSetting;
