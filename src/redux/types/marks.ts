import { PageStatus } from "../../common/types";

export interface MarksState {
    pageStatus: PageStatus;
    marks: any;
    error: any;
    lastMarks: any;
}