import { AppState } from './../../app-reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Client } from './client-reactive/models/client.model';

import { Observable } from 'rxjs/Observable';
import { ClientService } from './client-reactive/client.service';

@Component({
  selector: 'sbg-grow-my-money',
  templateUrl: './grow-my-money.component.html',
  styleUrls: ['./grow-my-money.component.scss']
})
export class GrowMyMoneyComponent implements OnInit {
  public client$: Observable<Client> = null;

  constructor(public clientService: ClientService) {}

  ngOnInit() {
    this.client$ = this.clientService.getClient();
  }

  setClient() {
    const newClient = new Client('Raymond', 'Boswel');
    this.clientService.setClient(newClient);
  }

  unsetClient() {
    this.clientService.unsetClient();
  }

  requestClient() {
    this.clientService.requestClient();
  }
}
