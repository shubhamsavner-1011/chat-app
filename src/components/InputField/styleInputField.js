import { Box, styled, TextField } from "@mui/material";

export const Input = styled(TextField)({
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiFormLabel-root": {
      color: "black",
    },
    "& input": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // backgroundColor: 'white',
        borderRadius: 10,
        color: "gray",
      },
      "&:hover fieldset": {
        border: "1px solid gray",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid gray",
      },
    },
    "& .Mui-error": {
      "&:hover fieldset": {
        border: "1.5px solid red",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid red",
      },
      "&label.Mui-focused": {
        color: "black",
      },
      "&.MuiFormLabel-root": {
        color: "black",
      },
      "& input": {
        color: "red",
      },
    },
  });
  export const MessageBox = styled(Box)`
    @media ${`(min-width: 425px)`} {
      width: 800px;
    }
    width: "auto";
  `;