import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ChatingFooter } from "./ChatingFooter";
import { ChatingHeader } from "./ChatingHeader";
import io from "socket.io-client";
const socket = io.connect("http://localhost:9000");

export const Chating = ({ user }) => {


  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" style={{ backgroundColor: "#f0f1f1" }}>
          <Toolbar
            style={{ marginLeft: "445px", justifyContent: "space-between" }}
          >
            <ChatingHeader user={user} />
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ width: "100%" }}>
          <ChatingFooter user={user} socket={socket} />
        </Box>
      </Box>
    </div>
  );
};
