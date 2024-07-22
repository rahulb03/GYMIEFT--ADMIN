import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config';
// import toastComponent from '../../Components/toaster/Toaster';

// seller listing/get section ------------
export const getSeller = createAsyncThunk('seller/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.seller, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single seller get section ------------
export const getSingleSeller = createAsyncThunk('seller/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.seller}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// seller status section ------------
export const changeSellerStatus = createAsyncThunk('seller/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.seller}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Seller ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// seller delete section ------------
export const deleteSeller = createAsyncThunk('seller/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.seller}/${obj?.id}`);
        // toastComponent({msg:`Seller ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
