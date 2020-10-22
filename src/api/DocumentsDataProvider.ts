import { BaseRestDataProvider } from "./BaseRestDataProvider";
import { axios } from '../core/index';
import Cookies from 'universal-cookie';

export class DocumentsDataProvider extends BaseRestDataProvider {
    loadDocuments = async (profile: any) => {
        let lastUploads = await axios.get(`${this.host}/uploads/?student_id=${profile.id}&&from=latest`,{
            withCredentials: true
        }).then(res => res.data);
        let ownDocuments = await axios.get(`${this.host}/uploads/?student_id=${profile.id}&from=parent`,{
            withCredentials: true
        }).then(res => res.data);
        return {
            lastUploads,
            ownDocuments
        };
    }
    uploadDocument = (e: any, student_id: string) => {
        let cookie = new Cookies();

        return e.map((el: any) => {
            let file = new FormData();
            file.append("file", el, el.name);
            file.append("student_id", student_id);
            file.append("csrfmiddlewaretoken", cookie.get("csrftoken"));
            return axios.post(`${this.host}/uploads/add/`, file ,{
                withCredentials: true,
                headers: {
                    'x-csrf-token': `${cookie.get("csrftoken")}`,
                }
            }).then(res => res.data);
        })
    }

    deleteDocument = (file_name: string) => {
        let cookie = new Cookies();
        let data = new FormData();
        console.log(data, cookie.get("csrftoken"))
        return axios.delete(`${this.host}/uploads/delete/?document=${file_name}`,{
            withCredentials: true,
            headers: {
                'X-CSRFToken': cookie.get("csrftoken")
            },
            
        }).then(res => res);
    }
}

//'x-csrf-token': cookie.get("csrftoken")
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

/* 
let gymnasium = await axios.get(`${this.host}/uploads/?student_id=${profile.id}&from=gymnasium`,{
    withCredentials: true
}).then(res => res.data); */