import axios from 'axios';

export const getMessages = async (chatId) => {
   try{
      const {data} =  await axios.post(`http://localhost:4000/api/message/getmsg`,{chatId})
      console.log(chatId, 'vjsy', data)
      return data;
   }
   catch(error){
      console.log(error, 'error>>>')
   }
 }

 export const createMessage = async (chat) => {
   console.log(chat, 'chat>>>>>')
   const config = { headers: { "Content-Type": "multipart/form-data" } };
    const {data} =  await axios.post(`http://localhost:4000/api/message/createmsg`,chat ,config   )
    return data;
 }

