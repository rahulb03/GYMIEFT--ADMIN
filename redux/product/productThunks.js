import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes, token } from '../../Config/config';
// import toastComponent from '../../Components/toaster/Toaster';


// product create section ------------
export const createProduct = createAsyncThunk('product/create', async (obj) => {
    try {
        const headerContentType = obj?.thumbnail?.name?.length > 0 ? 'multipart/form-data' : 'application/json'
        console.log('product form :: ', obj)
        const  { data, status, config } = await axios?.post(backendRoutes?.product, obj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        // toastComponent({msg:`Product ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// product listing/get section ------------
export const getProduct = createAsyncThunk('product/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.product, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single product get section ------------
export const getSingleProduct = createAsyncThunk('product/single', async (id = 0) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.product}/${id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// product update section ------------
export const updateProduct = createAsyncThunk('product/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        
        const headerContentType = obj?.thumbnail?.name?.length > 0 ? 'multipart/form-data' : 'application/json'
        
        const  { data, status } = await axios?.put(`${backendRoutes?.product}/${obj?.id}`, newObj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        // toastComponent({msg:`Product ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// product status section ------------
export const changeProductStatus = createAsyncThunk('product/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.product}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Product ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// product delete section ------------
export const deleteProduct = createAsyncThunk('product/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.product}/${obj?.id}`);
        // toastComponent({msg:`Product ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
