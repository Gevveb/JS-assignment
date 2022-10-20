import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './views/Contacts';
import Home from './views/Home';
import NotFound from './views/NotFound';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <FooterSection/>
    </BrowserRouter>
  );
}

export default App;
