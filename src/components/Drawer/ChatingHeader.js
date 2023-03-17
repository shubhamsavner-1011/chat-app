import { Avatar, Box, styled, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

const Heading = styled(Typography)`
  color: #111b21;
  margin-left: 20px;
`;

export const ChatingHeader = ({ user }) => {
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
      <Box>
        <SearchIcon style={{ color: "#54656f", cursor: "pointer" }} />
        <MoreVertIcon
          style={{ color: "#54656f", cursor: "pointer", marginLeft: "40px" }}
        />
      </Box>
    </>
  );
};
