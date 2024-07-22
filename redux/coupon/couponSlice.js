import { createSlice } from '@reduxjs/toolkit';
import { createCoupon, getCoupon, getSingleCoupon, updateCoupon, changeCouponStatus, deleteCoupon } from './couponThunks';

const couponSlice = createSlice({
    name: 'coupon',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // create Coupon section ------------
            .addCase(createCoupon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createCoupon.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createCoupon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get Coupon section ------------
            .addCase(getCoupon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCoupon.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getCoupon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected Coupon section ------------
            .addCase(getSingleCoupon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleCoupon.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleCoupon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update Coupon section ------------
            .addCase(updateCoupon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCoupon.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateCoupon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status Coupon section ------------
            .addCase(changeCouponStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeCouponStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeCouponStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete Coupon section ------------
            .addCase(deleteCoupon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteCoupon.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteCoupon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default couponSlice.reducer;
