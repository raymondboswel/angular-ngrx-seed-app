import { Client } from './models/client.model';
// counter.ts
import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientActionTypes, ClientActions } from './client-actions';
import { ClientReducerState } from './client-reactive.module';

export interface ClientState {
  client: Client;
}

export const initialState: ClientState = {
  client: new Client('Initial', 'client')
};

export function clientReducer(
  state: ClientState = initialState,
  action: ClientActions
) {
  switch (action.type) {
    case ClientActionTypes.SET_CLIENT:
      return {
        ...state,
        client: action.payload
      };

    case ClientActionTypes.UNSET_CLIENT:
      return {
        ...state,
        client: null
      };

    default:
      return state;
  }
}

export const getClientState = createFeatureSelector<ClientReducerState>(
  'clientReducer'
);

export const client = createSelector(getClientState, clientState => {
  return clientState.clientReducer.client;
});
