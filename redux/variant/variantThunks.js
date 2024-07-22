import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config';
// import toastComponent from '../../Components/toaster/Toaster';

// parent variantget section ------------
export const getVariantDropDown = createAsyncThunk('variant/parent', async () => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.variant}/parent`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// variant create section ------------
export const createVariant = createAsyncThunk('variant/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.variant, obj);
        console.log('config :: ', config)
        // toastComponent({msg:`Variant ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// variant listing/get section ------------
export const getVariant = createAsyncThunk('variant/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.variant, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single variant get section ------------
export const getSingleVariant = createAsyncThunk('variant/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.variant}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// variant update section ------------
export const updateVariant = createAsyncThunk('variant/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.variant}/${obj?.id}`, newObj);
        // toastComponent({msg:`Variant ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// variant status section ------------
export const changeVariantStatus = createAsyncThunk('variant/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.variant}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Variant ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// variant delete section ------------
export const deleteVariant = createAsyncThunk('variant/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.variant}/${obj?.id}`);
        // toastComponent({msg:`Variant ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
