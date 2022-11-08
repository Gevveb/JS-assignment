import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../Contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductCard = ({item}) => {
 const { incrementQuantity } = useShoppingCart()


  return (
    <div className="col">
                    <div className="card">
                        <div className="card-img">
                            <img src={item.imageName} alt={item.name} />
                            <div className="card-menu">
                                <button href="#"><i className="fa-regular fa-heart"></i></button>
                                <button href="#"><i className="fa-regular fa-code-compare"></i></button>
                                <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item})} href="#"><i className="fa-regular fa-bag-shopping"></i></button>
                            </div>
                            <NavLink to={`/products/${item.articleNumber}`} className="__btn-theme btn-card-theme" >
                                <span className="__btn-theme-left"></span>
                                <span className="__btn-theme-right"></span>
                                QUICK VIEW
                            </NavLink>
                        </div>
                        <div className="card-body">
                            <p className="card-category">{item.category}</p>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-rating">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                            </p>
                            <p className="card-price">{currencyFormatter(item.price)} </p>
                        </div>
                    </div>
                </div>
  )
}

export default ProductCard