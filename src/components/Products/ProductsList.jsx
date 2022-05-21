import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../app/slices/categoriesSlice'
import { getProducts } from '../../app/slices/productsSlice'
import ProductCard from './ProductCard/ProductCard'
import { Container } from '@mui/material'

export default function ProductsList() {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    const selectedCategoryId = useSelector((state) => state.categories.selectedId)

    useEffect(()=>{
        async function fetchProducts(){
            await dispatch(getProducts(selectedCategoryId)).unwrap();
            await dispatch(getCategories()).unwrap();
        }
        fetchProducts();
    }, [selectedCategoryId])


  return (
    <Container>
        <div className='products-list'>

            {products.map(product=>{
                return <ProductCard key={product.id} product={product}/>
            })}

        </div>
    </Container>
  )
}
