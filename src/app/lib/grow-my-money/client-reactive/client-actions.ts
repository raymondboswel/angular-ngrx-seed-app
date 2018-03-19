import { Action } from '@ngrx/store';
import { Client } from './models/client.model';

export enum ClientActionTypes {
  SET_CLIENT = '[Client] Set',
  UNSET_CLIENT = '[Client] Unset'
}

export class SetClientAction implements Action {
  readonly type = ClientActionTypes.SET_CLIENT;

  constructor(public payload: Client) {}
}

export class UnsetClientAction implements Action {
  readonly type = ClientActionTypes.UNSET_CLIENT;
}

export type ClientActions = SetClientAction | UnsetClientAction;
