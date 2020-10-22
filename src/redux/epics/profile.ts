import { loadProfileSuccess, loadProfileError, LOAD_PROFILE, LOAD_SELECTED_PROFILE, loadSelectedProfileError, loadSelectedProfileSuccess, loadSelectedProfile } from '../actions/profile';
import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap, mapTo } from "rxjs/operators";
import { loadMarks } from '../actions/marks';
import { loadDocuments } from '../actions/documents';
import { FuncEpic } from '../../common/types';

const profileEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_PROFILE),
        switchMap(() => {
            return from(deps.profileDataProvider.loadProfile()).pipe(
                switchMap(profiles => {
                    if (store$.value.profile.selectedProfile === null) {
                        return of(loadProfileSuccess(profiles), loadSelectedProfile(store$.value.selectedProfile.pageStatus, profiles[0]))
                    } else {
                        return of(loadProfileSuccess(profiles), loadSelectedProfile(store$.value.selectedProfile.pageStatus, store$.value.profile.selectedProfile))
                    }
                    
                }),
                catchError(err => {
                    return of(loadProfileError(err))
                })
            )
        })
    )
}

const loadSelectedProfileEpic = (action$, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_SELECTED_PROFILE),
        switchMap(({ selectedProfile }) => {
            return from(deps.profileDataProvider.loadSelectedProfile(selectedProfile)).pipe(
                switchMap(profile => {
                    return of(loadSelectedProfileSuccess(profile))
                }),
                catchError(err => {
                    return of(loadSelectedProfileError(err))
                })
            )
        })
    )
}

export const profileEpics = combineEpics(profileEpic, loadSelectedProfileEpic)