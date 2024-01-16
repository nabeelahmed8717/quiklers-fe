import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ChatStateI {
  isMobileView: any;
}

const initialState: any = {
  isMobileView: false,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState: initialState,
  reducers: {
    setIsMobileView: (state: any, action: PayloadAction<any>) => {
      state.isMobileView = action?.payload;
    },
   
  },
});
export const {
  setIsMobileView,
} = globalSlice.actions;
export default globalSlice.reducer;
