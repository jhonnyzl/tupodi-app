import React, {  useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts} from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link, useParams } from 'react-router-dom';
import CarouselHome from '../components/CarouselHome';
import CarouselCars from '../components/CarouselCars';
import CarouselArticles from '../components/CarouselArticles';
import Buttontupodi from '../components/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';

//Estilos

import telefono from '../img/telefonos.png';




export default function HomeScreen() {


    let animado = document.querySelectorAll(".animado");

    function mostrarScroll() {
        let scrollTop = document.documentElement.scrollTop;
        for (var i=0; i < animado.length; i++) {
            let alturaanimado = animado[i].offsetTop;
            if(alturaanimado < scrollTop) {
                animado[i].style.opacity = 1;
            }
        }
    }

window.addEventListener('scroll', mostrarScroll);

useEffect(() => {
    Aos.init({ duration: 2000});
}, []);


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
    <section className="container mrgt4">
      <div className="row vh-100">
          <div className="col-12 my-auto top5mg">
              <div className="row text-center w60rem">
                  <div className="col-lg-8 mb-4 wlcome">
                    <div className="banner-caption">
                      
                      <h1>TUPODI</h1>
                      
                      <h2 className="h2wlcome">La mejor madera de comprar y vender</h2>
                      <br/>
                                            
                      <p>
                        Ahora en todas las plataformas, Android y IPhone
                      </p>

                      
                    <div className="homebuttons">
                      <a href="#" className="btn btn-primary mr-1 mb-5 mrgbuton20pxder">Android</a>
                        <br className="br"/>
                      <a href="#" className="btn btn-primary mr-1 mb-5 mrgbuton20px">IPhone</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 phonetupodi">
                      <div className="card h-100 copyable">
                        <img className="imgtlfwlcome" src={telefono} alt="logo" ></img>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <div className="tupodisection">

    <section id="about-smart" className="site-about-app  section-grey ">
    <center>
            <div className="container">
            <div className="row">
            
                <div className="col-sm-12" >
                    
                    <h1 className="">Casas</h1>
                    
                    
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="heading-textt">
                    	<p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting indus
                        <strong className="bold-color">
                           &nbsp; Amazing Smart app landing page&nbsp;</strong>
                         orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.
                        </p>
                    </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
            </center>
    </section>


        <CarouselHome></CarouselHome>
        

    <section id="about-smart" className="site-about-app  section-grey ">
    <center>
            <div className="container">
            <div className="row">
            
                <div className="col-sm-12" >
                    
                    <h1 className="">Automóviles</h1>
                    
                    
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="heading-textt">
                    	<p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting indus
                        <strong className="bold-color">
                           &nbsp; Amazing Smart app landing page&nbsp;</strong>
                         orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.
                        </p>
                    </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
            </center>
    </section>

            <CarouselCars></CarouselCars>
            

    <section id="about-smart" className="site-about-app  section-grey ">
    <center>
            <div className="container">
            <div className="row">
            
                <div className="col-sm-12" >
                    
                    <h1 className="">Categorías</h1>
                    
                    
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="heading-textt">
                    	<p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting indus
                        <strong className="bold-color">
                           &nbsp; Amazing Smart app landing page&nbsp;</strong>
                         orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.
                        </p>
                    </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
            </center>
    </section>

    



        <CarouselArticles></CarouselArticles>
        <br></br><br></br>  
        </div>





        <section id="about-smart" className="site-about-app left-heading section-grey abouth">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6">
					
                    <div className="about-half-colom-section">
    	      
	                    <h1 className="aboutsh1">About smart</h1>    
                        <div className="about-half-colom-section-content">
                        	<p>
                           Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the  dummy text of the printing anprinting 
                           <strong className="bold-color">
                           &nbsp; Amazing Smart app landing page</strong> Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the industry's standard dndustry's standard dumummy text ever since the when an Lorem Ipsum.
                             <br></br>
                          <br></br>
                          Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text mmy text of tof the  dummy text of the printing anprinting and typeseing.
                          </p>
                            
                            <section className="site-download-icons about-icon">
                                    <Buttontupodi 
                                    fa="fa fa-mobile tupodifandroid" 
                                    h6="Available on the" 
                                    h5="iOS App Store"
                                    />

                                    <Buttontupodi
                                    fa="fa fa-android tupodifandroid" 
                                    h6="Available on the" 
                                    h5="Google Store"
                                    />
    						            </section>                            
                            
                        </div>
                    </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                	<div className="about-half-colom-section-image wow fadeInRight fadeInRight2 marginl" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="-300" >
						<img className="imgf" src="http://kalanidhithemes.com/live-preview/landing-page/smart-app-landing-page/all-demo/star-background/images/about.png" alt="aboutimage"/>
                    </div>
                </div>
            </div>
        </div>
    </section>








    <div className="site-more-features section-blue color-gredient ocultara" id="site-more-features">
    <center>
            <div className="container">
            <div className="row">
            
                <div className="col-sm-12" >
                    
                    <h1 className="">Automóviles</h1>
                    
                    
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="heading-textt">
                    	<p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting indus
                         orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.
                        </p>
                    </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
            </center>
        <div className="container">
            <div className="row mgl45">
                <div className="clearfix"></div>

                

                <div className="col-xs-12 col-sm-12 col-md-4 col-md-pull-4">

                    <div className="feature align-right">
                        <h5>Application records</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                        <figure>
                            <span className="fa fa-mobile"></span>
                        </figure>
                    </div>

                    <div className="feature align-right move">
                        <h5>Best for business</h5>
                        <p>Lorem Ipsum is simply dummyof the printing and</p>
                        <figure>
                            <span className="fa fa-mobile"></span>
                        </figure>
                    </div>

                    <div className="feature align-right">
                        <h5>Full free chat</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                        <figure>
                            <span className="fa fa-mobile"></span>
                        </figure>
                    </div>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-md-push-4 mlimg">

                    <figure className="featured-img wow fadeInDown" data-aos="fade-down" data-aos-duration="1000">
                        <img src="http://kalanidhithemes.com/live-preview/landing-page/smart-app-landing-page/all-demo/star-background/images/feature-mobile.png" alt="Image"/>
                    </figure>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 mg05">

                    <div className="feature align-left">
                    <figure>
                            <span className="fa fa-mobile"></span>
                        </figure>
                        <h5>Retina ready</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                        
                    </div>

                    <div className="feature align-left move">
                        <h5>Secure extra</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and.</p>
                        <figure>
                            <span className="fa fa-mobile"></span>
                        </figure>
                    </div>

                    <div className="feature align-left">
                        <h5>Night vision</h5>
                        <p>Lorem Ipsum is simply dummy of the printing and industry.</p>
                        <figure>
                            <span className="fa fa-mobile"></span>
                        </figure>
                    </div>

                </div>

            </div>

        </div>
    </div>

    <div className="site-more-features section-blue color-gredient ocultaraa" id="site-more-features">
    <center>
            <div className="container">
            <div className="row">
            
                <div className="col-sm-12" >
                    
                    <h1 className="">Automóviles</h1>
                    
                    
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="heading-textt">
                    	<p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting indus
                         orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.
                        </p>
                    </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
            </center>
        <div className="container">
            <div className="row mgl45">
                <div className="clearfix"></div>

                

                

                <div className="col-xs-12 col-sm-12 col-md-12 col-md-push-12">

                    <figure className="featured-img wow fadeInDown" data-aos="fade-down" data-aos-duration="1000">
                        <img src="http://kalanidhithemes.com/live-preview/landing-page/smart-app-landing-page/all-demo/star-background/images/feature-mobile.png" alt="Image"/>
                    </figure>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-12">
                <center>
                <div className="featurer move">
                        <h5>Secure extra</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and.</p>
                        <figurer>
                            <span className="fa fa-mobile"></span>
                        </figurer>
                    </div>
                    
                    <div className="featurer move">
                        <h5>Secure extra</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and.</p>
                        <figurer>
                            <span className="fa fa-mobile"></span>
                        </figurer>
                    </div>

                    <div className="featurer">
                        <h5>Night vision</h5>
                        <p>Lorem Ipsum is simply dummy of the printing and industry.</p>
                        <figurer>
                            <span className="fa fa-mobile"></span>
                        </figurer>
                    </div>

                    <div className="featurer">
                    <figurer>
                            <span className="fa fa-mobile"></span>
                        </figurer>
                        <h5>Retina ready</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                        
                    </div>

                    <div className="featurer move">
                        <h5>Secure extra</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and.</p>
                        <figurer>
                            <span className="fa fa-mobile"></span>
                        </figurer>
                    </div>

                    <div className="featurer">
                        <h5>Night vision</h5>
                        <p>Lorem Ipsum is simply dummy of the printing and industry.</p>
                        <figurer>
                            <span className="fa fa-mobile"></span>
                        </figurer>
                    </div>
                    </center>

                </div>

            
            </div>

        </div>
    </div>


    


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