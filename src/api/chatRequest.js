import axios from "axios";
const url = process.env.REACT_APP_URL;

export const createChat = async (senderId, receiverId) => {
  const roomId = await axios.post(`${url}/api/chat`, {
    senderId, receiverId
  });
  return roomId;
}

export const findChat = async (senderId, receiverId) => {
  const roomId = await axios.get(`${url}/api/chat/find/${senderId}/${receiverId}`);
  return roomId;
}