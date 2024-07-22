import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendRoutes, token } from '../../Config/config';
// import toastComponent from '../../Components/toaster/Toaster';

// siteConfiguration listing/get section ------------
export const getSiteConfiguration = createAsyncThunk('siteConfiguration/listing', async (obj) => {
    try {
        const  { data, status } = await axios?.get(backendRoutes?.siteConfig, obj);
        return {status, ...data}
    } catch (error) {
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------

// siteConfiguration update section ------------
export const updateSiteConfiguration = createAsyncThunk('siteConfiguration/update', async (obj) => {
    try {

        const headerContentType = obj?.logo?.name?.length > 0 ? 'multipart/form-data' : (obj?.favicon?.name?.length > 0 ? 'multipart/form-data' : 'application/json')
        const  { data, status } = await axios?.post(backendRoutes?.siteConfig, obj, {
            headers: {
                'token': token,
                'Content-Type': headerContentType,
            }
        });
        
        // toastComponent({msg:`SiteConfiguration ${data?.message}`, class:'bg-success text-white'})
        return {status, ...data}
    } catch (error) {
        console.log('axios error :: ', error)
        return {status:error?.response?.status, ...error?.response?.data};
    }
});
// ------------