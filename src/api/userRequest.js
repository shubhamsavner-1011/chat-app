import axios from 'axios';
const url = process.env.REACT_APP_URL;
export const users = async (id) => {
   const {data} =  await axios.get(`${url}/api/users?userId=${id}`)
   return data;
}

export const getUser = async (id) => {
   const {data} =  await axios.get(`${url}/api/users/${id}`)
   return data;
}

export const userLogin = async (user) => {
   console.log(url, 'login')   
   const userData = await axios.post(`${url}/api/users/login`,user)
    return userData.data

}

export const userRegister = (user) => {
   return  axios.post(`${url}/api/users/register`,user)
}

export const userLogout = async () => {
   const userData = await axios.get(`${url}/api/users/logout`)
    return userData
}