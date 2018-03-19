import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { clientReducer, ClientState } from './client-reducer';
import { ClientService } from './client.service';

export const reducers: ActionReducerMap<any> = {
  clientReducer: clientReducer
};

export interface ClientReducerState {
  clientReducer: ClientState;
}

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('clientReducer', reducers)],
  declarations: [],
  providers: [ClientService]
})
export class ClientReactiveModule {}
