import React from 'react'
import ProductsList from '../components/Products/ProductsList';
import CategoriesList from '../components/Products/CategoriesList';
import NavigationBar from '../components/NavigationBar/NavigationBar'

export default function Home() {

  return (
    <div>
        <NavigationBar/>
        <CategoriesList/>
        <ProductsList/>
    </div>

  )
}
