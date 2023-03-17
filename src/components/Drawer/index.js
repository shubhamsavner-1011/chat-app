/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Cookies from "js-cookie";
import Divider from "@mui/material/Divider";
import { Header } from "./Header";
import { MainDetails } from "./MainDetails";
import { Chating } from "./Chating";
import { users } from "../../api/userRequest";
import "./style/Drawer";
import { DrawerList } from "./DrawerList";
import { DrawerHeader, Main } from "./style/Drawer";
const drawerWidth = 440;

export const Dashboard = () => {
  const [chat, setChat] = useState(false);
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const id = Cookies.get("id");
  const result = data?.filter((item) => item._id !== id);
  const loginUser = data?.filter((item) => item._id === id);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const user = await users();
        setData(user);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUser();
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <DrawerHeader>
          <Header loginUser={loginUser}/>
        </DrawerHeader>
        <Divider />
        <DrawerList result={result} setChat={setChat} setUser={setUser} />
      </Drawer>
      <Main open={true}>
        {chat ? <Chating user={user} /> : <MainDetails />}
      </Main>
    </Box>
  );
};
