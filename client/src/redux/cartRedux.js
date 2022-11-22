import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.quantity-=1;
      state.isFetching = false;
      // state.products.slice(
      //   state.products.findIndex((item) => item._id === action.payload),
      //   1
      // );
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
      console.log(action.payload)

    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addProduct,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess } = cartSlice.actions;
export default cartSlice.reducer;
