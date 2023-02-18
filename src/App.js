import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/homepage/HomePage';
import Catalog from './pages/catalog/Catalog';
import CatalogProductPage from './pages/catalog/catalog-product-page/CatalogProductPage';
import CatalogKitchen from './pages/catalog/catalog-kitchen/CatalogKitchen';
import CatalogCoffee from './pages/catalog/catalog-coffee/CatalogCoffee';
import CatalogClean from './pages/catalog/catalog-clean/CatalogClean';
import CatalogElectronics from './pages/catalog/catalog-electronics/CatalogElectronics';
import RecipesPage from './pages/recipesPage/RecipesPage';
import Shop from './pages/shop/Shop';
import ScrollToTop from './hooks/scrollToTop/ScrollToTop';
import Call from './components/call/Call';
import { createContext } from 'react';


export const CartDataContext = createContext()

function App() {

  const [cartData, setCartData] = useState([])
  const [showCall, setShowCall] = useState(false)
  const [showBurger, setShowBurger] = useState(false)

  const showCallFunc = () => {
    setShowCall(true)
  }

  return (
    <div className="App">
      <CartDataContext.Provider value={{cartData, setCartData}}>
        <ScrollToTop showBurger={showBurger} setShowBurger={setShowBurger} />
        <Header showCallFunc={showCallFunc} cartData={cartData} showBurger={showBurger} setShowBurger={setShowBurger} />
        <Routes>
          <Route path='/' element={<HomePage showCallFunc={showCallFunc} />} />
          <Route path='/catalog' element={<Catalog showCallFunc={showCallFunc} />} />
          <Route path='/catalog-kitchen' element={<CatalogKitchen />} />
          <Route path='/catalog-coffee' element={<CatalogCoffee />} />
          <Route path='/catalog-clean' element={<CatalogClean />} />
          <Route path='/catalog-electronics' element={<CatalogElectronics />} />
          <Route path='/Tips&Recipes' element={<RecipesPage />} />
          <Route path='/shop' element={<Shop showCallFunc={showCallFunc} />} />
          <Route path='/catalog/:catalogEn/:productId/:title' element={<CatalogProductPage />} />
        </Routes>
        <Footer />
      </CartDataContext.Provider>
      <Call showCall={showCall} setShowCall={setShowCall} />
    </div>
  );
}

export default App;
