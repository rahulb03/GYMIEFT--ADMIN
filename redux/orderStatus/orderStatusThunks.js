import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// orderStatus create section ------------
export const createOrderStatus = createAsyncThunk('orderStatus/create', async (obj) => {
    try {
        const  { data, status, config } = await axios?.post(backendRoutes?.orderStatus, obj);
        // toastComponent({msg:`OrderStatus ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// orderStatus listing/get section ------------
export const getOrderStatus = createAsyncThunk('orderStatus/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.orderStatus, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single orderStatus get section ------------
export const getSingleOrderStatus = createAsyncThunk('orderStatus/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.orderStatus}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// orderStatus update section ------------
export const updateOrderStatus = createAsyncThunk('orderStatus/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        console.log('newObj :: ', newObj)
        const  { data, status } = await axios?.put(`${backendRoutes?.orderStatus}/${obj?.id}`, newObj);
        // toastComponent({msg:`OrderStatus ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// orderStatus status section ------------
export const changeOrderStatusStatus = createAsyncThunk('orderStatus/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.orderStatus}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`OrderStatus ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// orderStatus delete section ------------
export const deleteOrderStatus = createAsyncThunk('orderStatus/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.orderStatus}/${obj?.id}`);
        // toastComponent({msg:`OrderStatus ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
