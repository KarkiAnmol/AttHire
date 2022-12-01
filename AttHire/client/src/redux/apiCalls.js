import { 
  loginFailure, 
  loginStart,
  loginSuccess } from "./userRedux";
import { publicRequest,userRequest } from "../requestMethods";

import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  addProductStart,
  addProductFailure,
  addProductSuccess} from "./cartRedux"
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
    window.alert("product added")
  } catch (err) {
    dispatch(addProductFailure());
    window.alert("product not added")

  }
};
