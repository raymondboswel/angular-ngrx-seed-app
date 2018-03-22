import {
  RequestClientAction,
  ClientRequestActionTypes
} from './client-request.actions';

describe('ClientRequestActions', () => {
  it('should create an action', () => {
    const payload = 'id number';

    const action = new RequestClientAction(payload);

    expect({ ...action }).toEqual({
      type: ClientRequestActionTypes.REQUEST_CLIENT,
      payload
    });
  });
});
