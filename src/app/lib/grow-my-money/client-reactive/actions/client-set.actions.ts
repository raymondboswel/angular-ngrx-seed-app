import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';

export enum ClientSetActionTypes {
  SET_CLIENT = '[Client] Set',
  UNSET_CLIENT = '[Client] Unset'
}

export class SetClientAction implements Action {
  readonly type = ClientSetActionTypes.SET_CLIENT;

  constructor(public payload: Client) {}
}

export class UnsetClientAction implements Action {
  readonly type = ClientSetActionTypes.UNSET_CLIENT;
}

export type ClientSetActions = SetClientAction | UnsetClientAction;
