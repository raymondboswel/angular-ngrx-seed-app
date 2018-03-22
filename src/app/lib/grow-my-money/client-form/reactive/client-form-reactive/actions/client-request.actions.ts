import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';

export enum ClientRequestActionTypes {
  REQUEST_CLIENT = '[Client] Request client',
  REQUEST_CLIENT_FAILED = '[Client] Request client failed',
  REQUEST_CLIENT_SUCCESS = '[Client] Request client success'
}

export class RequestClientAction implements Action {
  readonly type = ClientRequestActionTypes.REQUEST_CLIENT;
  constructor(public payload: string) {}
}

export class RequestClientFailedAction implements Action {
  readonly type = ClientRequestActionTypes.REQUEST_CLIENT;
}

export class RequestClientSuccessAction implements Action {
  readonly type = ClientRequestActionTypes.REQUEST_CLIENT_SUCCESS;
  constructor(public payload: Client) {}
}

export type ClientRequestActions =
  | RequestClientAction
  | RequestClientFailedAction
  | RequestClientSuccessAction;
