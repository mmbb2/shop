import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartProductsData, setIsLoadedFalse } from '../../app/slices/cartSlice';
import CartItem from './CartItem/CartItem';
import { Container } from '@mui/material';

export default function CartList() {

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart.cart)
  const cartData = useSelector((state) => state.cart.cartData)
  const isLoaded = useSelector((state) => state.cart.isLoaded)

  useEffect(()=>{
    async function fetchProducts(){

        console.log('cart')
        const cartIds = cart.map(item=>item.id)

        await dispatch(getCartProductsData(cartIds)).unwrap();
    }
    fetchProducts();

    return ()=>{
      dispatch(setIsLoadedFalse())
    }
}, [])
    
  return (
    <Container>
    <div className='cart-list'>
      {isLoaded ?
      cart.map(item=>{
        const itemData = cartData.find(product=>product.id === item.id)

        return <CartItem key={item.id} item={item} itemData={itemData}/>
      }) :
      <p>загрузка</p>
      }
    </div>
    </Container>

  )
}
