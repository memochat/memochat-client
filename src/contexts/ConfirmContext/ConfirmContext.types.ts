import { Dispatch } from 'react';

import { ConfirmModalProps } from '@src/components/reusable/ConfirmModal';

export const CONFIRM_ACTION = {
  OPEN_CONFIRM: 'OPEN_CONFIRM',
  CLOSE_CONFIRM: 'CLOSE_CONFIRM',
} as const;

export type ConfirmActionType = typeof CONFIRM_ACTION[keyof typeof CONFIRM_ACTION];

export type ConfirmState = {
  open: boolean;
} & Pick<ConfirmModalProps, 'headerTitle' | 'title' | 'description'>;

export type ConfirmAction = {
  type: ConfirmActionType;
  payload?: Pick<ConfirmModalProps, 'headerTitle' | 'title' | 'description'>;
};

export type ConfirmContextType = [ConfirmState, Dispatch<ConfirmAction>];
