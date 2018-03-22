import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { NavigationActionTypes } from './navigation.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { createActionsReplaySubject } from '../utils/reactive/create-actions-replay-subject';
import { GoAction } from './router-reactive/router.actions';

@Injectable()
export class GrowMyMoneyNavigationEffects {
  constructor(public actions$: Actions) {}

  @Effect()
  gotoClientList = this.actions$
    .ofType(NavigationActionTypes.GOTO_RESULTS)
    .switchMap(() => {
      // replaySubject used here so that multiple actions could be emitted, simpler option would be to merely map to the action
      return createActionsReplaySubject([new GoAction({ path: ['results'] })]);
    });
}
