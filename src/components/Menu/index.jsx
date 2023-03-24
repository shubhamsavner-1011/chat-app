import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { userLogout } from '../../api/userRequest';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constant';
import Cookies from 'js-cookie';

const options = [
  'Logout',
];

const ITEM_HEIGHT = 48;

export const MoreMenu = () => {
    const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const handleLogout = async () => {
  const logout = await userLogout()
  if(logout.data){
      navigate(URL.LOGIN_PAGE)
      Cookies.remove('token')
      Cookies.remove('id')
      Cookies.remove('username')
  }
}
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleLogout}>
          {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}