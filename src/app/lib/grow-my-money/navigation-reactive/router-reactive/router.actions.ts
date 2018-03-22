import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';

export class GoAction implements Action {
  readonly type = GO;

  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class BackAction implements Action {
  readonly type = BACK;
}

export class ForwardAction implements Action {
  readonly type = FORWARD;
}

export type RouterActions = GoAction | BackAction | ForwardAction;
