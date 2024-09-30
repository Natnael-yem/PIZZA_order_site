import { useMutation, useQuery} from '@tanstack/react-query';
import { createRestaurant, getRestaurant } from '../api/apiRestaurant';

export const useRestaurant = () => {
    const {isLoading, data : user, error} = useQuery({
        queryKey:['Restaurant'],
        queryFn: getRestaurant
    });
    console.log(user)
    return {user, isLoading}
}

export function useRestaurantNew() {
    const {mutate, data, error} =  useMutation({
        mutationFn: (data) => createRestaurant(data),
        onSuccess: (data) => {
            // console.log(data)
        }
    });
    return {mutate, data, error};
}

