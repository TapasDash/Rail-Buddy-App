import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import { pnrStatusReducer } from "../features/pnrStatus/pnrStatusSlice";
import { trainTimetableReducer } from "../features/trainTimetable/trainTimetableSlice";
import { trainBetweenStationsReducer } from "../features/trainBetweenStations/trainBetweenStationsSlice";
import { trainInfoReducer } from "../features/trainInfo/trainInfoSlice";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  pnrStatus: pnrStatusReducer,
  trainTimetable: trainTimetableReducer,
  trainBetweenStations: trainBetweenStationsReducer,
  trainInfo: trainInfoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
