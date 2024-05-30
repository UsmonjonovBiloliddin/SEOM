import { createSlice } from "@reduxjs/toolkit";

export const BackSlice = createSlice({
  name: "BackraundSlice",
  initialState: {
    Signopen: false,
    Manuopen: false,
    color:"Normal",
    size:"Medium"
  },
  reducers: {
    SignBackraund: (state) => {
      state.Signopen = state.Signopen ? false : true;
    },
    NavManuBackround: (state) => {
      state.Manuopen = state.Manuopen ? false : true;
    },
    changeColor: (state , action) => {
      state.color = action.payload
     },
     changeSize: (state , action) => {
      state.size = action.payload
     },
  },
});

export const { SignBackraund, NavManuBackround , changeColor ,changeSize} = BackSlice.actions;

export default BackSlice.reducer;
