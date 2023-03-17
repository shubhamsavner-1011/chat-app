import React from 'react'
import { AppBar,Box,styled, Typography } from '@mui/material'
import { Icons } from '../../constant/Icons'


const AppHeader = styled(AppBar)`
height:170px;
background-color: #00a884;
box-shadow: none;
`
export const Header = () => {
  return (
    <div>
        <AppHeader position="static">
        <Box style={{display:'flex',alignItems:'center',margin: '20px 0', justifyContent:'center'}}>
        <img src={Icons.WHATSAPP} width={40} height={40} alt="whtsapp"/>
        <Typography variant="body2" style={{marginLeft: '14px', fontSize:'14px', fontWeight:'500'}}>WHATSAPP WEB</Typography>
        </Box>

        </AppHeader>
    </div>
  )
}
