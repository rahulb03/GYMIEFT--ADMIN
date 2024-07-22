import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// parent globalget section ------------
export const getGlobalDropDown = createAsyncThunk('global/parent', async () => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.global}/parent`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// global create section ------------
export const createGlobal = createAsyncThunk('global/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.global, obj);
        console.log('config :: ', config)
        // toastComponent({msg:`Global ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        console.log('error :: ', error)
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// global listing/get section ------------
export const getGlobal = createAsyncThunk('global/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.global, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single global get section ------------
export const getSingleGlobal = createAsyncThunk('global/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.global}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// global update section ------------
export const updateGlobal = createAsyncThunk('global/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.global}/${obj?.id}`, newObj);
        // toastComponent({msg:`Global ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// global status section ------------
export const changeGlobalStatus = createAsyncThunk('global/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.global}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Global ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// global delete section ------------
export const deleteGlobal = createAsyncThunk('global/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.global}/${obj?.id}`);
        // toastComponent({msg:`Global ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
