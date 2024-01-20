import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendorData: [],
};

export const fetchVendorDetails = createAsyncThunk(
  "fetchVendorDetails",

  async () => {
    console.log();
    let data = await fetch(`/api/vendor`, {
      cache: "no-cache",
    });

    data = await data.json();

    return data;
  }
);

const Slice = createSlice({
  name: "VendorApi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVendorDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchVendorDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vendorData = action.payload;
      });
  },
});

export default Slice.reducer;
