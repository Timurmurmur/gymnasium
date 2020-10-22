import { BaseRestDataProvider } from "./BaseRestDataProvider";
import { axios } from "../core";
import moment from 'moment';

export class MarksDataProvider extends BaseRestDataProvider {
    loadLastMarks = (student_id: string) => {
        return axios.get(`${this.host}/last_grades/?student_id=${student_id}`, {
            withCredentials: true,
        }).then(res => res.data);
    }
    loadMarks = (student_id: string, class_id: string, from: Date, to: Date) => {
        return axios.get(`${this.host}/grades/?student_id=${student_id}&class_id=${class_id}&from=${moment(from).toJSON()}&to=${moment(to).toJSON()}`, {
            withCredentials: true,
        }).then(res => res.data);
    }
    loadTrends = (student_id: string) => {
        return axios.get(`${this.host}/schoolwork_trends/?student_id=${student_id}`, {
            withCredentials: true,
        }).then(res => res.data);
    }
}

// `${this.host}/grades/?student_id=${student_id}&class_id=${class_id}&from=${moment(from).toJSON()}&to=${moment(to).toJSON()}`