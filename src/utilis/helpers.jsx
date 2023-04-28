import { toast } from "react-toastify";

export const errorFun=(message)=>{
    return  toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
}