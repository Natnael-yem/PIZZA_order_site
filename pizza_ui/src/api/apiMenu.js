import { api } from "./Axios";

export const getMenu = async () =>{
    try{
        const response = await api.get(`/menus`);
        console.log(response?.data)
        return response?.data
    }catch(error){
        console.log('error', error)

    }
}
export const createMenu = async (menuData) => {
    try{
        const response = await api.post('/menus', menuData);
        return response?.data
    }catch(error){
        console.log(error);
    }
    
}