import { createSlice } from '@reduxjs/toolkit';
import { getSeller, getSingleSeller, changeSellerStatus, deleteSeller } from './sellerThunks';

const sellerSlice = createSlice({
    name: 'seller',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder            

            // get Seller section ------------
            .addCase(getSeller.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSeller.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSeller.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Seller section ------------
            .addCase(getSingleSeller.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleSeller.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleSeller.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Seller section ------------
            .addCase(changeSellerStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeSellerStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeSellerStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Seller section ------------
            .addCase(deleteSeller.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteSeller.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteSeller.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default sellerSlice.reducer;
