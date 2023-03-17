import { Box, Typography } from "@mui/material";
import React from "react";

export const SenderMessage = ({ item ,inputStr}) => {
  console.log(item, 'sender', inputStr)
  return (
    <div>
      <Box
        style={{
          justifyContent: "end",
          display: "flex",
          margin: "15px 0",
        }}
      >
        <Box
          style={{
            width: "400px",
            backgroundColor: "rgb(194, 243, 194)",
            padding: "5px 8px",
            textAlign: "start",
            borderRadius: "10px",
          }}
        >
          <Typography variant="subtitle">{item.msg}</Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "right", color: "gray" }}
          >
            you
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
