import { createSlice } from '@reduxjs/toolkit';
import { createProduct, getProduct, getSingleProduct, updateProduct, changeProductStatus, deleteProduct, getProductDropDown } from './productThunks';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            
            // create Product section ------------
            .addCase(createProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Product section ------------
            .addCase(getProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Product section ------------
            // .addCase(getSingleProduct.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(getSingleProduct.fulfilled, (state, action) => {
            //     const data = action.payload?.data;
            //     state.status = 'succeeded';
            // })
            // .addCase(getSingleProduct.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.error.message;
            // })
            // ------------

            // update Product section ------------
            // .addCase(updateProduct.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(updateProduct.fulfilled, (state, action) => {
            //     const data = action.payload?.data;
            //     state.status = 'succeeded';
            // })
            // .addCase(updateProduct.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.error.message;
            // })
            // ------------

            // change Status Product section ------------
            .addCase(changeProductStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeProductStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeProductStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Product section ------------
            // .addCase(deleteProduct.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(deleteProduct.fulfilled, (state, action) => {
            //     const data = action.payload?.data;
            //     state.status = 'succeeded';
            // })
            // .addCase(deleteProduct.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.error.message;
            // })
            // ------------
    },
});

export default productSlice.reducer;
