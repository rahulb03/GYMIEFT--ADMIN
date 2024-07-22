import { createSlice } from '@reduxjs/toolkit';
import { getSiteConfiguration, updateSiteConfiguration } from './siteConfigurationThunks';

const siteConfigurationSlice = createSlice({
    name: 'siteConfiguration',
    initialState: {
        siteConfig:{},
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder

            // get SiteConfiguration section ------------
            .addCase(getSiteConfiguration.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSiteConfiguration.fulfilled, (state, action) => {
                state.siteConfig = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSiteConfiguration.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update SiteConfiguration section ------------
            .addCase(updateSiteConfiguration.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateSiteConfiguration.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateSiteConfiguration.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default siteConfigurationSlice.reducer;
