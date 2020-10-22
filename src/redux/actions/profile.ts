import { PageStatus } from "../../common/types";

export const LOAD_PROFILE = "@profile/LOAD_PROFILE";
export const LOAD_PROFILE_SUCCESS = "@profile/LOAD_PROFILE_SUCCESS";
export const LOAD_PROFILE_ERROR = "@profile/LOAD_PROFILE_ERROR";

export type LOAD_PROFILE = typeof LOAD_PROFILE;
export type LOAD_PROFILE_SUCCESS = typeof LOAD_PROFILE_SUCCESS;
export type LOAD_PROFILE_ERROR = typeof LOAD_PROFILE_ERROR;

export const SELECT_PROFILE = "@profile/SELECT_PROFILE";

export type SELECT_PROFILE = typeof SELECT_PROFILE;

export interface SelectProfileAction {
    type: SELECT_PROFILE;
    profile: any;
}

export const selectProfile = (profile: any): SelectProfileAction => ({
    type: SELECT_PROFILE,
    profile
})

export interface LoadProfileAction {
    type: LOAD_PROFILE;
    pageStatus: PageStatus;
}

export interface LoadProfileSuccessAction {
    type: LOAD_PROFILE_SUCCESS;
    profile: any;
}

export interface LoadProfileErrorAction {
    type: LOAD_PROFILE_ERROR;
    error: any;
}

export const loadProfile = (pageStatus: PageStatus): LoadProfileAction => (
    {
        type: LOAD_PROFILE,
        pageStatus
    }
);

export const loadProfileSuccess = (profile: any): LoadProfileSuccessAction => (
    {
        type: LOAD_PROFILE_SUCCESS,
        profile
    }
);

export const loadProfileError = (error: any): LoadProfileErrorAction => (
    {
        type: LOAD_PROFILE_ERROR,
        error
    }
);

export const LOAD_SELECTED_PROFILE = "@profile/LOAD_SELECTED_PROFILE";
export const LOAD_SELECTED_PROFILE_SUCCESS = "@profile/LOAD_SELECTED_PROFILE_SUCCESS";
export const LOAD_SELECTED_PROFILE_ERROR = "@profile/LOAD_SELECTED_PROFILE_ERROR";

export type LOAD_SELECTED_PROFILE = typeof LOAD_SELECTED_PROFILE;
export type LOAD_SELECTED_PROFILE_SUCCESS = typeof LOAD_SELECTED_PROFILE_SUCCESS;
export type LOAD_SELECTED_PROFILE_ERROR = typeof LOAD_SELECTED_PROFILE_ERROR;

export interface LoadSelectedProfileAction {
    pageStatus: PageStatus;
    type: LOAD_SELECTED_PROFILE;
    selectedProfile: any;
}

export interface LoadSelectedProfileSuccessAction {
    type: LOAD_SELECTED_PROFILE_SUCCESS;
    profile: any;
}

export interface LoadSelectedProfileErrorAction {
    type: LOAD_SELECTED_PROFILE_ERROR;
    error: any;
}

export const loadSelectedProfile = (pageStatus: PageStatus, selectedProfile: any): LoadSelectedProfileAction => ({
    type: LOAD_SELECTED_PROFILE,
    pageStatus,
    selectedProfile
});

export const loadSelectedProfileSuccess = (profile: any): LoadSelectedProfileSuccessAction => ({
    type: LOAD_SELECTED_PROFILE_SUCCESS,
    profile
});

export const loadSelectedProfileError = (error: any): LoadSelectedProfileErrorAction => ({
    type: LOAD_SELECTED_PROFILE_ERROR,
    error
});


export type ProfileActions = LoadProfileAction | LoadProfileErrorAction | LoadProfileSuccessAction | LoadSelectedProfileAction | LoadSelectedProfileErrorAction | LoadSelectedProfileSuccessAction | SelectProfileAction;