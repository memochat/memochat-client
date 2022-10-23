import { union } from 'lodash-es';
import { NextPage } from 'next';
import { useState } from 'react';

import * as S from './images-and-videos.styles';
import { ImageAndVideoManageListProps, ImageAndVideoManageMode } from './images-and-videos.types';

import ImageManageListItem from '@src/features/chat/components/ImageManageListItem';
import { Icon } from '@src/shared/components';
import Header from '@src/shared/components/Header';
import useConfirm from '@src/shared/hooks/useConfirm';
import { GetServerSidePropsWithState } from '@src/shared/types/next';

const mockImageSrc = '/images/big-chat.png';
const MOCK_IMAGES = [
  ...[...Array(3)].map((_, i) => ({
    id: `0${i}`,
    imageSrc: mockImageSrc,
    date: '2022년 9월 21일 수요일',
  })),
  ...[...Array(5)].map((_, i) => ({
    id: `1${i}`,
    imageSrc: mockImageSrc,
    date: '2022년 9월 22일 목요일',
  })),
  ...[...Array(1)].map((_, i) => ({
    id: `2${i}`,
    imageSrc: mockImageSrc,
    date: '2022년 9월 23일 금요일',
  })),
  ...[...Array(4)].map((_, i) => ({
    id: `3${i}`,
    imageSrc: mockImageSrc,
    date: '2022년 9월 24일 토요일',
  })),
];

const ImageAndVideoManageList: NextPage<ImageAndVideoManageListProps> = ({ id }) => {
  const { confirm } = useConfirm();

  const [mode, setMode] = useState<ImageAndVideoManageMode>('read');

  const [selectedImageIds, setSelectedImageIds] = useState<string[]>([]);

  const handleCheckButtonClick = () => {
    setMode('edit');
  };

  const handleCancelButtonClick = () => {
    setMode('read');
    setSelectedImageIds([]);
  };

  const selectImage = (id: string) => {
    setSelectedImageIds((previousSelectedImageIds) => union(previousSelectedImageIds, [id]));
  };

  const unselectImage = (id: string) => {
    setSelectedImageIds((previousSelectedImageIds) =>
      previousSelectedImageIds.filter((v) => v !== id),
    );
  };

  const toggleSelect = (isSelected: boolean, selectedLinkId: string) => {
    if (isSelected) {
      selectImage(selectedLinkId);
    } else {
      unselectImage(selectedLinkId);
    }
  };

  const handleSave = () => {
    /** @todo */
  };

  const handleDelete = async () => {
    if (
      await confirm({
        title: `선택한 사진 또는 동영상을\n삭제하시겠습니까?`,
        description: `(총 ${selectedImageIds.length}장)`,
      })
    ) {
      /** @todo  */
    }
  };

  return (
    <>
      <Header
        title={`사진 & 동영상`}
        leftButtons={
          <button type="button">
            <Icon name="Close" color="black1" size={20} />
          </button>
        }
        rightButtons={
          mode === 'read' ? (
            <button type="button" onClick={handleCheckButtonClick}>
              <Icon name="Check" color="black1" size={20} />
            </button>
          ) : (
            <S.TextButton type="button" onClick={handleCancelButtonClick}>
              취소
            </S.TextButton>
          )
        }
      />
      <S.ListWrapper>
        {MOCK_IMAGES.map((image, index) => {
          const previousDate = MOCK_IMAGES[index - 1]?.date;
          const currentDate = MOCK_IMAGES[index].date;

          return (
            <>
              {previousDate !== currentDate && <S.Date>{image.date}</S.Date>}
              <ImageManageListItem
                key={image.id}
                mode={mode}
                imageSrc={image.imageSrc}
                size="33.3%"
                isSelected={selectedImageIds.includes(image.id)}
                onSelectChange={(isSelected) => toggleSelect(isSelected, image.id)}
              />
            </>
          );
        })}
      </S.ListWrapper>
      {mode === 'edit' && (
        <S.EditActionRow>
          <button
            type="button"
            aria-label={`선택된 ${selectedImageIds.length}개의 항목 저장`}
            onClick={handleSave}
          >
            <Icon name="Download" size={20} />
          </button>
          <button
            type="button"
            aria-label={`선택된 ${selectedImageIds.length}개의 항목 제거`}
            onClick={handleDelete}
          >
            <Icon name="Delete" size={20} />
          </button>
        </S.EditActionRow>
      )}
    </>
  );
};

export default ImageAndVideoManageList;

export const getServerSideProps: GetServerSidePropsWithState<ImageAndVideoManageListProps> = async (
  ctx,
) => {
  const {
    query: { id },
  } = ctx;

  return {
    props: {
      id: String(id),
    },
  };
};
