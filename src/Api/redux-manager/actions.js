import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_CART } from './constants'



export const addToCart = (data) => {
    return { type: ADD_TO_CART, payload: data };
};

export const removeFromCart = (data) => {
    return { type: REMOVE_FROM_CART, payload: data };
};

export const clearAllCart = () => {
    return { type: CLEAR_ALL_CART };
};

