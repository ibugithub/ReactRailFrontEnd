import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000';
const endpoint = '/api/random_greeting/';
const url = baseUrl + endpoint;

const headers = {
  'Content-Type': 'application/json',
};

const initialState = {
  greetingMsg: null,
};

const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.statusText);
    }
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greetingMsg = action.payload;
      });
  },
});

export const greetingReducer = greetingSlice.reducer;
export { fetchGreeting };
