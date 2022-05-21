
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import CategoryService from '../../services/categoryService';

export const getCategories = createAsyncThunk('/categories/getCategories',
  async () => {
    try {
      
       const categories = await CategoryService.getCategories()
    
       return categories
      
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  categories: [],
  selectedId: ''
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      clearCategories: (state) => {
        state.categories = []
      },
      setSelectedId: (state, action) => {
        state.selectedId = action.payload
      },
    },
    extraReducers: {
      [getCategories.fulfilled]: (state, action) => {
        
        state.categories = action.payload;
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {clearCategories, setSelectedId} = categoriesSlice.actions
  
  export default categoriesSlice.reducer