import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from "../../config/config";
// import toastComponent from '../../Components/toaster/Toaster';

// jobType dropdown section ------------
export const jobTypeDropDown = createAsyncThunk('jobType/dropdown', async () => {
    try {
        const  { data, status, config } = await axios?.get(`${backendRoutes?.jobType}/dropdown`);
        console.log('data :: ', data)
        // toastComponent({msg:`JobType ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// jobType create section ------------
export const createJobType = createAsyncThunk('jobType/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.jobType, obj);
        console.log('data :: ', data)
        // toastComponent({msg:`JobType ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// jobType listing/get section ------------
export const getJobType = createAsyncThunk('jobType/listing', async (obj) => {
    try {
        console.log('babab :: ', backendRoutes?.jobType)
        const  { data, status } = await axios?.put(backendRoutes?.jobType, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single jobType get section ------------
export const getSingleJobType = createAsyncThunk('jobType/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.jobType}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// jobType update section ------------
export const updateJobType = createAsyncThunk('jobType/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.jobType}/${obj?.id}`, newObj);
        // toastComponent({msg:`JobType ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// jobType status section ------------
export const changeJobTypeStatus = createAsyncThunk('jobType/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.jobType}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`JobType ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// jobType delete section ------------
export const deleteJobType = createAsyncThunk('jobType/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.jobType}/${obj?.id}`);
        // toastComponent({msg:`JobType ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
