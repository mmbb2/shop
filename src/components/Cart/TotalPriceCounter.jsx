import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTotalPrice } from '../../app/slices/cartSlice'
import { Container, Typography } from '@mui/material'

export default function TotalPriceCounter() {

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart.cart)
  const cartData = useSelector((state) => state.cart.cartData)
  const isLoaded = useSelector((state) => state.cart.isLoaded)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  useEffect(()=>{
      if(isLoaded){
        let total = 0
        cart.forEach(item => {
            console.log(cartData.find(product=>product.id === item.id))
            total += item.quantity * cartData.find(product=>product.id === item.id).price 
        });
        dispatch(setTotalPrice(total))
      }
    
  }, [cart, isLoaded])
  return (
    <Container>
      <div className="cart-list__total-price-counter">
        <Typography>Total price: ${totalPrice}</Typography>
      </div>
    </Container>
  )
}
