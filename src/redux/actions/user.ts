export const LOAD_USER = "@user/LOAD_USER";
export const LOAD_USER_SUCCESS = "@user/LOAD_USER_SUCCESS";
export const LOAD_USER_ERROR = "@user/LOAD_USER_ERROR";

export type LOAD_USER = typeof LOAD_USER;
export type LOAD_USER_SUCCESS = typeof LOAD_USER_SUCCESS;
export type LOAD_USER_ERROR = typeof LOAD_USER_ERROR;

export interface LoadUserAction {
    type: LOAD_USER;
}

export interface LoadUserSuccessAction {
    type: LOAD_USER_SUCCESS;
    user: any;
}

export interface LoadUserErrorAction {
    type: LOAD_USER_ERROR;
    error: any;
}

export const loadUser = (): LoadUserAction => ({
    type: LOAD_USER
});

export const loadUserSuccess = (user: any): LoadUserSuccessAction => ({
    type: LOAD_USER_SUCCESS,
    user
});

export const loadUserError = (error: any): LoadUserErrorAction => ({
    type: LOAD_USER_ERROR,
    error
});

export type UserActions =  LoadUserAction | LoadUserErrorAction | LoadUserSuccessAction;