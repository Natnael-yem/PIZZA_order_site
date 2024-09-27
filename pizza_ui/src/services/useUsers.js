import { useMutation, useQuery} from '@tanstack/react-query';
import { createUsers, getUsers } from "../api/apiusers";
export const useUsers = () => {
    const {isLoading, data : user, error} = useQuery({
        queryKey:['User'],
        queryFn: getUsers
    });
    console.log(user)
    return {user, isLoading}
}

export function useUserNew() {
    const {mutate, data, error} =  useMutation({
        mutationFn: (data) => createUsers(data),
        onSuccess: (data) => {
            console.log(data)
        }
    });
    return {mutate, data, error};
}

