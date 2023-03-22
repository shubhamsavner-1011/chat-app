import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { userLogin } from "../../api/userRequest";
import {
  Button,
  TextField,
  Paper,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../../constant";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {onlineUsers} from "../../redux/UserSlice";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const Login = () => {
  const [data, setData] = useState();
  const [errorMessage, setError] = useState();
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const loginUser = await userLogin(values);

        if (loginUser) {
          console.log(loginUser);
          const newUser = {
            userId: loginUser?.users?._id,
            username: loginUser?.users?.username,
            socketID: socket.id,
          };
          socket.emit("new-user-add", newUser);
          socket.on("get-users", async (users) => {
            if (users) {
              dispatch(onlineUsers(users));
            }
          });
        }

        if (loginUser.success === true) {
          Cookies.set("id", loginUser?.users?._id);
          Cookies.set("token", loginUser.token);
          Cookies.set("username", loginUser?.users.username);
        }
        if (loginUser.token) {
          setData(loginUser);
          navigate(URL.HOME_PAGE);
        }
        if (loginUser.success === true) {
          toast.success("Login Successfully");
          setTimeout(() => navigate(URL.HOME_PAGE), 3000);
        } else {
          toast.error(loginUser.message);
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
          <h3>Login</h3>
          <form onSubmit={formik.handleSubmit} style={{ padding: "15px" }}>
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
              Login
            </Button>
          </form>
          <Box style={{ textAlign: "end", margin: "20px" }}>
            <Link to={URL.REGISTER_PAGE} style={{ color: "black" }}>
              <span style={{ color: "gray" }}>
                Don't have an account yet ?{" "}
              </span>{" "}
              SignUp
            </Link>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};
