//import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
   return axios.post(URL_BACKEND, data);
}

const updateUserAPI = () => {
    
}

const fetchALlUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND) ;
}

export {
    createUserAPI,
    updateUserAPI,
    fetchALlUserAPI
}
