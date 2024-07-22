import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from "../../Config/config_c";

// function for login ------------
export const login = createAsyncThunk('auth/login', async (obj) => {
    try {
        const  { data, status } = await axios?.post(backendRoutes?.signIn, obj);
        // toastComponent({msg:`Welcome ${data?.data?.name}`, class:'bg-success text-white'})
        console.log('login Time ::: ', data, status)
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// function for get profile detail ------------
export const getProfile = createAsyncThunk('auth/profile', async () => {
    try {
        const  { data, status } = await axios?.get(backendRoutes?.profile);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// function for update progile ------------
export const updateProfile = createAsyncThunk('auth/updateprofile', async (obj) => {
    try {
        const  { data, status } = await axios?.post(backendRoutes?.profile, obj);
        // toastComponent({msg:`Profile ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// function for change password ------------
export const changePassword = createAsyncThunk('auth/changepassword', async (obj) => {
    try {
        const  { data, status } = await axios?.post(backendRoutes?.changePassword, obj);
        // toastComponent({msg:`Password ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// function for logout ------------
export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        const  { data, status } = await axios?.get(backendRoutes?.signOut);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------