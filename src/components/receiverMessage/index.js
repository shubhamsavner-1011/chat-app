import { Box, Typography } from '@mui/material'
import React from 'react'

export const ReceiverMessage = ({item, inputStr}) => {
  console.log(item, 'receive', inputStr)
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
            width: "400px",
            backgroundColor: "#f9f5eb",
            padding: "5px 8px",
            textAlign: "start",
            borderRadius: "10px",
          }}
        >
          <Typography variant="subtitle">{item.message}</Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "left", color: "gray" }}
          >
            {item.userName}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
