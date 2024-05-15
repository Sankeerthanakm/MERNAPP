import axios from 'axios'
const API_URL="http:/localhost:4000/api-v1/"

export const API=axios.create({
    baseURL:API_URL,
    responseType:'json',
})

export const apiRequest=async({url,data,method})=>{
    try {
        const result=await API(url,{
            method:method || "GET",
            data:data ,
            headers:{
                "Content-Type":"application/json",
                // Authorization:token?`Bearer ${token}`:"",
            },
          
         
        })
        return result?.data
    } catch (error) {
        const err=error.response.data
        console.log(err)
        return {status :err.success,messege :err.messege}
    }
}