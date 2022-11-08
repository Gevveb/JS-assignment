import React ,{useState, useContext} from 'react'
import { FeaturedProductsContext} from '../Contexts/Contexts'
import SaleCard from '../components/SaleCard'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import SaleSection from '../sections/SaleSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import SaleSectionRight from '../sections/SaleSectionRight'
import CustomerService from '../sections/CustomerService'




const Home = () => {
  window.top.document.title = 'Fixxo.'
  const products = useContext(FeaturedProductsContext)

  const[topProducts, setTopProducts] = useState([
    {articleNumber: 1, name: "BLACK SHOES", category: "Fashion", price: "120.00", rating: 5, imageName: "https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}, 
    {articleNumber: 2, name: "BEIGE BLAZER", category: "Fashion", price: "110.00", rating: 5, imageName: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {articleNumber: 3, name: "RED JEANS SET", category: "Fashion", price: "89.00", rating: 5, imageName: "https://images.pexels.com/photos/718977/pexels-photo-718977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {articleNumber: 4, name: "DENIM JACKET", category: "Fashion", price: "42.00", rating: 5, imageName: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

  return (
    <>
    <header className="gradient-gray">
      <MainMenuSection />
      <ShowcaseSection />
    </header>
    <ProductGridSection title="Featured Products" items={products} />
    <TopPicksSection />
    <div className="flash-sale-left container">
    <SaleSection />
    <SaleCard products={topProducts}/> 
    </div>
    <div className="flash-sale-right container">
    <SaleCard products={topProducts}/>
     < SaleSectionRight />
    </div>
    <CustomerService />
    </>
  )
}

export default Home 






  // const[products, setProducts] = useState([
  //   {id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5273517/pexels-photo-5273517.jpeg?auto=compress&cs=tinysrgb&w=1600"}, 
  //   {id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1600"},
  //   {id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1269807/pexels-photo-1269807.jpeg?auto=compress&cs=tinysrgb&w=1600"},
  //   {id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"},
  //   {id: 5, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"},
  //   {id: 6, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"},
  //   {id: 7, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"},
  //   {id: 8, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1600"}
  // ])