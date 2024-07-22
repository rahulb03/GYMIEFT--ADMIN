import { createSlice } from '@reduxjs/toolkit';
import { createOrderStatus, getOrderStatus, getSingleOrderStatus, updateOrderStatus, changeOrderStatusStatus, deleteOrderStatus } from './orderStatusThunks';

const orderStatusSlice = createSlice({
    name: 'orderStatus',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // create OrderStatus section ------------
            .addCase(createOrderStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createOrderStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createOrderStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get OrderStatus section ------------
            .addCase(getOrderStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOrderStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getOrderStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected OrderStatus section ------------
            .addCase(getSingleOrderStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleOrderStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleOrderStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update OrderStatus section ------------
            .addCase(updateOrderStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateOrderStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status OrderStatus section ------------
            .addCase(changeOrderStatusStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeOrderStatusStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeOrderStatusStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete OrderStatus section ------------
            .addCase(deleteOrderStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteOrderStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteOrderStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default orderStatusSlice.reducer;
