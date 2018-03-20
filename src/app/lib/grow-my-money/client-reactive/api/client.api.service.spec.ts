import { ClientApiService } from './client.api.service';
import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('GoalSetterApi', () => {
  let service: ClientApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientApiService]
    });

    service = TestBed.get(ClientApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  // Not a good example of Http test, as Http not used yet.
  describe('when getClients() is called', () => {
    const endpoint =
      'http://localhost:9876/sbg-mobile/rest/GS/GoalsaverServices/FetchClients';

    it('should return the client list data', () => {
      const clientId = '123';
      service.getClient(clientId).subscribe(client => {
        expect(client.firstName).toEqual('Raymond');
      });
    });
  });
});
