import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import { ImgPath } from "../../constant/Images";
import { MoreMenu } from "../Menu";
export const Header = ({loginUser}) => {
  const user = loginUser?.[0].username

  return (
    <>
      <Box>
        <Avatar alt="Remy Sharp" style={{cursor:'pointer'}}>{user?.substring(0, 1).toUpperCase()}</Avatar>
      </Box>
      <Box style={{display:'flex'}}>
      <Box>
        <img src={ImgPath.COMMUNITY} alt="community" style={{cursor:'pointer'}}/>
        <img src={ImgPath.STATUS} alt="status" style={{marginLeft:'10px', cursor:'pointer'}}/>
        <MessageIcon style={{marginBottom:'7px',marginLeft:'10px', cursor:'pointer'}}/>
      </Box>
      <Box>
      <MoreMenu/>
      </Box>
      </Box>
    </>
  );
};
