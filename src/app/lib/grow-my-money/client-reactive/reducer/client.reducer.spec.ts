import { SetClientAction } from './../actions/client-set.actions';
import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import {
  ClientState,
  clientReducerInitialState,
  clientReducer
} from './client.reducer';
import { appReducers } from '../../../../app-reducer';
import { clientFeatureReducers } from '../client-reactive.module';
import { Client } from '../models/client.model';

fdescribe('ClientReducer', () => {
  let store: Store<ClientState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          appReducers,
          clientReducer: combineReducers(clientFeatureReducers)
        })
      ],
      providers: []
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action: any = {};
      const state = clientReducer(undefined, action);

      expect(state).toBe(clientReducerInitialState);
    });
  });

  describe('set client action', () => {
    it('should set the client', () => {
      const client = new Client('test', 'client');
      const action: any = new SetClientAction(client);
      const state = clientReducer(clientReducerInitialState, action);

      expect(state.client).toBe(client);
    });
  });
});
