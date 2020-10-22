import Cookies from 'universal-cookie';
 
const cookie = new Cookies();

export const authMiddleware = store => next => action => {

    let token = cookie.get("csrftoken");

    if (!token) {
        console.log(token);
        window.location = "/login";
    }

    return next(action);
}