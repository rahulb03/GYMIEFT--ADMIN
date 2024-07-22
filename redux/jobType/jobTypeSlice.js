import { createSlice } from '@reduxjs/toolkit';
import { createJobType, getJobType, getSingleJobType, updateJobType, changeJobTypeStatus, deleteJobType, jobTypeDropDown } from './jobTypeThunks';

const jobTypeSlice = createSlice({
    name: 'jobType',
    initialState: {
        data:null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // jobType DropDown section ------------
            .addCase(jobTypeDropDown.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(jobTypeDropDown.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(jobTypeDropDown.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // create JobType section ------------
            .addCase(createJobType.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createJobType.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(createJobType.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get JobType section ------------
            .addCase(getJobType.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getJobType.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getJobType.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // get single selected JobType section ------------
            .addCase(getSingleJobType.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleJobType.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(getSingleJobType.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // update JobType section ------------
            .addCase(updateJobType.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateJobType.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(updateJobType.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // change Status JobType section ------------
            .addCase(changeJobTypeStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeJobTypeStatus.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(changeJobTypeStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------

            // delete JobType section ------------
            .addCase(deleteJobType.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteJobType.fulfilled, (state, action) => {
                const data = action.payload?.data;
                state.status = 'succeeded';
            })
            .addCase(deleteJobType.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // ------------
    },
});

export default jobTypeSlice.reducer;
