import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'

const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
        setProduct (await result.json())
        
      }
      fetchData()
    },[])


  return (
    <>
    <MainMenuSection />
    <div className="product-offer container">
      <h3>Get 25% OFF at the Fixxo Selection - Shop Now!</h3>
    </div>
    <BreadcrumbSection currentPage="Products > Product" />
    <section className="product-offer-section">
      <div className="container mt-5">
        <div className="product-offer-image">
          <img id="image-1" src={product.imageName} />
          <img id="image-2" src={product.imageName} />
          <img id="image-3" src={product.imageName} />
          <img id="image-4" src={product.imageName} />
        </div>
        <div className="product-offer-info">
          <h1>{product.name}</h1>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProductDetailsView