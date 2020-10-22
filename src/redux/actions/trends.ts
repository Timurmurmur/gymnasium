export const LOAD_TRENDS = "@trends/LOAD_TRENDS";
export const LOAD_TRENDS_SUCCESS = "@trends/LOAD_TRENDS_SUCCESS";
export const LOAD_TRENDS_ERROR = "@trends/LOAD_TRENDS_ERROR";

export type LOAD_TRENDS = typeof LOAD_TRENDS;
export type LOAD_TRENDS_SUCCESS = typeof LOAD_TRENDS_SUCCESS;
export type LOAD_TRENDS_ERROR = typeof LOAD_TRENDS_ERROR;

export interface LoadTrendsAction {
    type: LOAD_TRENDS;
}

export interface LoadTrendsSuccessAction {
    type: LOAD_TRENDS_SUCCESS;
    trends: any;
}

export interface LoadTrendsErrorAction {
    type: LOAD_TRENDS_ERROR;
    error: any;
}

export const loadTrends = (): LoadTrendsAction => ({
    type: LOAD_TRENDS
});

export const loadTrendsSuccess = (trends: any): LoadTrendsSuccessAction => ({
    type: LOAD_TRENDS_SUCCESS,
    trends
});

export const loadTrendsError = (error: any): LoadTrendsErrorAction => ({
    type: LOAD_TRENDS_ERROR,
    error
});

export type TrendsActions = LoadTrendsAction | LoadTrendsErrorAction | LoadTrendsSuccessAction;