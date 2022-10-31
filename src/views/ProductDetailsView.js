import React from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'

const ProductDetailsView = () => {
    const params = useParams()


  return (
    <>
    <MainMenuSection />
    <div className="container mt-5">
    <h1>{params.productName}</h1>
    </div>
    </>
  )
}

export default ProductDetailsView