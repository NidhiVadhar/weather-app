import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY ='7b21f146e1b899df0a054a9b5189bb16';

export const fetchWeatherByCityName = createAsyncThunk(
    'weather/fetchWeatherByCityName',
    async (cityName, thunkAPI) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: cityName,
              units: 'metric',
              appid: API_KEY,
            },
          }
        );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

  export const fetchForecast = createAsyncThunk(
    'weather/fetchForecast',
    async (cityName, thunkAPI) => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              q: cityName,
              units: 'metric',
              appid: API_KEY,
            },
          }
        );
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCityName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByCityName.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherByCityName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  
      // ✅ Add forecast async thunk cases
      .addCase(fetchForecast.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.loading = false;
        state.forecast = action.payload;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }});  

export default weatherSlice.reducer;
