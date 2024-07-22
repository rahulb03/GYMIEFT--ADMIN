import { createSlice } from '@reduxjs/toolkit';
import { createVariant, getVariant, getSingleVariant, updateVariant, changeVariantStatus, deleteVariant, getVariantDropDown } from './variantThunks';

const variantSlice = createSlice({
    name: 'variant',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // get Parent Variant section ------------
            .addCase(getVariantDropDown.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getVariantDropDown.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getVariantDropDown.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // create Variant section ------------
            .addCase(createVariant.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createVariant.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createVariant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Variant section ------------
            .addCase(getVariant.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getVariant.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getVariant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Variant section ------------
            .addCase(getSingleVariant.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleVariant.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleVariant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Variant section ------------
            .addCase(updateVariant.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateVariant.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateVariant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Variant section ------------
            .addCase(changeVariantStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeVariantStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeVariantStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Variant section ------------
            .addCase(deleteVariant.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteVariant.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteVariant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default variantSlice.reducer;
