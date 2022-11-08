import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import {ProductContext} from '../Contexts/Contexts'


const ProductsView = () => {

  const Product = useContext(ProductContext)

  return (
    <div>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={Product}/>
    </div>
    
  )
}

export default ProductsView