import axios from 'axios'
const URL = 'http://localhost:5000'


export const API = {
  register: async (newUserInfo) => {
    let message
    console.log(newUserInfo)

    await axios
      .post(`${URL}/Clint`, newUserInfo)
      .then((response) => {
        console.log('Not error')
        message = response.data
        console.log(message)
      })
      .catch((err) => {
        console.log(err)
      });
    return message
  },  
  login: async (credential) => {
    const request = axios
      .post(`${URL}/login`, {
        email: credential.email,
        password: credential.password,
        withCredentials: true,
      })
      .then((response) => {
       
      
      })
      .catch((err) => {
        console.log("Not found client",err)
      });

    return {
      type: 'USER_LOGIN',
      payload: request,
    };
  },
  logout : async () => {
    let profile
    await axios
      .get(`/api/auth/logout`)
      .then((response) => profile = response)
      .catch((err) => console.log(err))
    return profile
  }}

const getAllmintsCompany = () => {
    return axios.get(`${URL}/company`);
  };

const newMintsCompany=(info)=>{
  return axios.post(`${URL}/company`,info);
}

const deleteCompany=(info)=>{
  return axios.delete(`${URL}/company/${info}`);
}
const editCompany=(info,id)=>{
  return axios.put(`${URL}/company/${id}`,info)
}
export { getAllmintsCompany , newMintsCompany , deleteCompany , editCompany };