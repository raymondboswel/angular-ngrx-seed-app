import { AppState } from './../../app-reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Client } from './client-reactive/models/client.model';
import {
  SetClientAction,
  UnsetClientAction
} from './client-reactive/client-actions';
import { Observable } from 'rxjs/Observable';
import { client } from './client-reactive/client-reducer';

@Component({
  selector: 'sbg-grow-my-money',
  templateUrl: './grow-my-money.component.html',
  styleUrls: ['./grow-my-money.component.scss']
})
export class GrowMyMoneyComponent implements OnInit {
  public client$: Observable<Client> = null;

  constructor(public store: Store<AppState>) {}

  ngOnInit() {
    this.client$ = this.store.select(client);
  }

  setClient() {
    const newClient = new Client('Raymond', 'Boswel');
    const setClientAction = this.store.dispatch(new SetClientAction(newClient));
  }

  unsetClient() {
    const setClientAction = this.store.dispatch(new UnsetClientAction());
  }
}
