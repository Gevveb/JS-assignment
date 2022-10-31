import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './views/Contacts';
import ProductsView from './views/ProductsView';
import Home from './views/Home';
import NotFound from './views/NotFound';
import ProductDetailsView from './views/ProductDetailsView';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/products" element={<ProductsView />} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path="/products/:productName" element={<ProductDetailsView />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <FooterSection/>
    </BrowserRouter>
  );
}

export default App;
