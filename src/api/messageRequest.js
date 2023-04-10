import axios from "axios";
const url = process.env.REACT_APP_URL;
export const getMessages = async (chatId) => {
  try {
    const { data } = await axios.post(
      `${url}/api/message/getmsg`,
      { chatId }
    );
    return data;
  } catch (error) {
    console.log(error, "error>>>");
  }
};

export const createCount = async () => {
  const { data } = await axios.get(
    `${url}/api/message/unread-count`
  );
  return data;
};

export const createMessage = async (chat) => {

  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const { data } = await axios.post(
    `${url}/api/message/createmsg`,
    chat,
    config
  );
  return data;
};
