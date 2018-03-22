import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultHeadlineComponent } from './components/result-headline/result-headline.component';
import { ResultComponent } from './components/result/result.component';
import { ResultsContainerComponent } from './container/results-container/results-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ResultsContainerComponent,
    ResultHeadlineComponent,
    ResultComponent,
    ResultsContainerComponent
  ]
})
export class ResultsModule {}
