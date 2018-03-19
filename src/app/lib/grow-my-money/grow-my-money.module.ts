import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowMyMoneyComponent } from './grow-my-money.component';
import { ClientReactiveModule } from './client-reactive/client-reactive.module';
import { ClientNameComponent } from './components/presentation/client-name/client-name.component';

@NgModule({
  imports: [CommonModule, ClientReactiveModule],
  declarations: [GrowMyMoneyComponent, ClientNameComponent]
})
export class GrowMyMoneyModule {}
