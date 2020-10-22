export const LOAD_MARKS = "@marks/LOAD_MARKS";
export const LOAD_MARKS_SUCCESS = "@marks/LOAD_MARKS_SUCCESS";
export const LOAD_MARKS_ERROR = "@marks/LOAD_MARKS_ERROR";

export type LOAD_MARKS = typeof LOAD_MARKS;
export type LOAD_MARKS_SUCCESS = typeof LOAD_MARKS_SUCCESS;
export type LOAD_MARKS_ERROR = typeof LOAD_MARKS_ERROR;

export interface LoadMarksAction {
    type: LOAD_MARKS;
    class_id: string;
    from: Date;
    to: Date;
}

export interface LoadMarksSuccessAction {
    type: LOAD_MARKS_SUCCESS,
    marks: any;
}

export interface LoadMakrsErrorAction {
    type: LOAD_MARKS_ERROR;
    error: any;
}

export const loadMarks = (class_id: string,from: Date, to: Date): LoadMarksAction => ({
    type: LOAD_MARKS,
    class_id,
    from, 
    to
});

export const loadMarksSuccess = (marks: any): LoadMarksSuccessAction => ({
    type: LOAD_MARKS_SUCCESS,
    marks
});

export const loadMarksError = (error: any): LoadMakrsErrorAction => ({
    type: LOAD_MARKS_ERROR,
    error
});

export const LOAD_LAST_MARKS = "@marks/LOAD_LAST_MARKS";
export const LOAD_LAST_MARKS_SUCCESS = "@marks/LOAD_LAST_MARKS_SUCCESS";
export const LOAD_LAST_MARKS_ERROR = "@marks/LOAD_LAST_MARKS_ERROR";

export type LOAD_LAST_MARKS = typeof LOAD_LAST_MARKS;
export type LOAD_LAST_MARKS_SUCCESS = typeof LOAD_LAST_MARKS_SUCCESS;
export type LOAD_LAST_MARKS_ERROR = typeof LOAD_LAST_MARKS_ERROR;


export interface LoadLastMarksAction {
    type: LOAD_LAST_MARKS;
}

export interface LoadLastMarksSuccessAction {
    type: LOAD_LAST_MARKS_SUCCESS;
    marks: any;
}

export interface LoadLastMarksErrorAction {
    type: LOAD_LAST_MARKS_ERROR;
    error: any;
}

export const loadLastMarks = (): LoadLastMarksAction => ({
    type: LOAD_LAST_MARKS,
});

export const loadLastMarksSuccess = (marks: any): LoadLastMarksSuccessAction => ({
    type: LOAD_LAST_MARKS_SUCCESS,
    marks
});

export const loadLastMarksError = (error: any): LoadLastMarksErrorAction => ({
    type: LOAD_LAST_MARKS_ERROR,
    error
});

export type MarksActions = LoadMarksAction | LoadMarksSuccessAction | LoadMakrsErrorAction | LoadLastMarksAction | LoadLastMarksSuccessAction | LoadLastMarksErrorAction;
