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
export { getAllmintsCompany , newMintsCompany };
