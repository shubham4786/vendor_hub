import { configureStore } from "@reduxjs/toolkit";

import vendorReducer from "./slice";

export const store = configureStore({
  reducer: {
    vendorData: vendorReducer,
  },
});
