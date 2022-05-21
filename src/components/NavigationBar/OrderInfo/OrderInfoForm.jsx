import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OrderService from '../../../services/OrderService';
import OrderInfoModal from './OrderInfoModal';


export default function OrderInfoForm() {

    const [orderId, setOrderId] = useState(null)
    const [orderData, setOrderData] = useState(null)
    const [open, setOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function HandleOrderInfoButon(){
        if(orderId){
            const data = await OrderService.getOrder(orderId)  
            console.log(data)
            if(data !== null){
                setOrderData(data)
                setIsLoaded(true)
                handleOpen()
                setError('')
            } else{
                setError('invalid id')
            }
            
        }
        
    }

  return (
    <div className='navigation-bar__order-info-form'>
        <TextField className='navigation-bar__order-info-form__inpnt' onChange={(e)=>{setOrderId(e.target.value)}} label="order id" variant="outlined" size='small' sx={{mr:'20px'}}/>
        <Button onClick={HandleOrderInfoButon} variant="contained">track order</Button>
        {isLoaded ? <OrderInfoModal open={open} handleClose={handleClose} order={orderData}/> : null}
    </div>
  )
}
