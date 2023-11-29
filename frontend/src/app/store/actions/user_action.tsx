import http from "../../../http-common";
import { pageUsers } from "../slice/user_slice";

export const userPages=(details:any)=>async(dispatch:any)=>{
            console.log("Datas are there",details)
        try{
             const responce=await http.post('/logins',details);
             console.log("Form Data",responce.data)
             dispatch(pageUsers(responce.data))
        }
        catch(err){
            console.log(err)
         }   

}