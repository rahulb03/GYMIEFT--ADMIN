import { createSlice } from '@reduxjs/toolkit';
import { createBrand, getBrand, getSingleBrand, updateBrand, changeBrandStatus, deleteBrand, getBrandDropDown } from './brandThunks';

const brandSlice = createSlice({
    name: 'brand',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // create Brand section ------------
            .addCase(createBrand.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createBrand.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createBrand.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get BrandDropDown section ------------
            .addCase(getBrandDropDown.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBrandDropDown.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getBrandDropDown.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Brand section ------------
            .addCase(getBrand.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBrand.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getBrand.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Brand section ------------
            .addCase(getSingleBrand.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleBrand.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleBrand.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Brand section ------------
            .addCase(updateBrand.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateBrand.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateBrand.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Brand section ------------
            .addCase(changeBrandStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeBrandStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeBrandStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Brand section ------------
            .addCase(deleteBrand.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteBrand.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteBrand.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default brandSlice.reducer;
