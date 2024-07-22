import { createSlice } from '@reduxjs/toolkit';
import { login, getProfile, updateProfile, changePassword, logout } from './authThunks';
import { storage } from '../../config/constant';
import isBrowser from '../../Utils/isBrowser';

// const authData = localStorage?.getItem(storage?.authLogin) ? JSON.parse(localStorage?.getItem(storage?.authLogin)) : null
const authData = isBrowser() ? (localStorage.getItem(storage?.authLogin) ? `Bearer ${JSON.parse(localStorage.getItem(storage?.authLogin)).token}` : null) : null;
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: authData?? null,
        token: authData?.token?? null,
        status: 'idle',
        error: null,
    },
    // reducers: {
    //     logout: (state) => {
    //         state.user = null;
    //         state.token = null;
    //         state.status = 'idle';
    //     },
    // },
    extraReducers: (builder) => {
        builder
            // login/signIn function ------------
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                localStorage?.removeItem(storage?.authLogin)
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage?.removeItem(storage?.authLogin)
                const data = action.payload?.data;
                console.log('response :: ', data)
                state.status = 'succeeded';
                state.token = data?.token;
                state.user = data;
                localStorage?.setItem(storage?.authLogin, JSON.stringify({...data}))
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                localStorage?.removeItem(storage?.authLogin)
            })
            // ------------

            // getProfile function ------------
            .addCase(getProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // updateProfile function ------------
            .addCase(updateProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                const data = action.payload?.data
                const authData = {...state.user, name:data?.name, email:data?.email}
                state.status = 'succeeded';
                state.user = authData;
                localStorage?.setItem(storage?.authLogin, JSON.stringify({ ...authData }));
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // changePassword function ------------
            .addCase(changePassword.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                const data = action.payload?.data
                state.status = 'succeeded';
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
            
            // logOut/signOut function ------------
            .addCase(logout.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = '';
                state.user = {};
                localStorage?.removeItem(storage?.authLogin)
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

// export const { logout } = authSlice.actions;

export default authSlice.reducer;
