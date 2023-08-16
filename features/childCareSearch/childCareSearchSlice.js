const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filterData: null,
};

const childCarerSearchSlice = createSlice({
  name: "childCarerSearch",
  initialState,
  reducers: {
    setChildCarerFilterData: (state, action) => {
      state.filterData = action.payload;
    },
  },
});

export default childCarerSearchSlice.reducer;

export const { setChildCarerFilterData } = childCarerSearchSlice.actions;
