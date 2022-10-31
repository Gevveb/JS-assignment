import React, { useState } from 'react'
import SaleCard from '../components/SaleCard'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import SaleSection from '../sections/SaleSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
const Home = () => {
  window.top.document.title = 'Fixxo.'

  const[products, setProducts] = useState([
    {id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5273517/pexels-photo-5273517.jpeg?auto=compress&cs=tinysrgb&w=1600"}, 
    {id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    {id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1269807/pexels-photo-1269807.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    {id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    {id: 5, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    {id: 6, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    {id: 7, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    {id: 8, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"}
  ])
  const[topProducts, setTopProducts] = useState([
    {id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5273517/pexels-photo-5273517.jpeg?auto=compress&cs=tinysrgb&w=1600"}, 
    {id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    {id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1269807/pexels-photo-1269807.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    {id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1269807/pexels-photo-1269807.jpeg?auto=compress&cs=tinysrgb&w=1600"}
  ])
  return (
    <>
    <header className="gradient-gray">
      <MainMenuSection />
      <ShowcaseSection />
    </header>
    <ProductGridSection title="Featured Products" products={products}/>
    <TopPicksSection />
    <div className="flash-sale-left container">
    <SaleSection />
    <SaleCard products={topProducts}/>
    </div>
    <ProductGridSection title="Top Products" products={topProducts}/>
    </>
  )
}

export default Home