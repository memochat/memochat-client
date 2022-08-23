import { Dispatch } from 'react';

import { GlobalReducerAction, GlobalReducerState } from './globalReducer.types';

export type GlobalReducerContextType = [GlobalReducerState, Dispatch<GlobalReducerAction>];
