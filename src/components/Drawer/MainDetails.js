import { Box } from '@mui/material'
import React from 'react'
import { ImgPath } from "../../constant/Images";
import { styled } from "@mui/material/styles";


const SubTitle = styled("div")(() => ({
    fontSize: "14px",
    color: " #667781",
    fontWeight: "500",
  }));
  
  const Title = styled("div")(() => ({
    fontSize: "34px",
    color: " #41525d",
    fontWeight: "400",
  }));

export const MainDetails = () => {
  return (
    <div>
         <Box style={{ marginTop: "130px" }}>
          <img src={ImgPath.WHATSAPP_MAIN} alt="whtsapp" />
        </Box>
        <Box style={{marginBottom:'14px'}}>
          <Title>Whatsapp Web</Title>
        </Box>
        <SubTitle>
          Send and receive messages without keeping your phone online.
          <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </SubTitle>
    </div>
  )
}
