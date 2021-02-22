import API_URL from './apiConfig';
// const API_URL=require('./apiConfig')
import axios from 'axios';


//get all maintenance company.
const getAllmintsCompany = () => {
    return axios.get(`${API_URL}/company`);
  };

const newMintsCompany=(info)=>{
  return axios.post(`${API_URL}/company`,info);
}

const deleteCompany=(info)=>{
  return axios.delete(`${API_URL}/company/${info}`);
}
const editCompany=(info,id)=>{
  return axios.put(`${API_URL}/company/${id}`,info)
}
export { getAllmintsCompany , newMintsCompany , deleteCompany , editCompany };
