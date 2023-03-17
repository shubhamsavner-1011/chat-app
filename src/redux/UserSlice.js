import { createSlice } from "@reduxjs/toolkit";

const initialData = {onlineUser: []};

 const UserSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    onlineUsers: (state, action)=> {
      state.onlineUser = action.payload
      // console.log(state.onlineUser, '<<??????', action.payload)
    }
  },
});

export const { onlineUsers } = UserSlice.actions;

export default UserSlice.reducer;
