import React from "react";
import { Box, Button, Dialog, Grid, styled, Typography } from "@mui/material";
import { OrderList } from "../List";
import { Tutorial } from "../../containers/Tutorial";
import { QrCode } from "../qrcode";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constant";
const DailogStyle = {
  maxHeight: "100%",
  height: "100%",
  width: "57%",
  maxWidth: "100%",
  marginTop: "10%",
  // overflow: "none",
};
const SubHeading = styled(Typography)`
  color: #41525d;
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 50px;
`;
export const DailogBox = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(URL.LOGIN_FORM);
  };
  const handleSignup = () => {
    navigate(URL.REGISTER_PAGE);
  };
  return (
    <Box>
      <Dialog
        PaperProps={{ sx: DailogStyle }}
        BackdropProps={{ invisible: true }}
        open={true}
      >
        <Grid container spacing={2} sx={{ padding: "60px" }}>
          <Grid item xs={6} md={8}>
            <Box>
              <SubHeading>Use WhatsApp on your computer</SubHeading>
              <OrderList />
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box>
              <QrCode />
            </Box>
            <Box style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                style={{ color: "black", borderColor: "black", width: "100%" }}
                onClick={handleLogin}
                variant="outlined"
              >
                LOGIN
              </Button>
            </Box>
            <Box>
              <Button
                variant="outlined"
                style={{
                  color: "black",
                  borderColor: "black",
                  width: "100%",
                  marginTop: "20px",
                }}
                onClick={handleSignup}
              >
                Signup
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Tutorial />
      </Dialog>
    </Box>
  );
};
