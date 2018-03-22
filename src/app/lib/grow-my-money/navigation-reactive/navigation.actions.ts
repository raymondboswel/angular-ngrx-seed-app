import { Action } from '@ngrx/store';

export enum NavigationActionTypes {
  GOTO_RESULTS = '[Navigation] Go to results',
  GOTO_CLIENT_FORM = '[Navigation] Go to results'
}

export class GotoResults implements Action {
  readonly type = NavigationActionTypes.GOTO_RESULTS;
}

export class GotoClientForm implements Action {
  readonly type = NavigationActionTypes.GOTO_CLIENT_FORM;
}

export type ClientRequestActions = GotoResults | GotoClientForm;
