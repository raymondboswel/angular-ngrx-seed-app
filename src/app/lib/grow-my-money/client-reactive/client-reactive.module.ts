import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { clientReducer, ClientState } from './client-reducer';

export const reducers: ActionReducerMap<any> = {
  clientReducer: clientReducer
};

export interface ClientReducerState {
  clientReducer: ClientState;
}

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('clientReducer', reducers)],
  declarations: []
})
export class ClientReactiveModule {}
