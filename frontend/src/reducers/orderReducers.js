import {
    ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS,
    ORDER_MINE_LIST_FAIL, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS,
    ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL,
    ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS, ORDER_DELETE_FAIL, ORDER_DELETE_RESET,
    ORDER_UPDATE_REQUEST, ORDER_UPDATE_SUCCESS, ORDER_UPDATE_FAIL, ORDER_UPDATE_RESET,
    ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS,
    PLT_ORDER_FAIL, PLT_ORDER_REQUEST, PLT_ORDER_SUCCESS,
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true };
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const orderMineListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_MINE_LIST_REQUEST:
            return { loading: true };
        case ORDER_MINE_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_MINE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true };
        case ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orders: action.payload.orders,
                pages: action.payload.totalPages,
            };
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const orderDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DELETE_REQUEST:
            return { loading: true };
        case ORDER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ORDER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_DELETE_RESET:
            return {};
        default:
            return state;
    }
};

export const orderUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_UPDATE_REQUEST:
            return { loading: true };
        case ORDER_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case ORDER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const orderDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const pltShowOrderReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case PLT_ORDER_REQUEST:
            return { loading: true };
        case PLT_ORDER_SUCCESS:
            return { loading: false, pltOrder: action.payload };
        case PLT_ORDER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};