import NextImage from 'next/image';
import styled from '@emotion/styled';

import _PageLayout from '@src/shared/components/layouts/PageLayout/PageLayout';

export const PageLayout = styled(_PageLayout)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.gray6};

  > * + * {
    margin-top: 8px;
  }
`;

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

export const RoomBaseInfo = styled.section`
  padding-top: 18px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thumbnail = styled(NextImage)`
  border-radius: 24px;
  background-color: ${(p) => p.theme.color.purple6};
`;

export const RoomTitleBox = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  margin-top: 18px;
  padding-top: 8px;
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

export const ImagePreviews = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 8px;
  width: 100%;
`;

export const ImagePreviewWrapper = styled.div`
  position: relative;
  aspect-ratio: 1/1;
`;
