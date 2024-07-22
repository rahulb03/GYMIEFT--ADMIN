import { createSlice } from '@reduxjs/toolkit';
import { createTag, getTag, getSingleTag, updateTag, changeTagStatus, deleteTag } from './tagThunks';

const tagSlice = createSlice({
    name: 'tag',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // create Tag section ------------
            .addCase(createTag.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createTag.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createTag.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Tag section ------------
            .addCase(getTag.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTag.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getTag.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Tag section ------------
            .addCase(getSingleTag.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleTag.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleTag.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Tag section ------------
            .addCase(updateTag.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateTag.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateTag.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Tag section ------------
            .addCase(changeTagStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeTagStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeTagStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Tag section ------------
            .addCase(deleteTag.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTag.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteTag.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default tagSlice.reducer;
