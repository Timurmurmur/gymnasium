export const LOAD_SHEDULE = "@shedule/LOAD_SHEDULE";
export const LOAD_SHEDULE_SUCCESS = "@shedule/LOAD_SHEDULE_SUCCESS";
export const LOAD_SHEDULE_ERROR = "@shedule/LOAD_SHEDULE_ERROR";

export type LOAD_SHEDULE = typeof LOAD_SHEDULE;
export type LOAD_SHEDULE_SUCCESS = typeof LOAD_SHEDULE_SUCCESS;
export type LOAD_SHEDULE_ERROR = typeof LOAD_SHEDULE_ERROR;

export interface LoadSheduleAction {
    date: Date;
    type: LOAD_SHEDULE;
}

export interface LoadSheduleSuccessAction {
    type: LOAD_SHEDULE_SUCCESS;
    shedule: any;
}

export interface LoadSheduleErrorAction {
    type: LOAD_SHEDULE_ERROR;
    err: any;
}

export const loadShedule = (date: Date): LoadSheduleAction => ({
    type: LOAD_SHEDULE,
    date
});

export const loadSheduleSuccess = (shedule: any): LoadSheduleSuccessAction => ({
    type: LOAD_SHEDULE_SUCCESS,
    shedule
});

export const loadSheduleError = (err: any): LoadSheduleErrorAction => ({
    type: LOAD_SHEDULE_ERROR,
    err
});

export const LOAD_SHORT_SHEDULE = "@shedule/LOAD_SHORT_SHEDULE";
export const LOAD_SHORT_SHEDULE_SUCCESS = "@shedule/LOAD_SHORT_SHEDULE_SUCCESS";
export const LOAD_SHORT_SHEDULE_ERROR = "@shedule/LOAD_SHORT_SHEDULE_ERROR";

export type LOAD_SHORT_SHEDULE = typeof LOAD_SHORT_SHEDULE;
export type LOAD_SHORT_SHEDULE_SUCCESS = typeof LOAD_SHORT_SHEDULE_SUCCESS;
export type LOAD_SHORT_SHEDULE_ERROR = typeof LOAD_SHORT_SHEDULE_ERROR;

export interface LoadShortSheduleAction {
    type: LOAD_SHORT_SHEDULE;
}

export interface LoadShortSheduleSuccessAction {
    type: LOAD_SHORT_SHEDULE_SUCCESS,
    shedule: any;
}

export interface LoadShortSheduleErrorAction {
    type: LOAD_SHORT_SHEDULE_ERROR,
    err: any;
}

export const loadShortShedule = (): LoadShortSheduleAction => ({
    type: LOAD_SHORT_SHEDULE,
});

export const loadShortSheduleSuccess = (shedule: any): LoadShortSheduleSuccessAction => ({
    type: LOAD_SHORT_SHEDULE_SUCCESS,
    shedule
});

export const loadShortSheduleError = (err: any): LoadShortSheduleErrorAction => ({
    type: LOAD_SHORT_SHEDULE_ERROR,
    err
});

export const LOAD_LONG_SHEDULE = "@shedule/LOAD_LONG_SHEDULE";
export const LOAD_LONG_SHEDULE_SUCCESS = "@shedule/LOAD_LONG_SHEDULE_SUCCESS";
export const LOAD_LONG_SHEDULE_ERROR = "@shedule/LOAD_LONG_SHEDULE_ERROR";

export type LOAD_LONG_SHEDULE = typeof LOAD_LONG_SHEDULE;
export type LOAD_LONG_SHEDULE_SUCCESS = typeof LOAD_LONG_SHEDULE_SUCCESS;
export type LOAD_LONG_SHEDULE_ERROR = typeof LOAD_LONG_SHEDULE_ERROR;

export interface LoadLongSheduleAction {
    type: LOAD_LONG_SHEDULE;
}

export interface LoadLongSheduleSuccessAction {
    type: LOAD_LONG_SHEDULE_SUCCESS;
    shedule: any;
}

export interface LoadLongSheduleErrorAction {
    type: LOAD_LONG_SHEDULE_ERROR;
    err: any;
}

export const loadLongShedule = (): LoadLongSheduleAction => ({
    type: LOAD_LONG_SHEDULE,
});

export const loadLongSheduleSuccess = (shedule: any): LoadLongSheduleSuccessAction => ({
    type: LOAD_LONG_SHEDULE_SUCCESS,
    shedule
});

export const loadLongSheduleError = (err: any): LoadLongSheduleErrorAction => ({
    type: LOAD_LONG_SHEDULE_ERROR,
    err
});

export type SheduleActions = LoadSheduleAction | LoadSheduleErrorAction | LoadSheduleSuccessAction | LoadLongSheduleAction | LoadLongSheduleErrorAction | LoadLongSheduleSuccessAction | LoadShortSheduleAction | LoadShortSheduleErrorAction | LoadShortSheduleSuccessAction;