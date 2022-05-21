import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { setSelectedId } from '../../app/slices/categoriesSlice';
import { Container } from '@mui/material';

export default function CategoriesList() {

  const dispatch = useDispatch()

  const categories = useSelector((state) => state.categories.categories)

  function handleCategoryButton(categoryId){
    dispatch(setSelectedId(categoryId))
  }

  return (
          <ButtonGroup className='categories-list' variant="contained" size='small' aria-label="outlined primary button group">

              <Button onClick={()=>{handleCategoryButton('')}}>All</Button>

              {categories.map((category=>{
                  return <Button onClick={()=>{handleCategoryButton(category.id)}}>{category.name}</Button>
              }))}
          </ButtonGroup>
  )
}
