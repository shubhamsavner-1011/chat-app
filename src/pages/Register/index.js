import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { userRegister } from "../../api/userRequest";
import {
  Button,
  TextField,
  Paper,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constant";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "react-toastify/dist/ReactToastify.css";
import {toast } from "react-toastify";
const validationSchema = yup.object({
  username: yup.string("Enter your name").required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const Register = () => {
  const [toggle, setToggle] = useState(true);
  const [errorMessage, setError] = useState();
  
  useEffect(()=> {
    if(errorMessage){toast.error(errorMessage)}
  })
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const registerUser = await userRegister(values);
        if (registerUser) {
          toast.success("Signup Successfully");
          setTimeout(() => navigate(URL.LOGIN_PAGE), 2000);
        }
      } catch (e) {
        const Error = e?.response?.data?.message;
        if (Error) {
          setError(Error);
        }
      }
    },
  });

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 700,
          },
        }}
        className="formMui"
      >
        <Paper elevation={3}>
          <h3 className="ProductHead">Register</h3>
          <form onSubmit={formik.handleSubmit} style={{ padding: "15px" }}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              variant="standard"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              margin={"dense"}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="standard"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin={"dense"}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type={toggle ? "text" : "password"}
              variant="standard"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin={"dense"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setToggle(!toggle)}
                      // onMouseDown={handleMouseDownPassword}
                    >
                      {!toggle && <VisibilityIcon />}
                      {toggle && <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="outlined"
              fullWidth
              type="submit"
              sx={{
                margin: "35px 0",
                color: "black",
                border: "1px solid black",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              Register
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
};
