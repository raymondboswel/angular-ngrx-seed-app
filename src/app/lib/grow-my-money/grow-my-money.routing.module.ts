import { ResultsContainerComponent } from './results/container/results-container/results-container.component';
import { ClientFormContainerComponent } from './client-form/container/client-form-container/client-form-container.component';
/**
 * Injected routing for goal setter routing
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'client-form'
      },
      {
        path: 'client-form',
        component: ClientFormContainerComponent
      },
      {
        path: 'results',
        component: ResultsContainerComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class GrowMyMoneyRoutingModule {
  constructor() {}
}
