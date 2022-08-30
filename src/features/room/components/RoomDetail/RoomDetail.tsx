import Image from 'next/image';

import RoomDetailMenu from '../RoomDetailMenu';
import * as S from './RoomDetail.styles';
import { RoomDetailProps } from './RoomDetail.types';

import { Icon } from '@src/shared/components';

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

const RoomDetail = ({}: RoomDetailProps) => {
  const onModifyBtnClick = () => {
    alert('변경');
  };

  return (
    <S.Wrapper>
      {/* TODO: 추후에 별도 header컴포넌트로 분리 */}
      <S.Header>
        <S.IconBox>
          <Icon name="ArrowLeft" width="20px" height="20px" />
        </S.IconBox>
        <S.Title>글자수가 10글자 라면</S.Title>
      </S.Header>
      <S.Main>
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
      </S.Main>
    </S.Wrapper>
  );
};

export default RoomDetail;
