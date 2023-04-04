import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const SenderMessage = ({ item }) => {
  console.log(item, 'sender')
  console.log(item.imageUrl, "imageUrl>>>",);
  console.log(item.image, "image>>>",);
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
            <Card sx={{ maxWidth: 145 , height: 50}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="60"
                width="120"
                image={item?.imageUrl}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          )}
      
          {item?.image && (
            <Card sx={{ maxWidth: 145 , height: 50}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="60"
                image={item?.image}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
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
