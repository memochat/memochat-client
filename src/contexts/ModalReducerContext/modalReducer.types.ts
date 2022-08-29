import { ConfirmModalProps } from '@src/components/reusable/ConfirmModal';

export type ModalReducerState = {
  confirmState: Pick<ConfirmModalProps, 'open' | 'headerTitle' | 'title' | 'description'>;
};

export const MODAL_REDUCER_ACTION = {
  OPEN_CONFIRM: 'OPEN_CONFIRM',
  CLOSE_CONFIRM: 'CLOSE_CONFIRM',
} as const;

export type ModalReducerActionType = typeof MODAL_REDUCER_ACTION[keyof typeof MODAL_REDUCER_ACTION];

export type ModalReducerAction = {
  type: ModalReducerActionType;
  payload?: any;
};
