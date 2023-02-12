import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import Catalog from './pages/catalog/Catalog';
import CatalogProductPage from './pages/catalog/catalog-product-page/CatalogProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:catalogEn/:productId/:title' element={<CatalogProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
