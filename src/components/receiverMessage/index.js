import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";

export const ReceiverMessage = ({ item }) => {
  console.log(item, 'receiver')
  
  return (
    <div>
      <Box
        style={{
          justifyContent: "start",
          display: "flex",
          margin: "15px 0",
        }}
      >
        <Box
          style={{
            backgroundColor: "#f9f5eb",
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
                width="120"
                image={item?.image}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          )}
          <Typography variant="subtitle">{item?.text}</Typography>
          <Typography
            style={{ color: "8696a0", fontSize: "12px", textAlign: "end" }}
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
