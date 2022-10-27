import { NextPage } from 'next';
import Image from 'next/image';

import * as S from './setting.styles';
import { RoomSettingProps } from './setting.types';

import { RoomDetailMenu } from '@src/features/room/components';
import { Header } from '@src/shared/components';
import { GetServerSidePropsWithState } from '@src/shared/types/next';

const images = ['/images/alarm.png', '/images/bell.png', '/images/bell.png', '/images/bell.png'];
//TODO:api나오면 변경
const dummy = [
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

const RoomSetting: NextPage<RoomSettingProps> = ({ id }) => {
  const onModifyBtnClick = () => {
    alert('변경');
  };

  return (
    <>
      <Header title="글자수가 10글자 라면" hasBottomLine />
      <S.Wrapper>
        <S.RoomBaseInfo>
          <Image alt="ok" src="/images/alarm.png" layout="fixed" width={125} height={125} />
          <S.RoomTitleBox>
            <S.RoomTitle>나와의 번개챗</S.RoomTitle>
            <S.RoomTitleChangeButton onClick={onModifyBtnClick}>변경</S.RoomTitleChangeButton>
          </S.RoomTitleBox>
        </S.RoomBaseInfo>
        {dummy.map((v, i) => (
          <RoomDetailMenu key={`${v.title}-${i}`} {...v} />
        ))}
        <RoomDetailMenu
          onClick={() => {
            alert('나가기');
          }}
          variant="danger"
          title="메모룸 나가기"
        />
      </S.Wrapper>
    </>
  );
};

export default RoomSetting;

export const getServerSideProps: GetServerSidePropsWithState<RoomSettingProps> = async (ctx) => {
  const {
    query: { id },
  } = ctx;

  return {
    props: {
      id: String(id),
    },
  };
};
