import { createSlice } from '@reduxjs/toolkit';
import { createVendor, getVendor, getSingleVendor, updateVendor, changeVendorStatus, deleteVendor } from './vendorThunks';

const vendorSlice = createSlice({
    name: 'vendor',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder

            // create Vendor section ------------
            .addCase(createVendor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createVendor.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createVendor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Vendor section ------------
            .addCase(getVendor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getVendor.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getVendor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Vendor section ------------
            .addCase(getSingleVendor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleVendor.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleVendor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Vendor section ------------
            .addCase(updateVendor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateVendor.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateVendor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Vendor section ------------
            .addCase(changeVendorStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeVendorStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeVendorStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Vendor section ------------
            .addCase(deleteVendor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteVendor.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteVendor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default vendorSlice.reducer;
