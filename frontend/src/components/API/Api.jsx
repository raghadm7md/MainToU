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
    console.log("credential",credential.username)
    console.log("credential",credential.password)
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

const addNewAppointment=(info)=>{
  return axios.post(`${URL}/appointments/`,info)
}


const getAllTechMan = () => {
  return axios.get(`${URL}/TechMan`);
};

const newTechMan=(info)=>{
return axios.post(`${URL}/TechMan`,info);
}

const deleteTechMan=(info)=>{
return axios.delete(`${URL}/TechMan/${info}`);
}
const editTechMan=(info,id)=>{
return axios.put(`${URL}/TechMan/${id}`,info)
}
const TrashAppointments =(id)=>{
  return axios.get(`${URL}/${id}/TrashAppointments`)
}
export { getAllmintsCompany , newMintsCompany , deleteCompany , editCompany , getAllTechMan ,newTechMan, deleteTechMan , editTechMan, addNewAppointment, TrashAppointments};


