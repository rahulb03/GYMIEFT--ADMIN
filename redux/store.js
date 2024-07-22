import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import jobTypeReducer from "./jobType/jobTypeSlice";

export const store = configureStore({
    reducer:{
        Auth:authReducer,
        JobType:jobTypeReducer,
    }
})