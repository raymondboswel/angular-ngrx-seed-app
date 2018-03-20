import { RequestClientAction } from '../actions/client-request.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app-reducer';
import { Client } from '../models/client.model';
import { clientSelector } from '../reducer/client.reducer';
import {
  SetClientAction,
  UnsetClientAction
} from '../actions/client-set.actions';

@Injectable()
export class ClientService {
  constructor(public store: Store<AppState>) {}

  public getClient(): Observable<Client> {
    return this.store.select(clientSelector);
  }

  public setClient(newClient: Client): void {
    this.store.dispatch(new SetClientAction(newClient));
  }

  public unsetClient(): void {
    this.store.dispatch(new UnsetClientAction());
  }

  public requestClient(idNumber: string): void {
    this.store.dispatch(new RequestClientAction(idNumber));
  }
}
