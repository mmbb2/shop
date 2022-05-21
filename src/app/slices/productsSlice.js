import ProductService from '../../services/productService';

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('/products/getProducts',
  async (categoryId) => {
    try {
      
      const products = await ProductService.getProducts(categoryId)
    
      return products
      
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  products: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      clearProducts: (state) => {
        state.products = []
      }
    },
    extraReducers: {
      [getProducts.fulfilled]: (state, action) => {
        
        state.products = action.payload;
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {clearProducts} = productsSlice.actions
  
  export default productsSlice.reducer