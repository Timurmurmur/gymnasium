import { PageStatus } from "../../common/types";

export interface ProfileState {
    pageStatus: PageStatus;
    user: any;
    error: any;
    selectedProfile: any;
}