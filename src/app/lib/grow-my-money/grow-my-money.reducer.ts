// counter.ts
import {
  Action,
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

export interface GrowMyMoneyState {
  advisorId: string;
}

export const growMyMoneyStateInitialState: GrowMyMoneyState = {
  advisorId: ''
};

export function clientReducer(
  state: GrowMyMoneyState = growMyMoneyStateInitialState,
  action: Action
) {
  return state;
}
