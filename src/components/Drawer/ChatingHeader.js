import { Avatar, Box, styled, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { SearchField } from "../serachField";
import { useState } from "react";

const Heading = styled(Typography)`
  color: #111b21;
  margin-left: 20px;
`;

export const ChatingHeader = ({ user , setSearchvalue}) => {
  const [search, setSearch] = useState(false)
  const handleSearch = () => {
    setSearch(!search)
  }
  console.log(search, 'search>>>>')
  return (
    <>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Avatar alt="Remy Sharp">{user?.username.substring(0, 1).toUpperCase()}</Avatar>
        </Box>
        <Box>
          <Heading>{user && user?.username}</Heading>
        </Box>
      </Box>
      <Box style={{display:'flex', alignItems:'center'}}>
       {search &&  <SearchField placeholder={'Search Messages..'} setSearchvalue={setSearchvalue} />}
        <SearchIcon style={{ color: "#54656f", cursor: "pointer" }} onClick={handleSearch}/>
        <MoreVertIcon
          style={{ color: "#54656f", cursor: "pointer", marginLeft: "40px" }}
        />
      </Box>
    </>
  );
};
