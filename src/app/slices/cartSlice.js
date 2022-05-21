import CartService from '../../services/cartService';

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getCartProductsData = createAsyncThunk('/cart/getCartProductsData',
  async (cartIds) => {
    try {
      
      const data = await CartService.getCartProductsData(cartIds)
    
      return data
      
    } catch (err) {
      console.log(err);
    }
  }
);

export const postOrder = createAsyncThunk('/cart/postOrder',
  async (clientEmail, {getState}) => {
    try {

      const state = getState();
      console.log(clientEmail, state.cart.cart, state.cart.totalPrice)
      
     await CartService.postOrder(clientEmail, state.cart.cart, state.cart.totalPrice)
    
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  cart: [],
  cartData: [],
  isLoaded: false,
  totalPrice: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cart = []
        state.cartData = []
        state.isLoaded = false
        state.totalPrice = 0
      },
      AddToCart: (state, action) => {
        const index = state.cart.findIndex(item=>{ return item.id === action.payload.id})

        console.log(index)

        if(index>=0 ){
          state.cart[index].quantity+=  action.payload.quantity
        } else{
          state.cart.push({id: action.payload.id, quantity: action.payload.quantity})
        }
      },
      RemoveFromCart: (state, action) => {
        const index = state.cart.findIndex(item=>{ return item.id === action.payload.id})

        console.log(index)

        if(index>=0 && state.cart[index].quantity >1){
          state.cart[index].quantity-=  action.payload.quantity
        }
      },
      deleteItem: (state, action) => {
        state.cart = state.cart.filter(item=>item.id !== action.payload)
      },
      setTotalPrice: (state, action) => {
        state.totalPrice = action.payload
      },
      setIsLoadedFalse: (state) => {
        state.isLoaded = false
      },
    },
    extraReducers: {
      [getCartProductsData.fulfilled]: (state, action) => {
        state.isLoaded = true;
        state.cartData = action.payload;
      },
      [getCartProductsData.pending]: (state, action) => {
        
        state.isLoaded = false;
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {clearCart, AddToCart, RemoveFromCart,deleteItem,setTotalPrice,setIsLoadedFalse} = cartSlice.actions
  
  export default cartSlice.reducer