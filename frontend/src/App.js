import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./views/HomeScreen"
import ProductScreen from './views/ProductScreen';
import SigninScreen from './views/accountService/SigninScreen';
import SignupScreen from './views/accountService/SignupScreen';
import ChangePassword from './views/accountService/ChangePassword';
import AccountScreen from './views/AccountScreen';
import SearchScreen from './views/SearchScreen';
import CategoryScreen from './views/CategoryScreen';
import NavBar from './components/Navbar';
import PrivateRoute from './components/subComponents/PrivateRoute';
import CartScreen from './views/CartScreen';
import ShippingScreen from './views/ShippingScreen';
import PlaceOrderScreen from './views/PlaceOrderScreen';
import OrderHistoryScreen from './views/OrderHistoryScreen';
import OrderScreen from './views/OrderScreen';
import { useSelector } from 'react-redux';
import HeaderAdmin from './components/adminComponent/HeaderAdmin';
import AdminSidebar from './components/adminComponent/AdminSidebar';
import AdminRoute from './components/adminComponent/AdminRoute';
import AdminScreen from './views/AdminScreen';


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <Router>
      {/* Header */}
      <div>
        {userInfo && userInfo.isAdmin ? (
          <div>
            <HeaderAdmin />
          </div>
        ) : (
          <div>
            <Header />
            <NavBar />
          </div>
        )}
      </div>
      {/* Body */}
      <div className="App">
        <main>
          {userInfo && userInfo.isAdmin ? (
            <div className='row ahihi'>
              <AdminSidebar />
              <div className='row contentInside'>
                <Routes>
                  <Route path="/" element={<AdminRoute><AdminScreen /> </AdminRoute>} exact></Route>
                  <Route path='/changepassword' element={<PrivateRoute><ChangePassword /></PrivateRoute>}></Route>
                  <Route path='/account' element={<PrivateRoute><AccountScreen /></PrivateRoute>}></Route>
                </Routes>
              </div>
            </div>
          ) : (
            <div>
              <Routes>
                <Route path="/" element={<HomeScreen />} exact></Route>
                <Route path="/product/:id" element={<ProductScreen />} exact></Route>
                <Route path="/signin" element={<SigninScreen />}> </Route>
                <Route path="/register" element={<SignupScreen />}> </Route>
                <Route path='/changepassword' element={<PrivateRoute><ChangePassword /></PrivateRoute>}></Route>
                <Route path='/account' element={<PrivateRoute><AccountScreen /></PrivateRoute>}></Route>
                <Route path='/search' element={<SearchScreen />}></Route>
                <Route path='/category' element={<CategoryScreen />}></Route>
                <Route path='/cart/:id' element={<CartScreen />}></Route>
                <Route path='/cart/' element={<CartScreen />}></Route>
                <Route path="/shipping" element={<ShippingScreen />}></Route>
                <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
                <Route path='/orderhistory' element={<OrderHistoryScreen />}></Route>
                <Route path='/order/:id' element={<OrderScreen />}></Route>
              </Routes>
            </div>
          )}

          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
