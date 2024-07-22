import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// tag create section ------------
export const createTag = createAsyncThunk('tag/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.tag, obj);
        // toastComponent({msg:`Tag ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// tag listing/get section ------------
export const getTag = createAsyncThunk('tag/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.tag, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single tag get section ------------
export const getSingleTag = createAsyncThunk('tag/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.tag}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// tag update section ------------
export const updateTag = createAsyncThunk('tag/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.tag}/${obj?.id}`, newObj);
        // toastComponent({msg:`Tag ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// tag status section ------------
export const changeTagStatus = createAsyncThunk('tag/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.tag}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Tag ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// tag delete section ------------
export const deleteTag = createAsyncThunk('tag/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.tag}/${obj?.id}`);
        // toastComponent({msg:`Tag ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
