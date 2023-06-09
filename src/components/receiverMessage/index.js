import {
  Box,
  Typography,
} from "@mui/material";
import { MessageCard } from "../MessageCard";

export const ReceiverMessage = ({ item }) => {
  console.log(item, 'item>>>>>receiver')
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
          {item?.imageUrl && <MessageCard src={item?.imageUrl} />}
          {item?.image && <MessageCard src={item?.image} />}
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
