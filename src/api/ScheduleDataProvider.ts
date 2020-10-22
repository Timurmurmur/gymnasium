import { BaseRestDataProvider } from "./BaseRestDataProvider";
import moment from 'moment';
import { axios } from "../core";

export class ShceduleDataProvider extends BaseRestDataProvider {
    loadSchedule = (student_id: string, date: Date) => {
        let from = moment(date.setHours(0,0,0,0)).day(1);
        let to = moment(date.setHours(23,59,0,0)).day(7);
        return axios.get(`${this.host}/schedule/?student_id=${student_id}&from=${from.toDate().toJSON()}&to=${to.toDate().toJSON()}`, {
            withCredentials: true,
        }).then(res => res.data);
    }
    loadShortSchedule = (student_id: string) => {
        return axios.get(`${this.host}/short_schedule/?student_id=${student_id}`, {
            withCredentials: true,
        }).then(res => res.data);
    }
    loadLongSchedule = (student_id: string) => {
        return axios.get(`${this.host}/long_schedule/?student_id=${student_id}`, {
            withCredentials: true,
        }).then(res => res.data);
    }
}
