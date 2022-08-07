import Image from 'next/image';

import RoomDetailMenu from '../RoomDetailMenu';
import * as S from './RoomDetail.styles';
import { RoomDetailProps } from './RoomDetail.types';

import Icon from '@src/components/reusable/Icon';

const images = ['/iimages/alarm.png', '/images/bell.png', '/images/bell.png', '/images/bell.png'];
//TODO:api나오면 변경
const dummy = [
  {
    title: '사진',
    count: 124,
    onClick: () => alert('click'),
    children: (
      <S.ImageBox>
        {images.map((image) => (
          <Image key={image} alt={image} layout="fixed" width={80} height={80} src={image}></Image>
        ))}
      </S.ImageBox>
    ),
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
      {/* TODO: 추후에 별도 header컴포넌트로 분리 */}
      <S.Header>
        <S.IconBox>
          <Icon name="ArrowLeft" width="20px" height="20px"></Icon>
        </S.IconBox>
        <S.Title>글자수가 10글자 라면</S.Title>
      </S.Header>
      <S.Main>
        <S.RoomChangeSection>
          <Image alt="ok" src="/images/alarm.png" layout="fixed" width={125} height={125}></Image>
          <S.RoomChangeBox>
            <S.RoomChangeTitle>나와의 번개챗</S.RoomChangeTitle>
            <S.RoomChangeButton onClick={onModifyBtnClick}>변경</S.RoomChangeButton>
          </S.RoomChangeBox>
        </S.RoomChangeSection>
        {dummy.map((v, i) => (
          <RoomDetailMenu key={i} {...v}></RoomDetailMenu>
        ))}
        <RoomDetailMenu
          onClick={() => {
            alert('나가기');
          }}
          variant="danger"
          title="메모룸 나가기"
        ></RoomDetailMenu>
      </S.Main>
    </S.Wrapper>
  );
};

export default RoomDetail;
