import axios from "axios";



// export const userChats = async (id) => {
//   const chat = await axios.get(`http://localhost:4000/api/chat/${id}`);
//   return chat;
// };

export const createChat = async (senderId, receiverId) => {
  console.log(senderId, receiverId, '>>>>>>>>>>>>roomm')
  const roomId = await axios.post(`http://localhost:4000/api/chat`, {
    senderId, receiverId
  });
  return roomId;
}