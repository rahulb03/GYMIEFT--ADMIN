import { createSlice } from '@reduxjs/toolkit';
import { createIdentity, getIdentity, getSingleIdentity, updateIdentity, changeIdentityStatus, deleteIdentity } from './identityThunks';

const identitySlice = createSlice({
    name: 'identity',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // create Identity section ------------
            .addCase(createIdentity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createIdentity.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createIdentity.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Identity section ------------
            .addCase(getIdentity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getIdentity.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getIdentity.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Identity section ------------
            .addCase(getSingleIdentity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleIdentity.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleIdentity.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Identity section ------------
            .addCase(updateIdentity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateIdentity.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateIdentity.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Identity section ------------
            .addCase(changeIdentityStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeIdentityStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeIdentityStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Identity section ------------
            .addCase(deleteIdentity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteIdentity.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteIdentity.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default identitySlice.reducer;
