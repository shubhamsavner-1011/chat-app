import React from "react";
import { Time, Badge } from "./style/Drawer";
import { Avatar, ListItemIcon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { getUser } from "../../api/userRequest";





export const DrawerList = ({ result, setChat,setUser, setReceiver}) => {

  const handleOpen = async (receiverId) => {
    setChat(true);
    setReceiver(receiverId)
    const getUserData = async () => {
      try {
        const User = await getUser(receiverId);
        setUser(User)
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
                  >
                    {text?.username.substring(0, 1).toUpperCase()}
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
