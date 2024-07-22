import { createSlice } from '@reduxjs/toolkit';
import { getUser, getSingleUser, changeUserStatus, deleteUser } from './userThunks';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder            

            // get User section ------------
            .addCase(getUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected User section ------------
            .addCase(getSingleUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleUser.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status User section ------------
            .addCase(changeUserStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeUserStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeUserStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete User section ------------
            .addCase(deleteUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default userSlice.reducer;
