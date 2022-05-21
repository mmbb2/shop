import React from 'react'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { AddToCart } from '../../../app/slices/cartSlice';

export default function AddToCartButton({productId}) {

    const dispatch = useDispatch()

    function AddToCartHandler(){
        dispatch(AddToCart({id: productId, quantity: 1}))
    }
  return (
    <Button variant="contained" onClick={AddToCartHandler}>Add to Cart</Button>
  )
}
