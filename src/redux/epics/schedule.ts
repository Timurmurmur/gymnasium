import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap, mapTo } from "rxjs/operators";
import { FuncEpic } from "../../common/types";
import { LOAD_SHEDULE, loadShedule, loadSheduleSuccess, loadSheduleError, LOAD_SHORT_SHEDULE, loadShortSheduleSuccess, loadShortSheduleError, LOAD_LONG_SHEDULE, loadLongShedule, loadLongSheduleSuccess, loadLongSheduleError } from "../actions/shedule";

const scheduleEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_SHEDULE),
        switchMap(({ date }) => {
            return from(deps.scheduleDataProvider.loadSchedule(store$.value.profile.selectedProfile.id, date)).pipe(
                switchMap(shedule => {
                    return of(loadSheduleSuccess(shedule))
                }),
                catchError(err => {
                    return of(loadSheduleError(err))
                })
            )
        })
    )
}

const shortScheduleEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_SHORT_SHEDULE),
        switchMap(() => {
            return from(deps.scheduleDataProvider.loadShortSchedule(store$.value.profile.selectedProfile.id)).pipe(
                switchMap(shedule => {
                    return of(loadShortSheduleSuccess(shedule))
                }),
                catchError(err => {
                    return of(loadShortSheduleError(err))
                })
            )
        })
    )
}
const longScheduleEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_LONG_SHEDULE),
        switchMap(() => {
            return from(deps.scheduleDataProvider.loadLongSchedule(store$.value.profile.selectedProfile.id)).pipe(
                switchMap(shedule => {
                    return of(loadLongSheduleSuccess(shedule))
                }),
                catchError(err => {
                    return of(loadLongSheduleError(err))
                })
            )
        })
    )
}

export const scheduleEpics = combineEpics(scheduleEpic, shortScheduleEpic, longScheduleEpic)