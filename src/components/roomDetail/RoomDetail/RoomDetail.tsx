import Image from 'next/image';

import { RoomDetailProps } from './RoomDetail.types';
import * as S from './RoomDetail.styles';
import RoomSection from '../RoomSection';

import Icon from '@src/components/reusable/Icon';

//TODO:api나오면 변경
const dummy = [
  {
    title: '사진',
    count: 124,
    images: ['/images/alarm.png', '/images/bell.png'],
    onClick: () => alert('click'),
  },
  { title: '파일', count: 14, onClick: () => alert('click') },
  { title: '링크', count: 4, onClick: () => alert('click') },
];

const RoomDetail = ({}: RoomDetailProps) => {
  const onModifyBtnClick = () => {
    alert('변경');
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.IconBox>
          <Icon name="ArrowLeft" width="20px" height="20px"></Icon>
        </S.IconBox>
        <S.Title>글자수가 10글자 라면</S.Title>
      </S.Header>
      <S.Main>
        <S.NBCSection>
          <Image alt="ok" src="/images/alarm.png" layout="fixed" width={125} height={125}></Image>
          <S.NBCBox>
            <S.NBCTitle>나와의 번개챗</S.NBCTitle>
            <S.NBCButton onClick={onModifyBtnClick}>변경</S.NBCButton>
          </S.NBCBox>
        </S.NBCSection>
        {dummy.map((v, i) => (
          <RoomSection key={i} {...v}></RoomSection>
        ))}
        <RoomSection
          onClick={() => {
            alert('나가기');
          }}
          color="red1"
          title="메모룸 나가기"
        ></RoomSection>
      </S.Main>
    </S.Wrapper>
  );
};

export default RoomDetail;
