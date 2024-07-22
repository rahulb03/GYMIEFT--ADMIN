import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes, token } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// vendor create section ------------
export const createVendor = createAsyncThunk('vendor/create', async (obj) => {
    try {
        const headerContentType = obj?.logo?.name?.length > 0 ? 'multipart/form-data' : 'application/json'
        
        const  { data, status } = await axios?.post(backendRoutes?.vendor, obj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        console.log('vendor formddata :: ', data)
        // toastComponent({msg:`Vendor ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// vendor listing/get section ------------
export const getVendor = createAsyncThunk('vendor/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.vendor, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single vendor get section ------------
export const getSingleVendor = createAsyncThunk('vendor/single', async (id = 0) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.vendor}/${id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// vendor update section ------------
export const updateVendor = createAsyncThunk('vendor/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        
        const headerContentType = obj?.thumbnail?.name?.length > 0 ? 'multipart/form-data' : 'application/json'
        
        const  { data, status } = await axios?.put(`${backendRoutes?.vendor}/${obj?.id}`, newObj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        // toastComponent({msg:`Vendor ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// vendor status section ------------
export const changeVendorStatus = createAsyncThunk('vendor/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.vendor}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Vendor ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// vendor delete section ------------
export const deleteVendor = createAsyncThunk('vendor/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.vendor}/${obj?.id}`);
        // toastComponent({msg:`Vendor ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
