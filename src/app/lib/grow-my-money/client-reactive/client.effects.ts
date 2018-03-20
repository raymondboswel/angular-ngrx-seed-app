import {
  RequestClientAction,
  RequestClientSuccessAction
} from './actions/client-request.actions';
/**
 * The Goal Setter Client Effects
 */
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { ClientApiService } from './client.api.service';
import {
  ClientRequestActionTypes,
  RequestClientFailedAction
} from './actions/client-request.actions';
import { Client } from './models/client.model';
import { mapToAction } from '../utils/reactive/map-to-action';

@Injectable()
export class ClientEffects {
  constructor(
    public actions$: Actions,
    public clientApiService: ClientApiService
  ) {}

  @Effect()
  getClient$ = this.actions$
    .ofType(ClientRequestActionTypes.REQUEST_CLIENT)
    .map<Action, string>((action: RequestClientAction) => {
      return action.payload;
    })
    .switchMap((clientSAId: string) => {
      return mapToAction(
        this.clientApiService.getClient(clientSAId),
        RequestClientSuccessAction,
        RequestClientFailedAction
      );
    });
}
