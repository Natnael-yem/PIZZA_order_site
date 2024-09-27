import { api } from "./Axios";


export const getUsers = async () =>{
    try{
        const response = await api.get(`/users`);
        console.log(response?.data)
        return response?.data
    }catch(error){
        console.log('error', error)

    }
}
export const createUsers = async (userData) => {
    try{
        const response = await api.post('/users', userData);
        return response?.data
    }catch(error){
        console.log(error);
    }
    
}