import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import { GO, GoAction, BACK, FORWARD } from './router.actions';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$
    .ofType(GO)
    .map((action: GoAction) => action.payload)
    .do(({ path, query: queryParams, extras }) =>
      this.router.navigate(path, { queryParams, ...extras })
    );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.ofType(BACK).do(() => this.location.back());

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$
    .ofType(FORWARD)
    .do(() => this.location.forward());

  constructor(
    public actions$: Actions,
    public router: Router,
    public location: Location
  ) {}
}
