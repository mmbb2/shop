import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import CartService from '../../services/cartService';
import OrderResultModal from './OrderResultModal';
import { clearCart } from '../../app/slices/cartSlice';
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/material';
import validator from 'validator';

export default function CheckoutForm() {

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart.cart)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  const [enail, setEmail] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    navigate('/')
    dispatch(clearCart())
    setOpen(false)
  };

    async function handleCheckoutButton(){
      if(validator.isEmail(enail)){
        const data = await CartService.postOrder(enail, cart, totalPrice)
        setOrderId(data.id)
        handleOpen()
        setError('')
      } else {
        setError('invalid email')
      }
       
    }

  return (
    <Container>
      <div className='checkout-form'>
          <TextField
                label="Email Address"
                autoComplete="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                size='small'
                error={Boolean(error)}
                helperText={error}
                sx={{mr:'20px'}}
              />
          <Button
                variant="contained"
                onClick={handleCheckoutButton}
                type="submit"
          >
              checkout
          </Button>
          <OrderResultModal id={orderId} open={open} handleClose={handleClose}/>
      </div>
    </Container>
  )
}
