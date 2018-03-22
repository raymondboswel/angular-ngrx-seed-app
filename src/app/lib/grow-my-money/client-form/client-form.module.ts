import { ClientFormContainerComponent } from './container/client-form-container/client-form-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientNameComponent } from './components/client-name/client-name.component';
import { ClientReactiveModule } from './reactive/client-form-reactive/client-reactive.module';

@NgModule({
  imports: [CommonModule, ClientReactiveModule],
  declarations: [ClientNameComponent, ClientFormContainerComponent]
})
export class ClientFormModule {}
