import React from 'react'
import { deleteItem } from '../../../app/slices/cartSlice'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Fab from '@mui/material/Fab';

export default function DeleteFromCartButton({id}) {

    const dispatch = useDispatch()

    function deleteButtonHandler(){
        dispatch(deleteItem(id))
    }

  return (
    <Fab onClick={deleteButtonHandler} size="small" aria-label="remove" color="error">
        <RemoveShoppingCartIcon/>
    </Fab>
  )
}
