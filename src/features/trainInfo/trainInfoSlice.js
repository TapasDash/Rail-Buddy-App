import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trainInfoService from "./trainInfoService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  trainInfoData: null,
};

export const getTrainInfo = createAsyncThunk(
  "get/trainInfo",
  async (thunkAPI) => {
    try {
      return await trainInfoService.getTrainInfo(trainNo);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const trainInfoSlice = createSlice({
  name: "trainInfo",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTrainInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrainInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log("action payload", action.payload);
        console.log({ state, action });
        state.trainInfoData = action.payload;
      })
      .addCase(getTrainInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

const {
  actions: { reset },
  reducer: trainInfoReducer,
} = trainInfoSlice;

export { trainInfoSlice, trainInfoReducer, reset };
