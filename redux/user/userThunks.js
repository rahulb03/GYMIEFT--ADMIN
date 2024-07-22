import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config';
// import toastComponent from '../../Components/toaster/Toaster';

// user listing/get section ------------
export const getUser = createAsyncThunk('user/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.user, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single user get section ------------
export const getSingleUser = createAsyncThunk('user/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.user}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// user status section ------------
export const changeUserStatus = createAsyncThunk('user/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.user}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`User ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// user delete section ------------
export const deleteUser = createAsyncThunk('user/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.user}/${obj?.id}`);
        // toastComponent({msg:`User ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
