import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts} from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link, useParams } from 'react-router-dom';
//Estilos
import '../css/home.css';

import telefono from '../img/telefonos.png';


export default function HomeScreen() {
  const { pageNumber = 1 } = useParams();
  const dispatch = useDispatch();

  useEffect(() => { dispatch(listProducts({pageNumber})); },[dispatch,pageNumber]);

  const productList = useSelector( state => state.productList);
  const { loading, error, products, page, pages } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {dispatch(listProducts({}));dispatch(listTopSellers());}, [dispatch]);
  return (
  <>
    <div class="star-bg">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
    {loadingSellers ? (
    <LoadingBox></LoadingBox>
    ) : errorSellers ? (
    <MessageBox variant="danger">{errorSellers}</MessageBox>
    ) : (
    <>
    {/*
      {sellers.length === 0 && <MessageBox>No se encontró vendedor</MessageBox>}
      <Carousel showArrows autoPlay showThumbs={false}>
        {sellers.map((seller) => (
        <div key={seller._id}>
          <Link to={`/seller/${seller._id}`}>
            <img src={seller.seller.logo} alt={seller.seller.name} />
              <p className="legend">{seller.seller.name}</p>
          </Link>
        </div>
        ))}
        </Carousel>}*/}
    </>
    )}
    <section class="container">
      <div class="row vh-100">
          <div class="col-12 my-auto">
              <div class="row text-center">
                  <div class="col-lg-8 mb-4">
                    <div class="banner-caption">

                      
                      <h1>TUPODI</h1>
                      
                      
                      <h2>La mejor madera de comprar y vender</h2>

                      
                      <p>
                        Ahora en todas las plataformas, Android y IPhone
                      </p>

                      
                      <a href="#" class="btn btn-primary mr-1">Android</a>

                      <a href="#" class="btn btn-primary mr-1">IPhone</a>

                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                      <div class="card h-100 copyable">
                        <img src={telefono} alt="logo" ></img>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    {loading ? (
    <LoadingBox></LoadingBox>
    ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
    ) :  (
    <>
      {/*
      {products.length === 0 && <MessageBox>Producto no encontrado</MessageBox>}
      <div className="row center">
        {products.map((product) => (
        <Product key={product._id} product={product}></Product>
        ))}
      </div>
      */}
      {/*
      <div className="row center pagination">
      {[...Array(pages).keys()].map((x) => (
        <Link className={x + 1 === page ? 'active' : ''} key={x + 1} to={`/search/category/all/name/all/min/0/max/0/rating/0/order/newest/pageNumber/${x + 1}`}>
          {x + 1}
        </Link>
      ))}
      </div>
      */}
    </>
    )}          
  </>
  )
}