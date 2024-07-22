import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes, token } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// parent categoryget section ------------
export const getCategoryDropDown = createAsyncThunk('category/parent', async () => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.category}/parent`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// category create section ------------
export const createCategory = createAsyncThunk('category/create', async (obj) => {
    try {
        const headerContentType = obj?.thumbnail?.name?.length > 0 ? 'multipart/form-data' : 'application/json'
        
        const  { data, status } = await axios?.post(backendRoutes?.category, obj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        // toastComponent({msg:`Category ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// category listing/get section ------------
export const getCategory = createAsyncThunk('category/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.category, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single category get section ------------
export const getSingleCategory = createAsyncThunk('category/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.category}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// category update section ------------
export const updateCategory = createAsyncThunk('category/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        
        const headerContentType = obj?.thumbnail?.name?.length > 0 ? 'multipart/form-data' : 'application/json'
        
        const  { data, status } = await axios?.put(`${backendRoutes?.category}/${obj?.id}`, newObj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        // toastComponent({msg:`Category ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// category status section ------------
export const changeCategoryStatus = createAsyncThunk('category/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.category}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Category ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// category delete section ------------
export const deleteCategory = createAsyncThunk('category/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.category}/${obj?.id}`);
        // toastComponent({msg:`Category ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
