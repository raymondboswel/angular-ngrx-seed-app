import { ClientState } from './lib/grow-my-money/client-reactive/client-reducer';
import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store/store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface AppState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const appReducers: ActionReducerMap<AppState> = {
  routerReducer: fromRouter.routerReducer
};
