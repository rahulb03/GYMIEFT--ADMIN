import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config';
// import toastComponent from '../../Components/toaster/Toaster';

// coupon create section ------------
export const createCoupon = createAsyncThunk('coupon/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.coupon, obj);
        // toastComponent({msg:`Coupon ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// coupon listing/get section ------------
export const getCoupon = createAsyncThunk('coupon/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.coupon, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single coupon get section ------------
export const getSingleCoupon = createAsyncThunk('coupon/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.coupon}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// coupon update section ------------
export const updateCoupon = createAsyncThunk('coupon/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.coupon}/${obj?.id}`, newObj);
        // toastComponent({msg:`Coupon ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// coupon status section ------------
export const changeCouponStatus = createAsyncThunk('coupon/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.coupon}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Coupon ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// coupon delete section ------------
export const deleteCoupon = createAsyncThunk('coupon/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.coupon}/${obj?.id}`);
        // toastComponent({msg:`Coupon ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
