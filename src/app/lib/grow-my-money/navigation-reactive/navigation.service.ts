import { GotoResults } from './navigation.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GrowMyMoneyState } from '../grow-my-money.reducer';

@Injectable()
export class NavigationService {
  constructor(public store: Store<GrowMyMoneyState>) {}

  public gotoResults(): void {
    this.store.dispatch(new GotoResults());
  }

  public gotoClientForm(): void {
    this.store.dispatch(new GotoResults());
  }
}
