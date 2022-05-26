import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import MyReview from './pages/MyReview/MyReview';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Profile from './pages/Profile/Profile';
import User from './pages/User/User';


function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            
            <Route path='product/:productId' element={
            <RequireAuth>
              <ProductDetail>5</ProductDetail>
            </RequireAuth>
          }></Route>

            <Route path='dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='order' element={<Order></Order>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='user' element={<User></User>}></Route>
          </Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='register' element={<Register></Register>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
