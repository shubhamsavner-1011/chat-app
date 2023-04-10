import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ChatingFooter } from "./ChatingFooter";
import { ChatingHeader } from "./ChatingHeader";
import io from "socket.io-client";
import { findChat } from "../../api/chatRequest";
import { joinRoom, messageCount } from "../../redux/UserSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useState } from "react";
import { getMessages } from "../../api/messageRequest";

const url = process.env.REACT_APP_URL;
const socket = io.connect(`${url}/`,
{cors: {
  origin: "*",
  methods: ["GET", "POST"]
}});

export const Chating = ({ receiver, user }) => {
  const [message, setMessage] = useState([]);
  const [SearchValue, setSearchvalue] = useState();
  const senderId = Cookies.get("id");
  const dispatch = useDispatch();

  console.log(message, "mesas");
  React.useEffect(() => {
    const find = async () => {
      const chatId = await findChat(senderId, receiver);
      const newChat = chatId?.data?._id;
      const receiverId = receiver;
      dispatch(joinRoom({ newChat, receiverId }));
      if (newChat) {
        socket.emit("joinRoom", newChat);
      }
      const { data } = await getMessages(newChat);
      setMessage(data);
    };

    find();
  }, [receiver, senderId, dispatch]);

  React.useEffect(() => {
    socket.on("receive-message", (data) => {
      console.log("rece-msg>>>>>>>>>>>>>>>>", data)
      setMessage([...message, data]);
    });
    socket.on("receive-count", (data) => {
      console.log("response-count", data);
      dispatch(messageCount(data));
    });
  });
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" style={{ backgroundColor: "#f0f1f1" }}>
          <Toolbar
            style={{ marginLeft: "445px", justifyContent: "space-between" }}
          >
            <ChatingHeader user={user} setSearchvalue={setSearchvalue} />
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ width: "100%" }}>
          <ChatingFooter
            user={user}
            socket={socket}
            message={message}
            setMessage={setMessage}
            SearchValue={SearchValue}
          />
        </Box>
      </Box>
    </div>
  );
};
