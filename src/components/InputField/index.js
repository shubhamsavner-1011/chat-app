import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Input, MessageBox } from "./styleInputField";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import Cookies from "js-cookie";
import { createMessage } from "../../api/messageRequest";

const socket = io.connect("http://localhost:4000");

export const InputField = ({ placeholder, inputStr, setInputStr, file, setFile , setMessage}) => {
  const [data, setData] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const { onlineUser } = useSelector((state) => state.user);
  const room = useSelector((state) => state.user);
  console.log(onlineUser, "active-user");
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
      chatId: room?.roomId,
      text: newMessage && newMessage.toString(),
      senderId: { _id: senderId, username: userName },
      avatar:file,
      createdAt: new Date(),
    };
    const result = await createMessage(messageData);
    await socket.emit("send-message", result?.data);
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
