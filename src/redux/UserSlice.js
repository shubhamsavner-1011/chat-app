import { createSlice } from "@reduxjs/toolkit";

const initialData = {onlineUser: [], roomId: '', count : {}};

 const UserSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    onlineUsers: (state, action)=> {
      state.onlineUser = action.payload
      // console.log(state.onlineUser, '<<??????', action.payload)
    },
    joinRoom : (state, action)=> {
      state.room = action.payload
    },
    messageCount: (state, action) => {
      state.count = action.payload
    }
  },
});

export const { onlineUsers, joinRoom, messageCount } = UserSlice.actions;

export default UserSlice.reducer;
