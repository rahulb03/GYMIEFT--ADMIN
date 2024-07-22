import { createSlice } from '@reduxjs/toolkit';
import { createGstTax, getGstTax, getSingleGstTax, updateGstTax, changeGstTaxStatus, deleteGstTax } from './gstTaxThunks';

const gstTaxSlice = createSlice({
    name: 'gstTax',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // create GstTax section ------------
            .addCase(createGstTax.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createGstTax.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createGstTax.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get GstTax section ------------
            .addCase(getGstTax.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getGstTax.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getGstTax.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected GstTax section ------------
            .addCase(getSingleGstTax.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleGstTax.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleGstTax.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update GstTax section ------------
            .addCase(updateGstTax.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateGstTax.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateGstTax.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status GstTax section ------------
            .addCase(changeGstTaxStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeGstTaxStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeGstTaxStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete GstTax section ------------
            .addCase(deleteGstTax.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteGstTax.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteGstTax.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default gstTaxSlice.reducer;
