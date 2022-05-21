import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function OrderResultModal({open, handleClose, id}) {

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
    <Box sx={style} className='order-result-modal'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          You have made a new order
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Order number is: {id}
          </Typography>
    </Box>
    </Modal>

    
  )
}
