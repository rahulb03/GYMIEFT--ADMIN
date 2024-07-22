import { createSlice } from '@reduxjs/toolkit';
import { createGlobal, getGlobal, getSingleGlobal, updateGlobal, changeGlobalStatus, deleteGlobal, getGlobalDropDown } from './globalThunks';

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // get Parent Global section ------------
            .addCase(getGlobalDropDown.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getGlobalDropDown.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getGlobalDropDown.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // create Global section ------------
            .addCase(createGlobal.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createGlobal.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createGlobal.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Global section ------------
            .addCase(getGlobal.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getGlobal.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getGlobal.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Global section ------------
            .addCase(getSingleGlobal.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleGlobal.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleGlobal.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Global section ------------
            .addCase(updateGlobal.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateGlobal.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateGlobal.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Global section ------------
            .addCase(changeGlobalStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeGlobalStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeGlobalStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Global section ------------
            .addCase(deleteGlobal.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteGlobal.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteGlobal.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default globalSlice.reducer;
