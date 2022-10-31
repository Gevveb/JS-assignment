import React from 'react'
import ProductCard from '../components/ProductCard'

const SaleCard = ({title, products}) => {
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-2 g-4 test">
            {
              products.map(product => <ProductCard key={product.id} item={product} />)
            }
        </div>
    </div>
  )
}

export default SaleCard