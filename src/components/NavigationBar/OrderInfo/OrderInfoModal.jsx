import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OrderInfoModalItem from './OrderInfoModalItem';

export default function OrderInfoModal({open, handleClose, order}) {
    const style = {
        bgcolor: 'background.paper',
      };


  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}  className='order-info-modal'>
    
        {order.orderProducts.map((orderProduct)=>{
        return <OrderInfoModalItem key={orderProduct.id} orderProduct={orderProduct}/>
        })
        }
        <div className="order-info-modal__total-price">
          <Typography>Total price: ${order.totalPrice}</Typography>
        </div>
    </Box>
    </Modal>

    
  )
}
