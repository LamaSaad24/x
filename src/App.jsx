
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Products from './assets/components/products/Products'
import Home from './assets/components/home/Home'
import Restaurant from './assets/components/restaurant/Restaurant'
import PageNotFound from './assets/components/page not found/PageNotFound'
import Pizza from './assets/components/pizza/Pizza.jsx'
import Onion from './assets/components/onion/Onion.jsx'
import Salad from './assets/components/salad/Salad.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  
  return (
    <>
    <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products/>} />
      <Route path='/restaurant' element={<Restaurant/>} />
      <Route path='*' element={<PageNotFound/>} />
      <Route path='/restaurant/pizza' element={<Pizza/>} />
      <Route path='/restaurant/salad' element={<Salad/>} />
      <Route path='/restaurant/onion' element={<Onion/>} />
      
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
