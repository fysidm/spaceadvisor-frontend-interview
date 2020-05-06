import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
    display: false
  },
  reducers: {
    toggleDisplay: (state, action) => {
      state.display = !state.display;
    },
    plus: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload;
    },
    minus: (state, action) => {
      state.value -= action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { plus, minus, toggleDisplay, setValue } = calculatorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.calculator.value)`
export const selectCalculator = state => state.calculator;

export default calculatorSlice.reducer;
