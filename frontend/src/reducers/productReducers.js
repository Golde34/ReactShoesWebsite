const {
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    PLT_PRODUCT_REQUEST, PLT_PRODUCT_SUCCESS, PLT_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, 
    PRODUCT_CATEGORY_LIST_REQUEST, PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_CATEGORY_LIST_FAIL, 
    PRODUCT_BRAND_LIST_REQUEST, PRODUCT_BRAND_LIST_FAIL, PRODUCT_BRAND_LIST_SUCCESS, 
    PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_RESET, 
    PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_RESET, 
    PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_RESET, 
    CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL, CREATE_CATEGORY_RESET, 
    DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL, DELETE_CATEGORY_RESET, 
    CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS, CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_RESET, 
    CATEGORY_DETAILS_REQUEST, CATEGORY_DETAILS_SUCCESS, CATEGORY_DETAILS_FAIL, 
    CREATE_BRAND_REQUEST, CREATE_BRAND_SUCCESS, CREATE_BRAND_FAIL, CREATE_BRAND_RESET,
    DELETE_BRAND_REQUEST, DELETE_BRAND_SUCCESS, DELETE_BRAND_FAIL, DELETE_BRAND_RESET, 
    BRAND_UPDATE_REQUEST, BRAND_UPDATE_SUCCESS, BRAND_UPDATE_FAIL, BRAND_UPDATE_RESET, 
    BRAND_DETAILS_REQUEST, BRAND_DETAILS_SUCCESS, BRAND_DETAILS_FAIL,
    
  } = require('../constants/productConstants');

//list product
export const productListReducer =  (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS: 
            return {loading: false, 
            products: action.payload.products,
            pages: action.payload.totalPages};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

//product details
export const productDetailsReducer = (state = {loading: true}, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true};
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload};
    case PRODUCT_DETAILS_FAIL:
      return { laoding: false, error: action.payload};
    default: 
    return state;
  }
};

//list categories
export const listCategoriesReducer = (state ={ loading: true, categories: []}, action) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return { loading: true};
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload};
    case PRODUCT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload};
    default: 
      return state;
  }
};

//list brands
export const listBrandsReducer = (state ={ loading: true, brands: []}, action) => {
  switch (action.type) {
    case PRODUCT_BRAND_LIST_REQUEST:
      return { loading: true};
    case PRODUCT_BRAND_LIST_SUCCESS:
      return { loading: false, brands: action.payload};
    case PRODUCT_BRAND_LIST_FAIL:
      return { loading: false, error: action.payload};
    default: 
      return state;
  }
};

/*CRUD product */

export const productDeleteReducer = (state = {}, action) => {
  switch(action.payload) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true};
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true};
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload};
    case PRODUCT_DELETE_RESET:
      return {};
    default: 
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch(action.payload) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true};
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, product: action.payload, success: true};
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload};
    case PRODUCT_CREATE_RESET:
      return {};
    default: 
      return state;
  }
};

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

/* CRUD Category */

export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return { loading: true };
    case CREATE_CATEGORY_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case CREATE_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return { loading: true };
    case DELETE_CATEGORY_SUCCESS:
      return { loading: false, success: true };
    case DELETE_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

export const categoryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const categoryDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return { loading: true };
    case CATEGORY_DETAILS_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

/* CRUD Brand */

export const brandCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BRAND_REQUEST:
      return { loading: true };
    case CREATE_BRAND_SUCCESS:
      return { loading: false, success: true, brand: action.payload };
    case CREATE_BRAND_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_BRAND_RESET:
      return {};
    default:
      return state;
  }
};

export const brandDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BRAND_REQUEST:
      return { loading: true };
    case DELETE_BRAND_SUCCESS:
      return { loading: false, success: true };
    case DELETE_BRAND_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_BRAND_RESET:
      return {};
    default:
      return state;
  }
};

export const brandUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_UPDATE_REQUEST:
      return { loading: true };
    case BRAND_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const brandDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case BRAND_DETAILS_REQUEST:
      return { loading: true };
    case BRAND_DETAILS_SUCCESS:
      return { loading: false, brand: action.payload };
    case BRAND_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//plt
export const pltShowReducer = (
  state = { loading: true}, 
  action
) => {
  switch (action.type) {
    case PLT_PRODUCT_REQUEST: 
      return { loading: true};
    case PLT_PRODUCT_SUCCESS:
      return { loading: false, plt: action.payload};
    case PLT_PRODUCT_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
};