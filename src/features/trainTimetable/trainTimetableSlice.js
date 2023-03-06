import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trainTimetableService from "./trainTimetableService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  trainTimetableData: null,
  //   arrivalData: {
  //     arrivalDate: "",
  //     arrivalTime: "",
  //   },
  //   boardingStation: "",
  //   charStatus: "",
  //   class: "",
  //   passenger: [],
  //   quota: "",
  //   reservationUpto: "",
  //   trainName: "",
  //   trainNumber: "",
};

export const getTrainTimetableData = createAsyncThunk(
  "get/trainTimetable",
  async (trainNo, thunkAPI) => {
    try {
      return await trainTimetableService.getTrainTimetableData(trainNo);
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

const trainTimetableSlice = createSlice({
  name: "trainTimetable",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTrainTimetableData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrainTimetableData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log("action payload", action.payload);
        console.log({ state, action });
        state.trainTimetableData = action.payload;
      })
      .addCase(getTrainTimetableData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

const {
  actions: { reset },
  reducer: trainTimetableReducer,
} = trainTimetableSlice;

export { trainTimetableSlice, trainTimetableReducer, reset };
