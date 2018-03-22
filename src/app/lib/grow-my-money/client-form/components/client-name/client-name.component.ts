import { Client } from '../../client-form-reactive/models/client.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sbg-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.scss']
})
export class ClientNameComponent implements OnInit {
  @Input() client: Client;

  constructor() {}

  ngOnInit() {
    console.log(this.client);
  }
}
