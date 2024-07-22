import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// social create section ------------
export const createSocial = createAsyncThunk('social/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.social, obj);
        // toastComponent({msg:`Social ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// social listing/get section ------------
export const getSocial = createAsyncThunk('social/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.social, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single social get section ------------
export const getSingleSocial = createAsyncThunk('social/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.social}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// social update section ------------
export const updateSocial = createAsyncThunk('social/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.social}/${obj?.id}`, newObj);
        // toastComponent({msg:`Social ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// social status section ------------
export const changeSocialStatus = createAsyncThunk('social/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.social}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Social ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// social delete section ------------
export const deleteSocial = createAsyncThunk('social/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.social}/${obj?.id}`);
        // toastComponent({msg:`Social ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
