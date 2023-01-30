import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pnrStatusService from "./pnrStatusService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  pnrStatusData: null,
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

export const getPNRStatus = createAsyncThunk(
  "get/pnrStatus",
  async (pnrNumber, thunkAPI) => {
    try {
      return await pnrStatusService.getPNRStatus(pnrNumber);
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

const pnrStatusSlice = createSlice({
  name: "pnrStatus",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPNRStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPNRStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log("action payload", action.payload);
        console.log({ state, action });
        state.pnrStatusData = action.payload;
      })
      .addCase(getPNRStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

const {
  actions: { reset },
  reducer: pnrStatusReducer,
} = pnrStatusSlice;

export { pnrStatusSlice, pnrStatusReducer, reset };
