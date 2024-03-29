import Axios from 'axios';
import { 
    CART_ADD_ITEM, CART_REMOVE_ITEM, 
    CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS 
} from '../constants/cartConstants';


export const addToCart = (productId, qty, idsize) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            id: data.idProduct,
            name: data.productName,
            image: data.productdetails[0].image,
            price: data.productPrice,
            countInStock: data.productsizes[idsize].quantityInStock,
            product: data.idProduct,    
            idsize: idsize+1,
            size: data.productsizes[idsize]["productSize"],
            qty,
        },
    });
    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch,  getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data});
}