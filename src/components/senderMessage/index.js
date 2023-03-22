import { Box, Typography } from "@mui/material";
import React from "react";

export const SenderMessage = ({ item }) => {
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
            backgroundColor: "rgb(194, 243, 194)",
            padding: "5px 8px",
            textAlign: "start",
            borderRadius: "10px",
          }}
        >
          <Typography variant="subtitle">{item?.text}</Typography>
          <Typography
            style={{
              color: "8696a0",
              fontSize: "12px",
              textAlign: "end",
              margin: "5px 0 ",
            }}
          >
            {new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
