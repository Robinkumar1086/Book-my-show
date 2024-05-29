import axiosInstance from ".";


export const Register = async (values)=>{
  try {
     const response= await axiosInstance.post("/api/users/register" , values);
     return response.data;
  } catch (error) {
    return error;
  }
}


export const loginuser = async (values)=>{
 try {
     const response = await axiosInstance.post("/api/users/login" , values);
     return response.data;
 } catch (error) {
    return error;
 }
}

export const currentUser = async ()=>{
    try {
        const response = await axiosInstance.get("/api/users/get-current-user");
        return response.data;
    } catch (error) {
        return error;
    }

}
 

