import axios from 'axios'
import {setAuth} from '../mainComponents/NavMenu'
const URL = 'http://localhost:5000'
let currentUser= ""
 const API = {
  register: async (newUserInfo) => {
    let message;
    console.log(newUserInfo);

    await axios
      .post(`${URL}/Clint`, newUserInfo)
      .then((response) => {
        console.log("Not error");
        message = response.data;
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
    return message;
  },
  login: async (credential) => {
    const request = axios
      .post(`${URL}/login`, {
        email: credential.email,
        password: credential.password,
        withCredentials: true,
      })
      .then((response) => {
        currentUser =  response.data;
        console.log("res is :",response.data)

        return response.data
      })
      .catch((err) => {
        console.log("Not found client",err)
      });
      console.log("requ",request)

    return request
  },
  
  logout: () => {
    axios
      .get(`/api/Clint/logout`)
      .then((response) => {
        console.log('RESPONSE: ', response);
        currentUser = null 
      })
      .catch((err) => console.log(err))
  },}

const getAllmintsCompany = () => {
  return axios.get(`${URL}/company`);
};

const newMintsCompany = (info) => {
  return axios.post(`${URL}/company`, info);
};

const deleteCompany = (info) => {
  return axios.delete(`${URL}/company/${info}`);

}
const editCompany=(info,id)=>{
  return axios.put(`${URL}/company/${id}`,info)
}

const addNewAppointment=(info)=>{
  return axios.post(`${URL}/appointments`,info)
}



const getAllTechMan = () => {
  return axios.get(`${URL}/TechMan`);
};

const newTechMan = (info) => {
  return axios.post(`${URL}/TechMan`, info);
};
const getClientInfo = (id) => {
  return axios.get(`${URL}/Clint/${id}`);
};

const deleteTechMan=(info)=>{
return axios.delete(`${URL}/TechMan/${info}`);
}
const editTechMan=(info,id)=>{
return axios.put(`${URL}/TechMan/${id}`,info)
}
const TrashAppointments =(id)=>{
  return axios.get(`${URL}/${id}/TrashAppointments`)

}

const updateClientInfo=(info, id)=>{
  return axios.put(`${URL}/profile/${id}`, info);
} 

const gettAllAppointment=(id)=>{
  return axios.get(`${URL}/${id}/NewAppointments`)
}

const booked=(C_id,A_id)=>{
  return axios.post(`${URL}/clint/${C_id}/${A_id}`)
}

const deleteAppointment=(id)=>{
  return axios.delete(`${URL}/appointments/${id}`);
}

export {API,  getAllmintsCompany , newMintsCompany , deleteCompany , editCompany , getAllTechMan ,newTechMan, deleteTechMan , editTechMan, addNewAppointment, TrashAppointments ,  getClientInfo,
  updateClientInfo , gettAllAppointment , booked , currentUser , deleteAppointment};

