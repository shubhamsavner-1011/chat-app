import { createSlice } from "@reduxjs/toolkit";

const initialData = {onlineUser: [], roomId: ''};

 const UserSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    onlineUsers: (state, action)=> {
      state.onlineUser = action.payload
      // console.log(state.onlineUser, '<<??????', action.payload)
    },
    joinRoom : (state, action)=> {
      state.roomId = action.payload
    }
  },
});

export const { onlineUsers, joinRoom } = UserSlice.actions;

export default UserSlice.reducer;
