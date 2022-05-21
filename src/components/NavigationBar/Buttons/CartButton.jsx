import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';

export default function CartButton() {

    const navigate = useNavigate();

    function HandleCartButon(){
        navigate("/cart");
    }

  return (
    <div className="navigation-bar__button-block__button">
      <Fab onClick={HandleCartButon} aria-label="cart" color='primary' className="navigation-bar__button-block__button">
          <ShoppingCartIcon/>
      </Fab>
    </div>
  )
}
