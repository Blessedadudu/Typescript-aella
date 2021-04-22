import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_CART } from './constants'


  const initialStateCart = {
    items: [],
    amount: 0,
  }
  
  export const Cart = ( state = initialStateCart, action) => {
    if (action.type === ADD_TO_CART) {
      console.log('got hetererere')
      return { ...state, items: action.payload, amount: action.payload.length };
    }
    if (action.type === REMOVE_FROM_CART) {
      return { ...state, items: action.payload };
    }

    if (action.type === CLEAR_ALL_CART) {
      return { ...state, items: [] };
    }

    return state;
  }

  const initialLoginState = {
    login: false
  }

  export const LoginUsers = (state=initialLoginState, action={}) => {
   
    return state
  }



