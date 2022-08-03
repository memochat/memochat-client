import Image from 'next/image';

import { RoomDetailProps } from './RoomDetail.types';
import * as S from './RoomDetail.styles';

import Icon from '@src/components/reusable/Icon';

//TODO:api나오면 변경
const dummy = [
  { title: '사진', count: 124, contents: [1, 2, 3], onClick: () => alert('click') },
  { title: '파일', count: 14, onClick: () => alert('click') },
  { title: '링크', count: 4, onClick: () => alert('click') },
];

const renderSections = (sections: typeof dummy[number][]) => {
  return sections.map((section, i) => {
    return (
      <S.RoomSection key={i} onClick={section.onClick}>
        <S.RoomSectionButton>
          <S.RoomSectionTitle>{section.title}</S.RoomSectionTitle>
          {section.count}
          <S.IconBox>
            <Icon name="ArrowRight" width="16px" height="16px"></Icon>
          </S.IconBox>
        </S.RoomSectionButton>
        {section.contents && (
          <S.RoomSectionContent>
            {section.contents.map((v) => (
              <S.ImageBox key={v}>
                <Image alt="ok" layout="fill" src="/images/alarm.png"></Image>
              </S.ImageBox>
            ))}
          </S.RoomSectionContent>
        )}
      </S.RoomSection>
    );
  });
};

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
        {renderSections(dummy)}
        <S.RoomSection>
          <S.RoomSectionButton color="red1">메모룸 나가기</S.RoomSectionButton>
        </S.RoomSection>
      </S.Main>
    </S.Wrapper>
  );
};

export default RoomDetail;
