import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material";
const listData = [
  { text: "Open WhatsApp On Your Phone" },
  { text: "Tap On Link a Device" },
  { text: "Point Your Phone to This Screen to Capture The Code" },
];
const ListItmText = styled(ListItemText)`
  color: #3b4a54;
  font-size: 30px;
`;
export const OrderList = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {listData.map((item, index) => {
            return (
              <ListItem key={index}>
                <span style={{ marginRight: "12px", color: "#3b4a54" }}>
                  {index+1} .
                </span>
                <ListItmText>{item.text}</ListItmText>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};
