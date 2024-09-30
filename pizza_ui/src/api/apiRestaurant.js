import { api } from "./Axios";


export const getRestaurant = async () =>{
    try{
        const response = await api.get(`/restaurant`);
        console.log(response?.data)
        return response?.data
    }catch(error){
        console.log('error', error)

    }
}
export const createRestaurant = async (restaurantData) => {
    console.log(restaurantData)
    try{
        const response = await api.post('/restaurant', restaurantData);
        return response?.data
    }catch(error){
        console.log(error);
    }
    
}