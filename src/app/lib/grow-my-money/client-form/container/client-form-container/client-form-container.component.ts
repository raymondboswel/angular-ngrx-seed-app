import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../client-form-reactive/models/client.model';
import { ClientService } from '../../client-form-reactive/service/client.service';
import { NavigationService } from '../../../navigation-reactive/navigation.service';

@Component({
  selector: 'app-client-form-container',
  templateUrl: './client-form-container.component.html',
  styleUrls: ['./client-form-container.component.scss']
})
export class ClientFormContainerComponent implements OnInit {
  public client$: Observable<Client> = null;

  constructor(
    public clientService: ClientService,
    public navigationService: NavigationService
  ) {
    this.client$ = this.clientService.getClient();
  }

  ngOnInit() {}

  setClient() {
    const newClient = new Client('Raymond', 'Boswel');
    this.clientService.setClient(newClient);
  }

  unsetClient() {
    this.clientService.unsetClient();
  }

  requestClient() {
    this.clientService.requestClient('123');
  }

  gotoResults() {
    this.navigationService.gotoResults();
  }
}
