"use client"
import { createSlice } from "@reduxjs/toolkit";
import { user_page } from "../types/user_type";

const initialState:user_page={
        getUsers:[],
        setUsers: null
}
const userPagereducer=createSlice({
      name:"userPage",
      initialState,
      reducers:{
            pageUsers:(state,action)=>{
               state.getUsers=action.payload;
               console.log(state.getUsers)
          }
      }
})

export const {pageUsers}=userPagereducer.actions;
export default userPagereducer.reducer;