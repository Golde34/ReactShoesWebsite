import {
  PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_REQUEST, PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCT_BRAND_LIST_REQUEST, PRODUCT_BRAND_LIST_SUCCESS, PRODUCT_BRAND_LIST_FAIL,
  PLT_PRODUCT_REQUEST, PLT_PRODUCT_SUCCESS, PLT_PRODUCT_FAIL,
  PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL,
  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, 
  CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL, 
  DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL, 
  CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS, CATEGORY_UPDATE_FAIL, 
  CATEGORY_DETAILS_REQUEST, CATEGORY_DETAILS_SUCCESS, CATEGORY_DETAILS_FAIL, 
  DELETE_BRAND_REQUEST, DELETE_BRAND_SUCCESS, DELETE_BRAND_FAIL, 
  CREATE_BRAND_REQUEST, CREATE_BRAND_SUCCESS, CREATE_BRAND_FAIL, 
  BRAND_UPDATE_REQUEST, BRAND_UPDATE_SUCCESS, BRAND_UPDATE_FAIL, 
  BRAND_DETAILS_REQUEST, BRAND_DETAILS_SUCCESS, BRAND_DETAILS_FAIL
} from "../constants/productConstants";
import Axios from "axios";

/* Products */

export const listProducts = (pageNumber) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/products', {
      params: {
        page: pageNumber ? pageNumber : 0,
      }
    });
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS_REQUEST, payload: productId
  });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_DELETE_REQUEST, payload: productId
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/products/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload:data });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
}

export const createProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  const { userSignin: { userInfo }, } = getState();
  try {
    const { data } = await Axios.post(
      `/api/products`, product,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
  const { userSignin: { userInfo } } = getState();
  try {
    const { data } = await Axios.put(
      `/api/products/${product.id}`, product, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    }
    );
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: PRODUCT_UPDATE_FAIL, payload: message });
  }
};

/* Category */

export const listProductCategories = () => async (dispatch) => {
  dispatch({ type: PRODUCT_CATEGORY_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`/api/products/categories`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const createCategory = (category) => async (dispatch, getState) => {
  dispatch({ type: CREATE_CATEGORY_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/products/category',
      category,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: CREATE_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_CATEGORY_FAIL, payload: message });
  }
};

export const deleteCategory = (categoryId) => async (dispatch, getState) => {
  dispatch({ type: DELETE_CATEGORY_REQUEST, payload: categoryId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/products/category/${categoryId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_CATEGORY_FAIL, payload: message });
  }
};

export const updateCategory = (category) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_UPDATE_REQUEST, payload: category });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.put(`/api/products/category/${category.idCategory}`, category, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data  });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_UPDATE_FAIL, payload: message });
  }
};

export const detailsCategory = (categoryId) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_DETAILS_REQUEST, payload: categoryId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/products/category/${categoryId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/* Brands */

export const listProductBrands = () => async (dispatch) => {
  dispatch({ type: PRODUCT_BRAND_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`/api/products/brands`);
    dispatch({ type: PRODUCT_BRAND_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_BRAND_LIST_FAIL, payload: error.message });
  }
};

export const deleteBrand = (brandId) => async (dispatch, getState) => {
  dispatch({ type: DELETE_BRAND_REQUEST, payload: brandId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/products/brand/${brandId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: DELETE_BRAND_SUCCESS, payload: data  });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_BRAND_FAIL, payload: message });
  }
};

export const createBrand = (brand) => async (dispatch, getState) => {
  dispatch({ type: CREATE_BRAND_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/products/brand',
      brand,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: CREATE_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_BRAND_FAIL, payload: message });
  }
};

export const updateBrand = (brand) => async (dispatch, getState) => {
  dispatch({ type: BRAND_UPDATE_REQUEST, payload: brand });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.put(`/api/products/brand/${brand.idBrand}`, brand, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BRAND_UPDATE_SUCCESS, payload: data  });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BRAND_UPDATE_FAIL, payload: message });
  }
};

export const detailsBrand = (brandId) => async (dispatch, getState) => {
  dispatch({ type: BRAND_DETAILS_REQUEST, payload: brandId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/products/brand/${brandId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BRAND_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BRAND_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/* Plt */

export const showPlt = () => async (dispatch, getState) => {
  dispatch({
    type: PLT_PRODUCT_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/products/plt`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PLT_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PLT_PRODUCT_FAIL, payload: error.message });
  }
};