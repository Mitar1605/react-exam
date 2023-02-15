import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import Catalog from './pages/catalog/Catalog';
import CatalogProductPage from './pages/catalog/catalog-product-page/CatalogProductPage';
import CatalogKitchen from './pages/catalog/catalog-kitchen/CatalogKitchen';
import CatalogCoffee from './pages/catalog/catalog-coffee/CatalogCoffee';
import CatalogClean from './pages/catalog/catalog-clean/CatalogClean';
import CatalogElectronics from './pages/catalog/catalog-electronics/CatalogElectronics';
import ScrollToTop from './hooks/scrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='catalog-kitchen' element={<CatalogKitchen />} />
        <Route path='catalog-coffee' element={<CatalogCoffee />} />
        <Route path='catalog-clean' element={<CatalogClean />} />
        <Route path='catalog-electronics' element={<CatalogElectronics />} />
        <Route path='/catalog/:catalogEn/:productId/:title' element={<CatalogProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
