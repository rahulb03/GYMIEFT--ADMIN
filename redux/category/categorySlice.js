import { createSlice } from '@reduxjs/toolkit';
import { createCategory, getCategory, getSingleCategory, updateCategory, changeCategoryStatus, deleteCategory, getCategoryDropDown } from './categoryThunks';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // get Parent Category section ------------
            .addCase(getCategoryDropDown.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategoryDropDown.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getCategoryDropDown.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // create Category section ------------
            .addCase(createCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Category section ------------
            .addCase(getCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Category section ------------
            .addCase(getSingleCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleCategory.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Category section ------------
            .addCase(updateCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Category section ------------
            .addCase(changeCategoryStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeCategoryStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeCategoryStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Category section ------------
            .addCase(deleteCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default categorySlice.reducer;
