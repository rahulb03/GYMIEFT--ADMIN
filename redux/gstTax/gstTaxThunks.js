import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// gstTax create section ------------
export const createGstTax = createAsyncThunk('gstTax/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.gstTax, obj);
        // toastComponent({msg:`GstTax ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// gstTax listing/get section ------------
export const getGstTax = createAsyncThunk('gstTax/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.gstTax, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single gstTax get section ------------
export const getSingleGstTax = createAsyncThunk('gstTax/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.gstTax}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// gstTax update section ------------
export const updateGstTax = createAsyncThunk('gstTax/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.gstTax}/${obj?.id}`, newObj);
        // toastComponent({msg:`GstTax ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// gstTax status section ------------
export const changeGstTaxStatus = createAsyncThunk('gstTax/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.gstTax}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`GstTax ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// gstTax delete section ------------
export const deleteGstTax = createAsyncThunk('gstTax/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.gstTax}/${obj?.id}`);
        // toastComponent({msg:`GstTax ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
