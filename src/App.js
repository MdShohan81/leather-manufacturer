import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='product/:productId' element={<ProductDetail>5</ProductDetail>}></Route>
        </Routes>
    </div>
  );
}

export default App;
