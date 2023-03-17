import axios from 'axios';

export const getMessages = async (id) => {
    const {data} =  await axios.get(`http://localhost:4000/api/message/${id}`)
    return data;
 }

 export const createMessage = async (chat) => {
    const {data} =  await axios.post(`http://localhost:4000/api/message/addMessage`,chat )
    return data;
 }

