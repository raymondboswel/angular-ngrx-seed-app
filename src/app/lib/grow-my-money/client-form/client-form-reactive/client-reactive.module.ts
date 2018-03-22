import { ClientEffects } from './effects/client.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { clientReducer, ClientState } from './reducer/client.reducer';
import { ClientService } from './service/client.service';
import { EffectsModule } from '@ngrx/effects';
import { ClientApiService } from './api/client.api.service';

export const clientFeatureReducers: ActionReducerMap<any> = {
  clientReducer: clientReducer
};

export interface ClientReducerState {
  clientReducer: ClientState;
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('clientReducer', clientFeatureReducers),
    EffectsModule.forFeature([ClientEffects])
  ],
  declarations: [],
  providers: [ClientService, ClientApiService]
})
export class ClientReactiveModule {}
