import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title, products}) => {

 
  return (
    <section className="__featured-products">
        <div className="container">
            <div className="__featured-products-title">
                <h2>{title}</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {
                  products.map(product => <ProductCard key={product.id} item={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection