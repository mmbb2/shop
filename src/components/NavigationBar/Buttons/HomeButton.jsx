import React from 'react'
import Fab from '@mui/material/Fab';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export default function HomeButton() {

    const navigate = useNavigate();

    function HandleHomeButon(){
      navigate("/");
    }

  return (
    <div className="navigation-bar__button-block__button">
      <Fab onClick={HandleHomeButon} aria-label="cart" color='primary'>
          <HomeIcon/>
      </Fab>
    </div>
  )
}
