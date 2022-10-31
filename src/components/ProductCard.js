import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({item}) => {
    const addToWishList = (e) => {
        console.log("ok")
    }
    const addToCompare = (e) => {
        console.log("ok")
    }
    const addToCart = (e) => {
        console.log("ok")
    }


  return (
    <div className="col">
                    <div className="card">
                        <div className="card-img">
                            <img src={item.img} alt={item.productName} />
                            <div className="card-menu">
                                <button onClick={addToWishList} href="#"><i className="fa-regular fa-heart"></i></button>
                                <button onClick={addToCompare} href="#"><i className="fa-regular fa-code-compare"></i></button>
                                <button onClick={addToCart} href="#"><i className="fa-regular fa-bag-shopping"></i></button>
                            </div>
                            <NavLink to={`/products/${item.productName.toLowerCase().replace(/ /gi, "-",)}`} className="__btn-theme btn-card-theme" >
                                <span className="__btn-theme-left"></span>
                                <span className="__btn-theme-right"></span>
                                QUICK VIEW
                            </NavLink>
                        </div>
                        <div className="card-body">
                            <p className="card-category">{item.category}</p>
                            <h5 className="card-title">{item.productName}</h5>
                            <p className="card-rating">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                            </p>
                            <p className="card-price">{item.price} </p>
                        </div>
                    </div>
                </div>
  )
}

export default ProductCard