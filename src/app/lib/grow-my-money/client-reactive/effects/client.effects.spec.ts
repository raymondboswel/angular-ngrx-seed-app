import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Observable';
import {
  RequestClientSuccessAction,
  RequestClientAction
} from '../actions/client-request.actions';
import { Client } from '../models/client.model';
import { ClientEffects } from './client.effects';
import { ClientApiService } from '../api/client.api.service';

declare function asDiagram(arg: string): Function;

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

fdescribe('ClientEffects', () => {
  let effects: ClientEffects;
  let clientApiService: any;
  let actions$: TestActions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientEffects,
        { provide: Actions, useFactory: getActions },
        {
          provide: ClientApiService,
          useValue: jasmine.createSpyObj('ClientApiService', ['getClient'])
        }
      ]
    });
    actions$ = TestBed.get(Actions);
    clientApiService = TestBed.get(ClientApiService);
    effects = TestBed.get(ClientEffects);
  });

  describe('getClient', () => {
    it('should emit a RequestClientSuccessAction after a successful api call when RequestClientAction is dispatched', () => {
      const client: Client = new Client('test', 'client');
      const action = new RequestClientAction('client id');

      const clientSuccessAction = new RequestClientSuccessAction(client);

      actions$.stream = hot('-a-', { a: action });
      const getClientListObs = cold('a|', { a: client });
      const expected = cold('-b', { b: clientSuccessAction });

      clientApiService.getClient.and.returnValue(getClientListObs);

      expect(effects.getClient$).toBeObservable(expected);
    });
  });
});
