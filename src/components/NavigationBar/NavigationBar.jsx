import React from 'react'
import HomeButton from './Buttons/HomeButton'
import CartButton from './Buttons/CartButton'
import Container from '@mui/material/Container';
import OrderInfoForm from './OrderInfo/OrderInfoForm'


export default function NavigationBar() {
  return (
    <div>
      <Container>
        <div className='navigation-bar'>
          <div className="navigation-bar__button-block">
            <HomeButton />
            <CartButton />
          </div>
          <OrderInfoForm className="navigation-bar__order-info-form"/>
        </div>
      </Container>
    </div>
  )
}
