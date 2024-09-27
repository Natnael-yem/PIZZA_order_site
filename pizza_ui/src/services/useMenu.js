import { createMenu, getMenu } from "../api/apiMenu"
import { useMutation, useQuery} from '@tanstack/react-query';
export const useMenu = () => {
    const {isLoading, data : menu, error} = useQuery({
        queryKey:['Menu'],
        queryFn: getMenu
    });
    console.log(menu)
    return {menu, isLoading}
}

export function useMenuNew() {
    const {mutate, data, error} =  useMutation({
        mutationFn: (data) => createMenu(data),
        onSuccess: (data) => {
            console.log(data)
        }
    });
    return {mutate, data, error};
}

