import React from 'react'
import { Typography } from '@mui/material'

export default function OrderInfoModalItem({orderProduct}) {
  return (
    <div className='order-info-modal__order-item'>
        <img className='order-info-modal__order-item__image' src={`${process.env.REACT_APP_API_URL}/${orderProduct.product.img}`} alt={orderProduct.product.name} />
        <div className="order-info-modal__order-item__title">
          <Typography>{orderProduct.product.name}</Typography>
        </div>
        <div className="order-info-modal__order-item__price">
         <Typography>${orderProduct.paidPrice} * {orderProduct.quantity}</Typography>
        </div>
    </div>
  )
}
