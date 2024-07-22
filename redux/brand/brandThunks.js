import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes, token } from '../../Config/config_c';
// import toastComponent from '../../Components/toaster/Toaster';

// brand create section ------------
export const createBrand = createAsyncThunk('brand/create', async (obj) => {
    try {
        const headerContentType = obj?.thumbnail?.name?.length > 0 ? 'multipart/form-data' : 'application/json'
        
        const  { data, status } = await axios?.post(backendRoutes?.brand, obj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        // toastComponent({msg:`Brand ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// brand DropDown section ------------
export const getBrandDropDown = createAsyncThunk('brand/dropdown', async () => {
    try {
        const  { data, status } = await axios?.get(backendRoutes?.brand);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// brand listing/get section ------------
export const getBrand = createAsyncThunk('brand/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.put(backendRoutes?.brand, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// single brand get section ------------
export const getSingleBrand = createAsyncThunk('brand/single', async (obj) => {
    try {
        const  { data, status } = await axios?.get(`${backendRoutes?.brand}/${obj?.id}`);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// brand update section ------------
export const updateBrand = createAsyncThunk('brand/update', async (obj) => {
    try {
        const {id, ...newObj} = obj;
        
        const headerContentType = obj?.thumbnail?.name?.length > 0 ? 'multipart/form-data' : 'application/json'
        
        const  { data, status } = await axios?.put(`${backendRoutes?.brand}/${obj?.id}`, newObj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        // toastComponent({msg:`Brand ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        console.log('brand update :;' , error)
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// brand status section ------------
export const changeBrandStatus = createAsyncThunk('brand/status', async (obj) => {
    try {
        const  { data, status } = await axios?.put(`${backendRoutes?.brand}/status/${obj?.id}`, {
            status:obj?.status
        });
        // toastComponent({msg:`Brand ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// brand delete section ------------
export const deleteBrand = createAsyncThunk('brand/delete', async (obj) => {
    try {
        const  { data, status } = await axios?.delete(`${backendRoutes?.brand}/${obj?.id}`);
        // toastComponent({msg:`Brand ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------
