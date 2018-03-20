import { Observable } from 'rxjs/Observable';

export function mapToAction(
  obs: Observable<any>,
  successActionClassRef: any,
  errorActionClassRef: any
) {
  return obs
    .map(result => {
      return new successActionClassRef(result);
    })
    .catch(error => {
      return Observable.of(new errorActionClassRef(error));
    });
}
