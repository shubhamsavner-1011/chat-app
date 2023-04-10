import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Input, MessageBox } from "./styleInputField";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import Cookies from "js-cookie";
import {createMessage } from "../../api/messageRequest";
import {messageCount} from "../../redux/UserSlice";
import { useDispatch } from "react-redux";
const url = process.env.REACT_APP_URL;
const socket = io.connect(`${url}/`, {cors: {
  origin: "*",
  methods: ["GET", "POST"]
}});

export const InputField = ({ placeholder, inputStr, setInputStr, file, setFile , setMessage}) => {
  const [data, setData] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const dispatch = useDispatch();
  const { onlineUser } = useSelector((state) => state.user);
  const room = useSelector((state) => state.user);

  // console.log(onlineUser, "active-user");
  const userName = Cookies.get("username");
  const senderId = Cookies.get("id");
  let text1 = data;
  let text2 = inputStr;

  useEffect(() => {
    setNewMessage(text1.concat(text2));
  }, [text1, text2]);

  const handleChange = (val) => {
    setData(val);
    setInputStr("")
  };

  const onSubmit = async () => {
    const messageData = {
      chatId: room?.room.newChat,
      text: newMessage && newMessage.toString(),
      senderId: { _id: senderId, username: userName },
      receiverId : room?.room.receiverId,
      avatar:file,
      createdAt: new Date(),
    };
    const result = await createMessage(messageData);
    console.log(result, 'response>>>>>>>>>>')
    // await getMessages(room?.roomId)
    await socket.emit("send-message", result?.data);
    await socket.emit("send-count", result?.data);
    setData("");
    setInputStr("");
    setNewMessage("");
    setFile("")
  };
  const handleSubmit = async (e) => {
    onSubmit();
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <MessageBox>
        <Input
          placeholder={placeholder}
          fullWidth
          value={newMessage}
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
          InputProps={{
            endAdornment: (
              <SendIcon style={{ cursor: "pointer" }} onClick={handleSubmit} />
            ),
          }}
        />
      </MessageBox>
    </div>
  );
};
