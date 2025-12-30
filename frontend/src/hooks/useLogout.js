import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/api.js";

export const useLogout=()=>{
    const queryClient=useQueryClient();
    const {
        mutate,
    } =useMutation({
    mutationFn:logout,
    onSuccess:()=>queryClient.invalidateQueries({queryKey:['authUser']})
  });
  return {logoutMutation:mutate}
}