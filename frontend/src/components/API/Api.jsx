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