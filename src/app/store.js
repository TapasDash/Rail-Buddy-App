import { configureStore } from "@reduxjs/toolkit";
import { pnrStatusReducer } from "../features/pnrStatus/pnrStatusSlice";

const store = configureStore({
  reducer: {
    pnrStatus: pnrStatusReducer,
  },
});

export default store;
