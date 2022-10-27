import NextImage from 'next/image';
import styled from '@emotion/styled';

export const Title = styled.h1`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.color.black1};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.gray6};
`;

export const RoomBaseInfo = styled.section`
  padding-top: 40px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoomTitleBox = styled.div`
  padding-top: 8px;
  display: flex;
  padding: 16px;
  width: 100%;
`;

export const RoomTitle = styled.h3`
  flex-grow: 1;
  text-align: left;
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.gray3};
`;

export const RoomTitleChangeButton = styled.button`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.purple1};
`;

//RoomDetailMenu children 스타일

export const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 8px;
  width: 100%;

  //next/image 컴포넌트
  & > span {
    aspect-ratio: 1/1;
  }
`;

export const Image = styled(NextImage)`
  border-radius: 8px;
  background-color: #ebeef6;
`;
