import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function OrdersButton() {

    const navigate = useNavigate();

    function HandleOrdersButon(){
      navigate("/orders");
    }

  return (
    <Button onClick={HandleOrdersButon} variant="contained">track order</Button>
  )
}
