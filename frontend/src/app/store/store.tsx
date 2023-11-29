"use client"
import { configureStore } from "@reduxjs/toolkit";
import userPagereducer from './slice/user_slice';


export const Store=configureStore({
      reducer:{
        userPage:userPagereducer
      }
})