import { createSlice } from "@reduxjs/toolkit";
import reducers from './authReducers';

const authSlice = createSlice({
 name: "auth",
 initialState: {
    user:{
    email: "",
    name:"",
    id:"",
    }
 },
 reducers: reducers,
});
export const {updateEmail, updateName, updatewholeUser} = authSlice.actions;
export default authSlice.reducer;