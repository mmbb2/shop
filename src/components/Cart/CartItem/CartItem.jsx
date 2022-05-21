import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AddToCart, RemoveFromCart } from '../../../app/slices/cartSlice';
import DeleteFromCartButton from './DeleteFromCartButton';
import { Typography } from '@mui/material';

export default function CartItem({item, itemData}) {

    const dispatch = useDispatch()

    function AddButtonHandler(){
        dispatch(AddToCart({id: item.id, quantity: 1}))
    }

    function RemoveButtonHandler(){
        dispatch(RemoveFromCart({id: item.id, quantity: 1}))
    }   

  return (
    <div className='cart-list__cart-item'>
        <img className='cart-list__cart-item__image' src={`${process.env.REACT_APP_API_URL}/${itemData.img}`} alt={itemData?.name} />
        <div className="cart-list__cart-item__title">
            <Typography variant='h6'>{itemData?.name}</Typography>
        </div>
        <div className="cart-list__cart-item__ptice">
            <Typography variant='h6'>${itemData?.price * item.quantity}</Typography>
        </div>
        <div className="cart-list__cart-item__buttons">
            <div className="cart-list__cart-item__buttons__button">
                <Fab className="cart-list__cart-item__buttons_button" color="primary" size="small" aria-label="add" onClick={AddButtonHandler}>
                    <AddIcon />
                </Fab>
            </div>
            <div className="cart-list__cart-item__buttons__count">
                <Typography>{item.quantity}</Typography>
            </div>
            <div className="cart-list__cart-item__buttons__button">
            <Fab className="cart-list__cart-item__buttons_button" color="primary" size="small" aria-label="remove" onClick={RemoveButtonHandler}>
                <RemoveIcon />
            </Fab>
            </div>
            <div className="cart-list__cart-item__buttons__button">
            <DeleteFromCartButton className="cart-list__cart-item__buttons_button" id={item.id}/>
            </div>
        </div>
    </div>
  )
}
