import { ComponentMeta } from '@storybook/react';

import Button from '../Button';

import GlobalConfirmModal from '.';

import useConfirm from '@src/shared/hooks/useConfirm';

export default {
  title: 'Components/reusable/GlobalConfirmModal',
  component: GlobalConfirmModal,
} as ComponentMeta<typeof GlobalConfirmModal>;

export const Default = () => {
  const { confirm } = useConfirm();

  const handleClick = async () => {
    if (
      await confirm({
        title: '로그아웃 하시겠습니까?',
        description: '메모 내용 백업이 일시 정지됩니다.',
      })
    ) {
      alert('confirm');
    }
  };

  return <Button onClick={handleClick}>Click</Button>;
};
