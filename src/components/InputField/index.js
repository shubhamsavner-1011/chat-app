import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Input, MessageBox } from "./styleInputField";
import { useSelector } from "react-redux";

export const InputField = ({
  placeholder,
  user,
  socket,
  setMessage,
  message,
  inputStr,
  setInputStr,
}) => {
  const [data, setData] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const { onlineUser } = useSelector((state) => state.user);
  console.log(onlineUser, "active>>>>>>>>>>");
  let text1 = data;
  let text2 = inputStr;

  useEffect(() => {
    console.log(">>>>>>");
    setNewMessage(text1.concat(text2));
  }, [text1, text2]);

  const handleChange = (val) => {
    setData(val);
  };
  const handleSubmit = async () => {
    const { socketId, username } = onlineUser?.find((item) => {
      return item.userId === user?._id;
    });
    console.log(socketId);
    const messageData = {
      anotherSocketId: socketId,
      msg: newMessage,
      username: username,
    };
    messageData && setMessage([...message, messageData]);
    await socket.emit("send-message", messageData);
    setData("");
    setInputStr("");
    setNewMessage("");
  };

  return (
    <div>
      <MessageBox>
        <Input
          placeholder={placeholder}
          fullWidth
          value={newMessage}
          onChange={(e) => handleChange(e.target.value)}
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
