import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/product/:productId' element={<ProductDetail>5</ProductDetail>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>>
        </Routes>
    </div>
  );
}

export default App;
