import React from "react";
import { Time, Badge } from "./style/Drawer";
import { Avatar, ListItemIcon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { getUser } from "../../api/userRequest";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { createChat } from "../../api/chatRequest";
import Cookies from "js-cookie";
const senderId = Cookies.get("id");

export const DrawerList = ({ result , setChat, setUser}) => {
  const handleOpen = async (receiverId) => {
    setChat(true);
    const roomId = await createChat(senderId, receiverId)
    console.log(roomId, '>>>>>roomId')
    const getUserData = async () => {
      try {
        const user = await getUser(receiverId);
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  };
  return (
    <div>
      <List>
        {result?.map((text, index) => (
          <>
            <ListItem
              key={index}
              disablePadding
              onClick={() => handleOpen(text._id)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    // src="/static/images/avatar/1.jpg"
                    style={{ cursor: "pointer" }}
                  >{text?.username.substring(0, 1).toUpperCase()}
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary={text.username} />
                <Box>
                  <Time>7:13 Pm</Time>
                  <Badge>1</Badge>
                </Box>
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
};
