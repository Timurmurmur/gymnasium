import { PageStatus } from "../../common/types";

export const LOAD_NEAREST_EVENT = "@near/LOAD_NEAREST_EVENT";
export const LOAD_NEAREST_EVENT_SUCCESS = "@near/LOAD_NEAREST_EVENT_SUCCESS";
export const LOAD_NEAREST_EVENT_ERROR = "@near/LOAD_NEAREST_EVENT_ERROR";

export type LOAD_NEAREST_EVENT = typeof LOAD_NEAREST_EVENT;
export type LOAD_NEAREST_EVENT_SUCCESS = typeof LOAD_NEAREST_EVENT_SUCCESS;
export type LOAD_NEAREST_EVENT_ERROR = typeof LOAD_NEAREST_EVENT_ERROR;

export interface LoadNearestEventAction {
    type: LOAD_NEAREST_EVENT;
    pageStatus: PageStatus;
}

export interface LoadNearestEventSuccessAction {
    type: LOAD_NEAREST_EVENT_SUCCESS;
    event: any;
}

export interface LoadNearestEventErrorAction {
    type: LOAD_NEAREST_EVENT_ERROR;
    error: any;
}


export const loadNear = (pageStatus: PageStatus): LoadNearestEventAction => ({
    type: LOAD_NEAREST_EVENT,
    pageStatus
});

export const loadNearSuccess = (event: any): LoadNearestEventSuccessAction => ({
    type: LOAD_NEAREST_EVENT_SUCCESS,
    event
});

export const loadNearError = (error: any): LoadNearestEventErrorAction => ({
    type: LOAD_NEAREST_EVENT_ERROR,
    error
});

export type NearestEventActions = LoadNearestEventAction | LoadNearestEventErrorAction | LoadNearestEventSuccessAction;