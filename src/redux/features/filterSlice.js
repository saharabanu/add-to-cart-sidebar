const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  search: "",
  Name: "",
};

const filterSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload;
    },

    clearAllFilter: (state) => {
      state.search = "";
      state.Name = "";
    },
  },
});

export default filterSlice.reducer;
export const {
  searched,

  clearAllFilter,
} = filterSlice.actions;
