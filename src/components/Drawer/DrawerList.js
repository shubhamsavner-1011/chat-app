import React, { useEffect, useState } from "react";
import { Time, Badge } from "./style/Drawer";
import { Avatar, ListItemIcon, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { getUser } from "../../api/userRequest";
import { useSelector } from "react-redux";

export const DrawerList = ({ result, setChat, setUser, setReceiver }) => {
  const count = useSelector((state) => state.user);
  useEffect(() => console.log("cooooo", count), [count]);
  console.log("cooooolllll", count);
  // console.log(result.filter((item) => item?.senderId?._id === count?.count?.senderId?._id) , 'counting')
  console.log(
    result &&
      result?.map((item) =>
        console.log(item?._id, "senderId>>>>>", count?.count?.senderId?._id)
      )
  );
  console.log(result, "result >>>>>>.");
  const handleOpen = async (receiverId) => {
    setChat(true);
    setReceiver(receiverId);
    const getUserData = async () => {
      try {
        const User = await getUser(receiverId);
        setUser(User);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  };

  return (
    <div>
      {result?.length > 0 ? (
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
                    {/* {text._id === count?.count?.senderId?._id ? (
                    <Time>
                      {" "}
                      {new Date(text?.createdAt).toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </Time>
                  ) : (
                    ""
                  )} */}
                    {/* {text?._id === count?.count?.senderId?._id ? (
                    <Badge>{count?.count?.count}</Badge>
                  ) : text.count>0 ? (
                    <Badge>{text.count}</Badge>
                  ): ""} */}
                    {text?._id === count?.count?.senderId?._id ? (
                      <Badge>{`${text.count + count?.count?.count}`}</Badge>
                    ) : text.count > 0 ? (
                      <Badge>{`${text.count}`}</Badge>
                    ) : (
                      ""
                    )}
                  </Box>
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      ) : (
        <Typography variant="body2" style={{ textAlign: "center" }}>
          No user Found
        </Typography>
      )}
    </div>
  );
};
