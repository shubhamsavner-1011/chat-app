import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Link } from "@mui/material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";


export const MessageCard = ({ src }) => {

  const download = (e) => {
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card sx={{ width: 200 , height:50, position:'relative'}} >
      <Box style={{textAlign:'end', position:'absolute', right:'0', margin:'10px'}}>
        <Link
          href={src}
          download
          onClick={(e) => download(e)}
          target="blank"
          color="text.secondary"
        >
          {" "}
          <DownloadForOfflineOutlinedIcon />
        </Link>
      </Box>
      <CardMedia component="img" height="194" image={src} alt="message doc" />
    </Card>
  );
};