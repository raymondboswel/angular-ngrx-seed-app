import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import 'rxjs/add/observable/of';

@Injectable()
export class ClientApiService {
  constructor() {}

  getClient(clientSAId: string): Observable<Client> {
    const client = new Client('Raymond', 'Remote');
    return Observable.of(client);
  }
}
