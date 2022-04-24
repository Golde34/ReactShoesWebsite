import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
    productListReducer,
    productDetailsReducer,
    pltShowReducer,
    listCategoriesReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    listBrandsReducer,
    categoryCreateReducer,
    brandCreateReducer,
    categoryDeleteReducer,
    brandDeleteReducer,
    brandUpdateReducer,
    categoryUpdateReducer,
    brandDetailsReducer,
    categoryDetailsReducer,
} from './reducers/productReducers';

import {
    productRecommendReducer,
    searchKeywordReducer,
    searchCategoryReducer,
} from './reducers/searchReducers';

import {
    userSigninReducer,
    userRegisterReducer,
    userUpdateProfileReducer,
    userDetailsReducer,
    userListReducer,
    userDeleteReducer,
} from './reducers/userReducers.js';

import {
    orderCreateReducer,
    orderMineListReducer,
    orderListReducer,
    orderDeleteReducer,
    orderUpdateReducer,
    orderDetailsReducer,
    pltShowOrderReducer,
} from './reducers/orderReducers';

import { cartReducer } from './reducers/cartReducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
        paymentMethod: 'Paypal',
    }
};

const reducer = combineReducers({
    productList: productListReducer,
    productsRecommend: productRecommendReducer,
    productDetails: productDetailsReducer,
    pltShow: pltShowReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userDetails: userDetailsReducer,
    keywordSearch: searchKeywordReducer,
    categorySearch: searchCategoryReducer,
    listCategory: listCategoriesReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    orderMineList: orderMineListReducer,
    orderDetails: orderDetailsReducer,
    pltShowOrder: pltShowOrderReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderUpdate: orderUpdateReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    listBrand: listBrandsReducer,
    categoryCreate: categoryCreateReducer,
    brandCreate: brandCreateReducer,
    categoryDelete: categoryDeleteReducer,
    brandDelete: brandDeleteReducer,
    brandUpdate: brandUpdateReducer,
    categoryUpdate: categoryUpdateReducer,
    brandDetails: brandDetailsReducer,
    categoryDetails: categoryDetailsReducer,
});


const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;