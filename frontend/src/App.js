import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import MapScreen from './screens/MapScreen';
import DashboardScreen from './screens/DashboardScreen';
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';


function App() {

  const cart = useSelector(state => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>

      <div className="grid-container fontpoppins">
        {/*--------------HEADER---------------*/}
        <header className="row m-0">
          <section className="w-100">
            
            <div className="sticky-header" id="mynav">
              <div className="container-fluid">
                <div className="row">
                  {/*COLUMNA UNO*/}
                  <div className="col-xs-8 col-sm-3 searchtpdi paddl d-none d-sm-none d-md-block">
                    <div class="row w-100">
                      <div class="col-md-6">
                        {/*
                        <button type="button" className="open-sidebar" onClick={() => setSidebarIsOpen(true)} style={{display:'none'}}>
                          <i className="fa fa-bars"></i>
                        </button>
                        */}
                        <div className="site-logo">
                          <Link to="/">
                            {/*<img src="http://kalanidhithemes.com/live-preview/landing-page/smart-app-landing-page/all-demo/star-background/images/logo.png" alt="Logo"/>*/}
                            <span>Tupodi</span>
                          </Link>
                        </div>
                      </div>
                      <div class="col-md-6 d-flex align-items-center">
                        <Route render={({ history }) => (<SearchBox history={history}></SearchBox>)}></Route> 
                      </div>
                    </div>
                  </div>
                  {/*COLUMNA DOS*/}
                  <div className="col-xs-4 col-sm-9 padd">
                    <nav className="site-nav" id="site-nav" role="navigation">
                      <input className="control-nav-mobile" type="checkbox" name="checkbox-nav-mobile" id="checkbox-nav-mobile"/>
                      <label className="nav-mobile" for="checkbox-nav-mobile">
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-close"></i>
                      </label>
                      <ul className="nav-off-canvas">
                        <li className="">
                          <Link to="/">Inicio</Link>
                        </li>
                        <li>
                          <Link to="/cart">Carrito{cartItems.length > 0 && (
                            <span className="badge">{cart.cartItems.length}</span>)}
                          </Link>
                        </li>
                        {/*SI EL USUARIO ES ADMINISTRADOR */}
                        {userInfo && userInfo.isAdmin && (
                        <li className="sub-menu-container">
                          <label for="sub-menu-control">
                            Admin 
                            <i className="fa fa-angle-down"></i>
                          </label>
                          <input type="checkbox" className="sub-menu-control" id="sub-menu-control" style={{display: 'none'}}/>
                          <ul className="site-sub-menu">
                            <li>
                              <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                              <Link to="/productlist">Productos</Link>
                            </li>
                            <li>
                              <Link to="/orderlist">Pedidos</Link>
                            </li>
                            <li>
                              <Link to="/userlist">Usuarios</Link>
                            </li>
                            <li>
                              <Link to="/support">Soporte</Link>
                            </li>
                          </ul>
                        </li>)}

                        {/*SI ESTA INICIADA LA SESSION CONFIRMAR CON JHONNY*/}
                        {userInfo ? (
                        <li className="sub-menu-container">
                          <label for="sub-menu-control2">
                            {userInfo.name} <i className="fa fa-angle-down"></i>{' '}
                          </label>
                          <input type="checkbox" className="sub-menu-control" id="sub-menu-control2" style={{display: 'none'}}/>
                          
                          <ul className="site-sub-menu">
                            <li>
                              <Link to="/profile">Perfil del usuario</Link>
                            </li>
                            <li>
                              <Link to="/orderhistory">Historial de pedidos</Link>
                            </li>
                            {/*Condicion PREGUNTAR A JHONNY*/}
                            {userInfo && userInfo.isSeller && (
                            <li>
                              <Link to="/productlist/seller">Productos</Link>
                            </li>
                            )}
                            {/*Otra condicion PREGUNTAR A JHONNY*/}
                            {userInfo && userInfo.isSeller && (
                            <li>
                              <Link to="/orderlist/seller">Pedidos</Link>
                            </li>
                            )}
                            <li>
                              <Link to="#signout" onClick={signoutHandler}>Salir</Link>
                            </li>
                          </ul>
                        </li>
                        ) : (
                        <li>
                          <Link to="/signin">Inicia Sesión
                          </Link>
                        </li>
                        )}             
                      </ul>
                    </nav>
                  </div>                
                </div>
              </div>
            </div>
	        </section>
        </header> 
        {/*---------------FIN DEL HEADER---------------*/}

        {/*
        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categorias</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        */}
          {/*NOTA: LAS RUTAS SIRVEN PARA DECIRLE A LA APP QUE TIENE QUE RENDERIZAR*/}
          {/*----------------------------------------------------------------------------------*/}
          {/*------------------------------------RUTAS-----------------------------------------*/}
          {/*----------------------------------------------------------------------------------*/}
          
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/search/name/:name?" component={SearchScreen} exact ></Route>
          <Route path="/search/category/:category" component={SearchScreen} exact ></Route>
          <Route path="/search/category/:category/name/:name" component={SearchScreen} exact ></Route>
          <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber" component={SearchScreen} exact></Route>
          {/*rutas privadas*/}
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          {/*rutas de administrador*/}
          <AdminRoute path="/productlist" component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/productlist/pageNumber/:pageNumber"component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListScreen} exact></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute path="/user/:id/edit" component={UserEditScreen}></AdminRoute>
          <AdminRoute path="/dashboard" component={DashboardScreen}></AdminRoute>
          <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
          {/*rutas de vendedores*/}
          <SellerRoute path="/productlist/seller" component={ProductListScreen}></SellerRoute>
          <SellerRoute path="/orderlist/seller" component={OrderListScreen}></SellerRoute>
          {/*ruta HomeScreem*/}
          <Route path="/" component={HomeScreen} exact></Route>

        

        {/*FOOTER*/}
        <footer class="tupodi-footer section-blue text-center">

          <div class="container">
            <div class="row">
                <div class="col-12">
                <h3> Download Smart Now</h3>
                  <div class="site-social-icons">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                          <a href="#"><i class="fa fa-google-plus"></i></a>
                          <a href="#"><i class="fa fa-pinterest"></i></a>
                          <a href="#"><i class="fa fa-youtube"></i></a>
                  </div>
                </div>
            </div>
          </div>
          <div class="site-copyright">
            <p>© Copyright 2016 Start. Designed by <a href="https://graphicriver.net/user/kalanidhithemes" target="_blank">Kalanidhi Themes</a></p>
          </div>
        </footer>
      
        {/*
        <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>Tupodi 2021</div>{' '}
        </footer>
        */}
        {/*FIN FOOTER*/}
      </div>
    </BrowserRouter>
    
  );

}



export default App;

