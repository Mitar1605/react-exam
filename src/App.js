import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
