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
import { OrdersManage } from './views/adminPages/Orders';
import { AddProducts, EditProducts, Products, ProductsManage } from './views/adminPages/Products';
import Users, { EditUser } from './views/adminPages/Users';
import { AddProductsType, EditCategory, ProductsTypeManage } from './views/adminPages/ProductsType';
import { AddBrands, BrandsManage, EditBrand } from './views/adminPages/Brands';


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
            <div className='row default'>
              <AdminSidebar />
              <div className='row contentInside'>
                <Routes>
                  <Route path="/" element={<AdminRoute><AdminScreen /> </AdminRoute>} exact></Route>
                  <Route path='ordersManage' element={<AdminRoute><OrdersManage/></AdminRoute>}></Route>
                  <Route path='/order/:id' element={<OrderScreen/>}></Route>
                  <Route path='/products' element={<AdminRoute><Products /></AdminRoute>} ></Route>
                  <Route path='/products/productsManage'  element={<AdminRoute><ProductsManage /></AdminRoute>}></Route>
                  <Route path='/products/addProducts' element={<AdminRoute><AddProducts/></AdminRoute>}></Route>
                  <Route path='/products/:id/edit' element={<AdminRoute><EditProducts /></AdminRoute>}></Route>
                  <Route path='/usersManage' element={<AdminRoute><Users /></AdminRoute>}></Route>
                  <Route path='/user/:id/edit' element={<AdminRoute><EditUser /></AdminRoute>}></Route>
                  <Route path='/productsType/productsTypeManage'  element={<AdminRoute><ProductsTypeManage /></AdminRoute>}></Route>
                  <Route path='/productsType/addProductsType' element={<AdminRoute><AddProductsType/></AdminRoute>}></Route>
                  <Route path='/productsType/:id/edit' element={<AdminRoute><EditCategory /></AdminRoute>}></Route>
                  <Route path='/brands/brandsManage'  element={<AdminRoute><BrandsManage /></AdminRoute>}></Route>
                  <Route path='/brands/addBrands' element={<AdminRoute><AddBrands /></AdminRoute>}></Route>
                  <Route path='/brands/:id/edit' element={<AdminRoute><EditBrand /></AdminRoute>}></Route>
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
