import { Box } from '@mui/material';
import React from 'react'
import ReactPlayer from 'react-player'
import '../../App.css'
export const VedioPlayer = () => {
  return (
    <div>
    <Box style={{display:'flex', justifyContent:'center', margin:'30px 0'}}>
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={400} height={200}
    />
      </Box>
    </div>
  )
}