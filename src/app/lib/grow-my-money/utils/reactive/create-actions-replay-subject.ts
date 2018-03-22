import { Action } from '@ngrx/store';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export function createActionsReplaySubject(
  actions: Action[]
): ReplaySubject<any> {
  const replaySubject = actions.reduce(
    (subj: ReplaySubject<any>, action): ReplaySubject<Action> => {
      subj.next(action);
      return subj;
    },
    new ReplaySubject(actions.length)
  );
  replaySubject.complete();
  return replaySubject;
}
