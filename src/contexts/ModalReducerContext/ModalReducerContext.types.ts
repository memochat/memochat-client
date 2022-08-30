import { Dispatch } from 'react';

import { ModalReducerState, ModalReducerAction } from './modalReducer.types';

export type ModalReducerContextType = [ModalReducerState, Dispatch<ModalReducerAction>];
