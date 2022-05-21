import React from 'react'
import AddToCartButton from './AddToCartButton'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({product}) {
  return (
      <Card className='products-list__card'>
        <CardMedia component="img" alt="product.name" height="256" image={`${process.env.REACT_APP_API_URL}/${product.img}`}/>
        <CardContent className='products-list__card__card-text'>
          <Typography className='products-list__card__card-text__title' gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography className='products-list__card__card-text__description' variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          
        </CardContent>
        <CardActions className='products-list__card__bottom' sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h5">
           ${product.price}
          </Typography>
         <AddToCartButton productId={product.id}/>
        </CardActions>
      </Card>
  )
}
