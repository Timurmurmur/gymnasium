import { BaseRestDataProvider } from "./BaseRestDataProvider";
import { axios } from "../core";


export class TasksDataProvider extends BaseRestDataProvider {
    loadTasks = async (student_id: string) => {
        let expired = await axios.get(`${this.host}/tasks/expired/?student_id=${student_id}`, {
            withCredentials: true
        }).then(res => res.data);

        let current = await axios.get(`${this.host}/tasks/current/?student_id=${student_id}`, {
            withCredentials: true
        }).then(res => res.data);

        return {
            current,
            expired
        }
    }
}