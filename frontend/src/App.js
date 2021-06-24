import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import ScriptTag from 'react-script-tag';
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
import {Button} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import Home from './screens/Home';
import HomeShopwise from './screens/HomeShopwise';





import LogoLight from './img/logo_light.png';
import LogoDark from './img/logo_dark.png';
import Visa from './img/visa.png';
import Discover from './img/discover.png';
import MasterCard from './img/master_card.png';
import Paypal from './img/paypal.png';
import AmaricanExpress from './img/amarican_express.png';





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


<header className="header_wrap fixed-top dd_dark_skin transparent_header background-gradient">



<div class="top-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                	
                </div>
                <div class="col-md-6">
                	<div class="text-center text-md-right">
                       	<ul class="header_list">
                        	<li><a href="compare.html" className="topha"><i className="ti-control-shuffle"></i><span>Compare</span></a></li>
                            <li><a href="wishlist.html" className="topha"><i className="ti-heart" ></i><span>Wishlist</span></a></li>
                            <li><a href="login.html" className="topha"><i className="ti-user"></i><span>Login</span></a></li>
						</ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
    <div className="light_skin main_menu_uppercase background-gradient">
    	<div className="container">
            <nav className="navbar navbar-expand-lg"> 
                <Link className="navbar-brand" to="index.html">
                    <img className="logo_light" src={LogoLight} alt="logo" />
                    <img className="logo_dark" src={LogoDark} alt="logo" />
                </Link>
                {/*
                <button type="button" className="open-sidebar" onClick={() => setSidebarIsOpen(true)} style={{display:'none'}}>
                          <i className="fa fa-bars"></i>
                        </button>*/}
                <Route render={({ history }) => (<SearchBox history={history}></SearchBox>)}></Route>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false"> 
                    <span className="ion-android-menu"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li><Link className="nav-link nav_item active" to="/">Inicio</Link></li> 
                        {userInfo && userInfo.isAdmin && (
                        <li className="dropdown">
                            <Link className="dropdown-toggle nav-link" to="#" data-toggle="dropdown">Admin</Link>
                            <div className="dropdown-menu">
                                <ul> 
                                    <li><Link className="dropdown-item nav-link nav_item" to="/Dashboard">Dashboard</Link></li> 
                                    <li><Link className="dropdown-item nav-link nav_item" to="/productlist">Productos</Link></li> 
                                    <li><Link className="dropdown-item nav-link nav_item" to="/orderlist">Pedidos</Link></li>
                                    <li><Link className="dropdown-item nav-link nav_item" to="/userlist">Usuarios</Link></li>
                                    <li><Link className="dropdown-item nav-link nav_item" to="/support">Soporte</Link></li>
                                </ul>
                            </div>
                        </li>)}

                        {userInfo ? (
                        <li className="dropdown">
                            <Link className="dropdown-toggle nav-link" to="#" data-toggle="dropdown">{userInfo.name}</Link>
                            <div className="dropdown-menu">
                                <ul> 
                                    <li><Link className="dropdown-item nav-link nav_item" to="/profile">Perfil del usuario</Link></li> 
                                    <li><Link className="dropdown-item nav-link nav_item" to="/orderhistory">Historial de pedidos</Link></li>

                                    {userInfo && userInfo.isSeller && (
                                    <li><Link className="dropdown-item nav-link nav_item" to="/productlist/seller">Productos</Link></li>
                                    )}
                                    {userInfo && userInfo.isSeller && (
                                    <li><Link className="dropdown-item nav-link nav_item" to="/orderlist/seller">Pedidos</Link></li>
                                    )}
                                    <li><Link className="dropdown-item nav-link nav_item" to="#signout" onClick={signoutHandler}>Salir</Link></li>
                                </ul>
                            </div>
                        </li>
                        ) : (
                        <li><Link className="nav-link nav_item active" to="/signin">Inicia Sesión</Link></li>
                        )}  
                        
                        
                        
                         
                    </ul>
                </div>
                <ul className="navbar-nav attr-nav align-items-center">
                    <li><Link to="javascript:void(0);" className="nav-link search_trigger"><i className="linearicons-magnifier"></i></Link>
                        <div className="search_wrap">
                            <span className="close-search"><i className="ion-ios-close-empty"></i></span>
                            <form>
                                <input type="text" placeholder="Search" className="form-control" id="search_input"/>
                                <button type="submit" className="search_icon"><i className="ion-ios-search-strong"></i></button>
                            </form>
                        </div><div className="search_overlay"></div><div className="search_overlay"></div>
                    </li>
                    <li className="dropdown cart_dropdown"><Link className="nav-link cart_trigger" to="/cart" data-toggle="dropdown"><i className="linearicons-cart"></i>{cartItems.length > 0 && (<span className="cart_count">{cart.cartItems.length}</span>)}</Link>
                        <div className="cart_box dropdown-menu dropdown-menu-right">
                            <ul className="cart_list">
                                <li>
                                    <Link to="#" className="item_remove"><i className="ion-close"></i></Link>
                                    <Link to="#"><img src={'assets/images/cart_thamb1.jpg'} alt="cart_thumb1"/>Variable product 001</Link>
                                    <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>78.00</span>
                                </li>
                                <li>
                                    <Link to="#" className="item_remove"><i className="ion-close"></i></Link>
                                    <Link to="#"><img src={'assets/images/cart_thamb2.jpg'} alt="cart_thumb2"/>Ornare sed consequat</Link>
                                    <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>81.00</span>
                                </li>
                            </ul>
                            <div className="cart_footer">
                                <p className="cart_total"><strong>Subtotal:</strong> <span className="cart_price"> <span className="price_symbole">$</span></span>159.00</p>
                                <p className="cart_buttons"><Link to="#" className="btn btn-fill-line view-cart">View Cart</Link><Link to="#" className="btn btn-fill-out checkout">Checkout</Link></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
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
          <Route path="/" component={HomeShopwise} exact></Route>




          <footer className="footer_dark background-gradient">
	<div className="footer_top pb_20">
    <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12">
                	<div class="widget">
                        <div class="footer_logo">
                            <a href="#"><img src={LogoLight} alt="logo"/></a>
                        </div>
                        <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                    </div>
                    <div class="widget">
                        <ul class="social_icons social_white">
                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="#"><i class="ion-social-youtube-outline"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul>
                    </div>
        		</div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                	<div class="widget">
                        <h6 class="widget_title">Useful Links</h6>
                        <ul class="widget_links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Location</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                	<div class="widget">
                        <h6 class="widget_title">Category</h6>
                        <ul class="widget_links">
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Woman</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Best Saller</a></li>
                            <li><a href="#">New Arrivals</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
                	<div class="widget">
                        <h6 class="widget_title">My Account</h6>
                        <ul class="widget_links">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Discount</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Orders History</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                	<div class="widget">
                        <h6 class="widget_title">Contact Info</h6>
                        <ul class="contact_info contact_info_light">
                            <li>
                                <i class="ti-location-pin"></i>
                                <p>123 Street, Old Trafford, New South London , UK</p>
                            </li>
                            <li>
                                <i class="ti-email"></i>
                                <a href="/cdn-cgi/l/email-protection#a5cccbc3cae5d6ccd1c0cbc4c8c08bc6cac8"><span class="__cf_email__" data-cfemail="ea83848c85aa99839e8f848b878fc4898587">[email&#160;protected]</span></a>
                            </li>
                            <li>
                                <i class="ti-mobile"></i>
                                <p>+ 457 789 789 65</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="bottom_footer bg_dark4">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="mb-md-0 text-center text-md-left">© 2020 All Rights Reserved by Bestwebcreator</p>
                </div>
                <div className="col-md-6">
                    <ul className="footer_payment text-center text-md-right">
                        <li><Link to="#"><img src={Visa} alt="visa"/></Link></li>
                        <li><Link to="#"><img src={Discover} alt="discover"/></Link></li>
                        <li><Link to="#"><img src={MasterCard} alt="master_card"/></Link></li>
                        <li><Link to="#"><img src={Paypal} alt="paypal"/></Link></li>
                        <li><Link to="#"><img src={AmaricanExpress} alt="amarican_express"/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
{/* END FOOTER */}

<a href="#" className="scrollup" style={{display: 'none'}}><i className="ion-ios-arrow-up"></i></a>






    </BrowserRouter>
    
  );

}



export default App;

