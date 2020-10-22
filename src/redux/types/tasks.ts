import { PageStatus } from "../../common/types";

export interface TasksState {
    pageStatus: PageStatus;
    expired: any;
    current: any;
    error: any;
}