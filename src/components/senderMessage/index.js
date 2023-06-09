import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { MessageCard } from "../MessageCard";

export const SenderMessage = ({ item }) => {
  console.log(item, 'item>>>>>sender')
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
          {item?.imageUrl && (
            <MessageCard src={item?.imageUrl}/>
          )}
      
          {item?.image && (
           <MessageCard src={item?.image}/>
          )}
          <Typography variant="subtitle">{item?.text}</Typography>

          {/* {item?.imageId &&  <MessageCard text={item?.text} src={item?.imageId.image}/> } */}
          <Typography
            style={{
              color: "8696a0",
              fontSize: "12px",
              textAlign: "end",
              margin: "5px 0 ",
            }}
          >
            {new Date(item?.createdAt).toLocaleString("en-US", {
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
