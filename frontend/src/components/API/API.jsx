import axios from 'axios'
const URI = 'http://localhost:5000'


export const Operation = {
    register: async (newUserInfo) => {
      let message
    
      await axios
        .post(`${URI}/Clint`, newUserInfo)
        .then((response) => {
          console.log('Not error')
          message = response.data
          console.log(message)
        })
        .catch((err) => {
          console.log("err")
        });
      return message
    }}