import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trainBetweenStationsService from "./trainBetweemStationsService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  trainBetweenStationsData: [],
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

export const getTrainBetweenStations = createAsyncThunk(
  "get/trainBetweenStations",
  async (stationObj, thunkAPI) => {
    const { fromStation, toStation } = stationObj;
    console.log("In getTrains", { fromStation, toStation });
    try {
      return await trainBetweenStationsService.getTrainBetweenStations(
        fromStation,
        toStation
      );
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

const trainBetweenStationsSlice = createSlice({
  name: "trainBetweenStations",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTrainBetweenStations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrainBetweenStations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log("action payload", action.payload);
        console.log({ state, action });
        state.trainBetweenStationsData = action.payload;
      })
      .addCase(getTrainBetweenStations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

const {
  actions: { reset },
  reducer: trainBetweenStationsReducer,
} = trainBetweenStationsSlice;

export { trainBetweenStationsSlice, trainBetweenStationsReducer, reset };
