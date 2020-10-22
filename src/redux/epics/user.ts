import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap, mapTo } from "rxjs/operators";
import { loadUserSuccess, loadUserError, LOAD_USER } from "../actions/user";
import { EpicDeps } from "../store";

const loadUserEpic: EpicDeps = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_USER),
        switchMap(() => {
            return from(deps.profileDataProvider.loadUser()).pipe(
                switchMap(user => {
                    return of(loadUserSuccess(user))
                }),
                catchError(err => {
                    return of(loadUserError(err))
                })
            )
        })
    )
}

export const userEpics = combineEpics(loadUserEpic)