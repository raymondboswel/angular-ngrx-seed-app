import { Client } from '../models/client.model';
// counter.ts
import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientActions } from '../actions/client.actions';
import { ClientReducerState } from '../client-reactive.module';
import { ClientSetActionTypes } from '../actions/client-set.actions';
import { ClientRequestActionTypes } from '../actions/client-request.actions';

export interface ClientState {
  client: Client;
}

export const clientReducerInitialState: ClientState = {
  client: new Client('Initial', 'client')
};

export function clientReducer(
  state: ClientState = clientReducerInitialState,
  action: ClientActions
) {
  switch (action.type) {
    case ClientSetActionTypes.SET_CLIENT:
      return {
        ...state,
        client: action.payload
      };

    case ClientSetActionTypes.UNSET_CLIENT:
      return {
        ...state,
        client: null
      };

    case ClientRequestActionTypes.REQUEST_CLIENT_SUCCESS:
      return {
        ...state,
        client: action.payload
      };

    default:
      return state;
  }
}

export const getClientState = createFeatureSelector<ClientReducerState>(
  'clientReducer'
);

export const clientSelector = createSelector(getClientState, clientState => {
  return clientState.clientReducer.client;
});
