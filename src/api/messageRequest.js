import axios from 'axios';

export const getMessages = async (chatId) => {
   try{
      const {data} =  await axios.post(`http://localhost:4000/api/message/getmsg`,{chatId})
      return data;
   }
   catch(error){
      console.log(error, 'error>>>')
   }
 }

 export const createMessage = async (chat) => {
    const {data} =  await axios.post(`http://localhost:4000/api/message/createmsg`,chat )
    return data;
 }

