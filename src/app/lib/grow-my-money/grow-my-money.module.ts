import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowMyMoneyComponent } from './grow-my-money.component';
import { ClientFormContainerComponent } from './client-form/container/client-form-container/client-form-container.component';
import { ClientFormModule } from './client-form/client-form.module';
import { GrowMyMoneyRoutingModule } from './grow-my-money.routing.module';
import { NavigationModule } from './navigation-reactive/navigation-reactive.module';

@NgModule({
  imports: [
    CommonModule,
    ClientFormModule,
    GrowMyMoneyRoutingModule,
    NavigationModule
  ],
  declarations: [GrowMyMoneyComponent]
})
export class GrowMyMoneyModule {}
