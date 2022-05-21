import React from 'react'
import CartList from '../components/Cart/CartList'
import CheckoutForm from '../components/Cart/CheckoutForm'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import TotalPriceCounter from '../components/Cart/TotalPriceCounter'
import { useSelector } from 'react-redux'
import EmptyCart from '../components/Cart/EmptyCart'

export default function Cart() {

  const cart = useSelector((state) => state.cart.cart)

  return (
    <div>
        <NavigationBar/>
        {cart.length>0? <>
        <CartList/>
        <TotalPriceCounter/>
        <CheckoutForm/>
        </>: <EmptyCart/>}
        
    </div>
  )
}
