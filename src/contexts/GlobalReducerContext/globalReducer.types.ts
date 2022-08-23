import { ConfirmModalProps } from '@src/components/reusable/ConfirmModal';

export type GlobalReducerState = {
  confirmModal: Pick<ConfirmModalProps, 'open' | 'headerTitle' | 'title' | 'description'>;
};

export const GLOBAL_REDUCER_ACTION = {
  OPEN_CONFIRM: 'OPEN_CONFIRM',
  CLOSE_CONFIRM: 'CLOSE_CONFIRM',
} as const;

export type GlobalReducerActionType =
  typeof GLOBAL_REDUCER_ACTION[keyof typeof GLOBAL_REDUCER_ACTION];

export type GlobalReducerAction = {
  type: GlobalReducerActionType;
  payload?: any;
};
