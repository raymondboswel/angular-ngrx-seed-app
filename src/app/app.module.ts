import { GrowMyMoneyModule } from './lib/grow-my-money/grow-my-money.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppState, appReducers } from './app-reducer';
import { storeLogger } from 'ngrx-store-logger';

// tslint:disable-next-line:no-shadowed-variable
export function ngrxStoreLogger(r: ActionReducer<AppState>): any {
  return storeLogger()(r);
}

export function stateSetter(r: ActionReducer<any>): ActionReducer<any> {
  return function(state: any, action: any) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return r(state, action);
  };
}

export const metaReducers = [ngrxStoreLogger, stateSetter];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    appRoutingModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreRouterConnectingModule,
    GrowMyMoneyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
