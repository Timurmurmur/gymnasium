import { BaseRestDataProvider } from "./BaseRestDataProvider";
import { axios } from '../core/index';

export class ProfileDataProvider extends BaseRestDataProvider {
    loadProfile = () => {
        return axios.get(`${this.host}/students`, {
            withCredentials: true,
        }).then(res => res.data);
    }
    loadNearest = (student_id: string) => {
        return axios.get(`${this.host}/events/upcoming/?student_id=${student_id}`,{
            withCredentials: true
        }).then(res => res.data);
    }
    loadSelectedProfile = async (profile: any) => {
        let fullProfile = await axios.get(`${this.host}/students/${profile.id}`,{
            withCredentials: true
        }).then(res => res.data);

        return fullProfile;
    }

    loadUser = async () => {
        let user = await axios.get(`${this.host}/user_details`,{
            withCredentials: true
        }).then(res => res.data);

        return user;
    }

    
}
/*let lastUploads = await axios.get(`${this.host}/uploads/latest/?student_id=${profile.id}`,{
            withCredentials: true
        }).then(res => res.data); */
// fetch(`http://localhost/api/students`, {
//             cache: "default",
//             credentials: "include",
//             headers: {
//                 'Access-Control-Allow-Origin':'*',
                
//             },
//             mode: "no-cors",
//             method: "GET"
//         }).then(res => {
//             console.log(res);
//             return res
//         });