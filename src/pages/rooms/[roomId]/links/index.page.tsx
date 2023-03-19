import { union } from 'lodash-es';
import { useState } from 'react';

import * as S from './links.styles';
import { LinkManageListProps, LinkManageMode } from './links.types';

import AuthGuard from '@src/features/auth/components/AuthGuard';
import LinkManageListItem from '@src/features/chat/components/LinkManageListItem';
import { Icon } from '@src/shared/components';
import Header from '@src/shared/components/Header';
import useConfirm from '@src/shared/hooks/useConfirm';
import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';

const mockImageSrc = '/images/big-chat.png';
const MOCK_LINKS = [
  ...[...Array(3)].map((_, i) => ({
    id: `0${i}`,
    imageSrc: mockImageSrc,
    title: `제목 ${i}`,
    date: '2022년 9월 21일 수요일',
  })),
  ...[...Array(5)].map((_, i) => ({
    id: `1${i}`,
    imageSrc: mockImageSrc,
    title: `제목 ${i} 두줄이상 두줄이상 두줄이상 두줄이상 두줄이상 두줄이상 두줄이상 두줄이상 두줄이상`,
    date: '2022년 9월 22일 목요일',
  })),
  ...[...Array(1)].map((_, i) => ({
    id: `2${i}`,
    imageSrc: mockImageSrc,
    title: `제목 ${i}`,
    date: '2022년 9월 23일 금요일',
  })),
  ...[...Array(4)].map((_, i) => ({
    id: `3${i}`,
    imageSrc: mockImageSrc,
    title: `제목 ${i}`,
    date: '2022년 9월 24일 토요일',
  })),
];

const LinkManageList: NextPageWithLayout<LinkManageListProps> = ({ roomId }) => {
  const { confirm } = useConfirm();

  const [mode, setMode] = useState<LinkManageMode>('read');

  const [selectedLinkIds, setSelectedLinkIds] = useState<string[]>([]);

  const handleCheckButtonClick = () => {
    setMode('edit');
  };

  const handleCancelButtonClick = () => {
    setMode('read');
    setSelectedLinkIds([]);
  };

  const selectLink = (id: string) => {
    setSelectedLinkIds((previousSelectedLinkIds) => union(previousSelectedLinkIds, [id]));
  };

  const unselectLink = (id: string) => {
    setSelectedLinkIds((previousSelectedLinkIds) =>
      previousSelectedLinkIds.filter((v) => v !== id),
    );
  };

  const toggleSelect = (isSelected: boolean, selectedLinkId: string) => {
    if (isSelected) {
      selectLink(selectedLinkId);
    } else {
      unselectLink(selectedLinkId);
    }
  };

  const handleDelete = async () => {
    if (
      await confirm({
        title: `선택한 링크를\n삭제하시겠습니까?`,
        description: `(총 ${selectedLinkIds.length}개)`,
      })
    ) {
      /** @todo  */
    }
  };

  return (
    <>
      <Header
        title="링크"
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
        {MOCK_LINKS.map((link, index) => {
          const previousDate = MOCK_LINKS[index - 1]?.date;
          const currentDate = MOCK_LINKS[index].date;

          return (
            <>
              {previousDate !== currentDate && <S.Date>{link.date}</S.Date>}
              <LinkManageListItem
                key={link.id}
                mode={mode}
                imageSrc={link.imageSrc}
                imageAlt={link.title}
                title={link.title}
                isSelected={selectedLinkIds.includes(link.id)}
                onSelectChange={(isSelected) => toggleSelect(isSelected, link.id)}
              />
            </>
          );
        })}
      </S.ListWrapper>
      {mode === 'edit' && (
        <S.EditActionRow>
          <S.DeleteButton
            type="button"
            aria-label={`선택된 ${selectedLinkIds.length}개의 항목 제거`}
            onClick={handleDelete}
          >
            <Icon name="Delete" size={20} />
          </S.DeleteButton>
        </S.EditActionRow>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSidePropsWithState<LinkManageListProps> = async (ctx) => {
  const query = ctx.query;
  const roomId = Number(query.roomId);

  return {
    props: {
      roomId: Number(roomId),
    },
  };
};

LinkManageList.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default LinkManageList;
