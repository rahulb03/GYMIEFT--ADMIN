import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// identity create section ------------
export const createIdentity = createAsyncThunk('identity/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.identity, obj);
        // toastComponent({msg:`Identity ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// identity listing/get section ------------
export const getIdentity = createAsyncThunk('identity/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.identity, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single identity get section ------------
export const getSingleIdentity = createAsyncThunk('identity/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.identity}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// identity update section ------------
export const updateIdentity = createAsyncThunk('identity/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.identity}/${obj?.id}`, newObj);
        // toastComponent({msg:`Identity ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// identity status section ------------
export const changeIdentityStatus = createAsyncThunk('identity/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.identity}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Identity ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// identity delete section ------------
export const deleteIdentity = createAsyncThunk('identity/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.identity}/${obj?.id}`);
        // toastComponent({msg:`Identity ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
