import React from 'react'
import ProductCard from '../components/ProductCard'

const SaleCard = ({title, products}) => {
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-2 g-4 salecard">
            {
              products.map(product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
    </div>
  )
}

export default SaleCard