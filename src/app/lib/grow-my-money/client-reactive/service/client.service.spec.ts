import { TestBed, inject } from '@angular/core/testing';

import { ClientService } from './client.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client.model';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { appReducers } from '../../../../app-reducer';
import {
  clientReducer,
  initialState,
  ClientState,
  clientSelector
} from '../reducer/client.reducer';
import { clientFeatureReducers } from '../client-reactive.module';
import {
  SetClientAction,
  UnsetClientAction
} from '../actions/client-set.actions';
import { RequestClientAction } from '../actions/client-request.actions';

fdescribe('ClientService', () => {
  let store: Store<ClientState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          appReducers,
          clientReducer: combineReducers(clientFeatureReducers)
        })
      ],
      providers: [ClientService]
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it(
    'should be created',
    inject([ClientService], (service: ClientService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should be return an Observable containing the Client when getClient() is called.',
    inject([ClientService], (service: ClientService) => {
      let result: Client;

      service.getClient().subscribe(client => {
        result = client;
      });
      expect(result).toEqual(initialState.client);
    })
  );

  it(
    'should be dispatch a SetClientAction containing the Client when setClient() is called.',
    inject([ClientService], (service: ClientService) => {
      const client: Client = new Client('test', 'client');

      service.setClient(client);
      const action = new SetClientAction(client);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    })
  );

  it(
    'should be dispatch na UnsetClientAction when unsetClient() is called.',
    inject([ClientService], (service: ClientService) => {
      const client: Client = new Client('test', 'client');

      service.unsetClient();
      const action = new UnsetClientAction();
      expect(store.dispatch).toHaveBeenCalledWith(action);
    })
  );

  it(
    'should be dispatch na RequestClientAction when requestClient() is called.',
    inject([ClientService], (service: ClientService) => {
      service.requestClient('1232');
      const action = new RequestClientAction('1232');
      expect(store.dispatch).toHaveBeenCalledWith(action);
    })
  );
});
