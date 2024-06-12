// meetingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const scheduleMeeting = createAsyncThunk(
  'meetings/scheduleMeeting',
  async (meetingData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/meetings', meetingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const cancelMeeting = createAsyncThunk(
  'meetings/cancelMeeting',
  async (meetingId, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/meetings/${meetingId}/cancel`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  meetings: [],
  status: 'idle',
  error: null,
};

const meetingSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {
    // Add reducers for additional actions like updating a meeting, deleting a meeting, etc.
  },
  extraReducers: (builder) => {
    builder
      .addCase(scheduleMeeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(scheduleMeeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.meetings.push(action.payload);
      })
      .addCase(scheduleMeeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(cancelMeeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(cancelMeeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the state to mark the meeting as canceled, or remove it from the list
        // based on your application's requirements.
      })
      .addCase(cancelMeeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default meetingSlice.reducer;
export const { /* Export any additional actions if needed */ } = meetingSlice.actions;
