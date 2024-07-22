import { createSlice } from '@reduxjs/toolkit';
import { createSocial, getSocial, getSingleSocial, updateSocial, changeSocialStatus, deleteSocial } from './socialThunks';

const socialSlice = createSlice({
    name: 'social',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // create Social section ------------
            .addCase(createSocial.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createSocial.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createSocial.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Social section ------------
            .addCase(getSocial.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSocial.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSocial.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Social section ------------
            .addCase(getSingleSocial.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleSocial.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleSocial.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Social section ------------
            .addCase(updateSocial.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateSocial.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateSocial.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Social section ------------
            .addCase(changeSocialStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeSocialStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeSocialStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Social section ------------
            .addCase(deleteSocial.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteSocial.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteSocial.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default socialSlice.reducer;
