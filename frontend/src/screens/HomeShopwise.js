import React, {  useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts} from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link, useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel'; 








export default function HomeShopwise() {

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
            <div>


{/* END LOADER */}

{/* Home Popup Section */}
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
<div className="modal fade subscribe_popup" id="onload-popup" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="ion-ios-close-empty"></i></span>
                </button>
                <div className="row no-gutters">
                    <div className="col-sm-5">
                    	<div className="background_bg h-100 bgcpopup" data-img-src={'assets/images/popup_img.jpg'}></div>
                    </div>
                    <div className="col-sm-7">
                        <div className="popup_content">
                            <div className="popup-text">
                                <div className="heading_s4">
                                    <h4>Subscribe and Get 25% Discount!</h4>
                                </div>
                                <p>Subscribe to the newsletter to receive updates about new products.</p>
                            </div>
                            <form method="post">
                            	<div className="form-group">
                                	<input name="email" required type="email" className="form-control rounded-0" placeholder="Enter Your Email"/>
                                </div>
                                <div className="form-group">
                                	<button className="btn btn-fill-line btn-block text-uppercase rounded-0" title="Subscribe" type="submit">Subscribe</button>
                                </div>
                            </form>
                            <div className="chek-form">
                                <div className="custome-checkbox">
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value=""/>
                                    <label className="form-check-label" for="exampleCheckbox3"><span>Don't show this popup again!</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    	</div>
    </div>
</div>
{/* End Screen Load Popup Section */} 





{/* START SECTION BANNER */}
<div className="banner_section full_screen staggered-animation-wrap">
    <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow carousel_style2" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active background_bg overlay_bg_50 bgcbanner10" data-img-src={'assets/images/banner10.jpg'}>
                <div className="banner_slide_content banner_content_inner">
                	<div className="container">
                    	<div className="row justify-content-center">
                            <div className="col-lg-7 col-md-10">
                                <div className="banner_content text_white text-center">
                                    <h5 className="mb-3 bg_strip staggered-animation text-uppercase" data-animation="fadeInDown" data-animation-delay="0.2s">Starting $90.00</h5>
                                    <h2 className="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.3s">Unique Furniture Style</h2>
                                    <p className="staggered-animation" data-animation="fadeInUp" data-animation-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    <Link className="btn btn-white staggered-animation" to="shop-left-sidebar.html" data-animation="fadeInUp" data-animation-delay="0.5s">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item background_bg overlay_bg_50 bgcbanner11" data-img-src={'assets/images/banner11.jpg'}>
                <div className="banner_slide_content banner_content_inner">
                	<div className="container">
                    	<div className="row justify-content-center">
                            <div className="col-lg-7 col-md-10">
                                <div className="banner_content text_white text-center">
                                    <h5 className="mb-3 staggered-animation font-weight-light" data-animation="fadeInDown" data-animation-delay="0.2s">Get up to 50% off Today Only!</h5>
                                    <h2 className="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.3s">Quality Furniture</h2>
                                    <p className="staggered-animation" data-animation="fadeInUp" data-animation-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    <Link className="btn btn-white staggered-animation" to="shop-left-sidebar.html" data-animation="fadeInUp" data-animation-delay="0.4s">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item background_bg overlay_bg_60 bgcbanner12" data-img-src={'assets/images/banner12.jpg'}>
                <div className="banner_slide_content banner_content_inner">
                	<div className="container">
                    	<div className="row justify-content-center">
                            <div className="col-lg-7 col-md-10">
                                <div className="banner_content text_white text-center">
                                    <h5 className="mb-3 staggered-animation font-weight-light" data-animation="fadeInDown" data-animation-delay="0.2s">Taking your Viewing Experience to Next Level</h5>
                                    <h2 className="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.3s">Living Room Collection</h2>
                                    <p className="staggered-animation" data-animation="fadeInUp" data-animation-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    <Link className="btn btn-white staggered-animation" to="shop-left-sidebar.html" data-animation="fadeInUp" data-animation-delay="0.4s">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><i className="ion-chevron-left"></i></a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><i className="ion-chevron-right"></i></a>
    </div>
</div>
{/* END SECTION BANNER */}

{/* END MAIN CONTENT */}
<div className="main_content">

{/* START SECTION CATEGORIES */}
<div className="section pt-0 small_pb">
	<div className="container">
    	<div className="row">
        	<div className="col-12">
            	<div className="cat_overlap radius_all_5">
                	<div className="row align-items-center">
        				<div className="col-lg-3 col-md-4">
                        	<div className="text-center text-md-left">
                                <h4>Top Categories</h4>
                                <p className="mb-2">There are many variations of passages of Lorem</p>
                                <Link to="#" className="btn btn-line-fill btn-sm">View All</Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                        <OwlCarousel className="cat_slider mt-4 mt-md-0 carousel_slider owl-carousel owl-theme nav_style5" 
                            loop
                            dots='false'
                            nav 
                            margin={30} 
                            responsive={{
                                0:{items: 1},
                                 380:{items: 2},
                                  991:{items: 3},
                                   1199:{items: 4}}}>
                                <div className="item">
                                    <div className="categories_box">
                                        <Link to="#">
                                            <i className="flaticon-bed"></i>
                                            <span>Bedroom</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="categories_box">
                                        <Link to="#">
                                            <i className="flaticon-table"></i>
                                            <span>Dining Table</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="categories_box">
                                        <Link to="#">
                                            <i className="flaticon-sofa"></i>
                                            <span>Sofa</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="categories_box">
                                        <Link to="#">
                                            <i className="flaticon-armchair"></i>
                                            <span>Armchair</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="categories_box">
                                        <Link to="#">
                                            <i className="flaticon-chair"></i>
                                            <span>chair</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="categories_box">
                                        <Link to="#">
                                            <i className="flaticon-desk-lamp"></i>
                                            <span>desk lamp</span>
                                        </Link>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
            		</div>
            	</div>
            </div>
        </div>
    </div>
</div>
{/* END SECTION CATEGORIES */}


{/*} START SECTION WHY CHOOSE */}
<div class="section bg_light_blue2 pb_70">
	<div class="container">
    	<div class="row justify-content-center">
        	<div class="col-lg-6 col-md-8">
            	<div class="heading_s1 text-center">
                	<h2>Why Choose Us?</h2>
                </div>
                <p class="text-center leads">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
        </div>
        <div class="row justify-content-center">
        	<div class="col-lg-4 col-sm-6">
            	<div class="icon_box icon_box_style4 box_shadow1">
                	<div class="icon">
                    	<i class="ti-pencil-alt"></i>
                    </div>
                    <div class="icon_box_content">
                    	<h5>Creative Design</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
            	<div class="icon_box icon_box_style4 box_shadow1">
                	<div class="icon">
                    	<i class="ti-layers"></i>
                    </div>
                    <div class="icon_box_content">
                    	<h5>Flexible Layouts</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
            	<div class="icon_box icon_box_style4 box_shadow1">
                	<div class="icon">
                    	<i class="ti-email"></i>
                    </div>
                    <div class="icon_box_content">
                    	<h5>Email Marketing</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* END SECTION WHY CHOOSE */}

{/* START SECTION SHOP */}
<div class="section small_pb small_pt">
	<div class="container">
        <div class="row justify-content-center">
			<div class="col-md-6">
            	<div class="heading_s1 text-center">
                	<h2>Exclusive Products</h2>
                </div>
            </div>
		</div>
        <div class="row">
            <div class="col-12">
            	<div class="tab-style1">
                    <ul class="nav nav-tabs justify-content-center" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="arrival-tab" data-toggle="tab" href="#arrival" role="tab" aria-controls="arrival" aria-selected="true">New Arrival</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="sellers-tab" data-toggle="tab" href="#sellers" role="tab" aria-controls="sellers" aria-selected="false">Best Sellers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false">Featured</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="special-tab" data-toggle="tab" href="#special" role="tab" aria-controls="special" aria-selected="false">Special Offer
</a>
                        </li>
                    </ul>
                </div>
                <div class="tab_slider tab-content">
                    <div class="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                        <OwlCarousel class="product_slider carousel_slider owl-carousel owl-theme dot_style1" 
                        loop="true" 
                        margin={20} 
                        responsive=
                        {{0:{items: 1},
                         481:{items: 2},
                          768:{items: 3}, 
                          991:{items: 4}}}>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={'assets/images/el_img1.jpg'} alt="el_img1"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img1.jpg" alt="el_hover_img1"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><Link to="#"><i class="icon-basket-loaded"></i> Add To Cart</Link></li>
                                                <li><Link to="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></Link></li>
                                                <li><Link to="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></Link></li>
                                                <li><Link to="#"><i class="icon-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Red & Black Headphone</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img2.jpg" alt="el_img2"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img2.jpg" alt="el_hover_img2"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Watch External</a></h6>
                                        <div class="product_price">
                                            <span class="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div class="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'68%'}}></div>
                                            </div>
                                            <span class="rating_num">(15)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <span class="pr_flash">New</span>
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img3.jpg" alt="el_img3"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img3.jpg" alt="el_hover_img3"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Nikon HD camera</a></h6>
                                        <div class="product_price">
                                            <span class="price">$68.00</span>
                                            <del>$99.00</del>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'87%'}}></div>
                                            </div>
                                            <span class="rating_num">(25)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img4.jpg" alt="el_img4"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img4.jpg" alt="el_hover_img4"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Audio Equipment</a></h6>
                                        <div class="product_price">
                                            <span class="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div class="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'70%'}}></div>
                                            </div>
                                            <span class="rating_num">(22)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img5.jpg" alt="el_img5"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <span class="pr_flash bg-danger">Hot</span>
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img6.jpg" alt="el_img6"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img6.jpg" alt="el_hover_img6"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Samsung Smart Phone</a></h6>
                                        <div class="product_price">
                                            <span class="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div class="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'68%'}}></div>
                                            </div>
                                            <span class="rating_num">(15)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div class="tab-pane fade" id="sellers" role="tabpanel" aria-labelledby="sellers-tab">
                        <OwlCarousel class="product_slider carousel_slider owl-carousel owl-theme dot_style1" 
                        loop="true" 
                        margin={20} 
                        responsive=
                        {{0:{items: 1},
                         481:{items: 2},
                          768:{items: 3}, 
                          991:{items: 4}}}>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img7.jpg" alt="el_img7"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img7.jpg" alt="el_hover_img7"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Audio Theaters</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <span class="pr_flash bg-danger">Hot</span>
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img8.jpg" alt="el_img8"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img8.jpg" alt="el_hover_img8"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Surveillance camera</a></h6>
                                        <div class="product_price">
                                            <span class="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div class="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'68%'}}></div>
                                            </div>
                                            <span class="rating_num">(15)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img9.jpg" alt="el_img9"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img9.jpg" alt="el_hover_img9"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">oppo Reno3 Pro</a></h6>
                                        <div class="product_price">
                                            <span class="price">$68.00</span>
                                            <del>$99.00</del>
                                            <div class="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'87%'}}></div>
                                            </div>
                                            <span class="rating_num">(25)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <span class="pr_flash bg-success">Sale</span>
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img10.jpg" alt="el_img10"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img10.jpg" alt="el_hover_img10"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">classical Headphone</a></h6>
                                        <div class="product_price">
                                            <span class="price">$68.00</span>
                                            <del>$99.00</del>
                                            <div class="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'87%'}}></div>
                                            </div>
                                            <span class="rating_num">(25)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img11.jpg" alt="el_img11"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img11.jpg" alt="el_hover_img11"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Basics High-Speed HDMI</a></h6>
                                        <div class="product_price">
                                            <span class="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div class="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'70%'}}></div>
                                            </div>
                                            <span class="rating_num">(22)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img12.jpg" alt="el_img12"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img12.jpg" alt="el_hover_img12"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Sound Equipment for Low</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div class="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                        <OwlCarousel class="product_slider carousel_slider owl-carousel owl-theme dot_style1" 
                        loop="true" 
                        margin={20} 
                        responsive=
                        {{0:{items: 1},
                         481:{items: 2},
                          768:{items: 3}, 
                          991:{items: 4}}}>
                            <div class="item">
                                <div class="product_wrap">
                                    <span class="pr_flash bg-danger">Hot</span>
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img8.jpg" alt="el_img8"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img8.jpg" alt="el_hover_img8"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Surveillance camera</a></h6>
                                        <div class="product_price">
                                            <span class="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div class="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'68%'}}></div>
                                            </div>
                                            <span class="rating_num">(15)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img4.jpg" alt="el_img4"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img4.jpg" alt="el_hover_img4"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Audio Equipment</a></h6>
                                        <div class="product_price">
                                            <span class="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div class="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'70%'}}></div>
                                            </div>
                                            <span class="rating_num">(22)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img11.jpg" alt="el_img11"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img11.jpg" alt="el_hover_img11"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Basics High-Speed HDMI</a></h6>
                                        <div class="product_price">
                                            <span class="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div class="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'70%'}}></div>
                                            </div>
                                            <span class="rating_num">(22)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img1.jpg" alt="el_img1"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img1.jpg" alt="el_hover_img1"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Red & Black Headphone</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img7.jpg" alt="el_img7"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img7.jpg" alt="el_hover_img7"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Audio Theaters</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <span class="pr_flash bg-danger">Hot</span>
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img6.jpg" alt="el_img6"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img6.jpg" alt="el_hover_img6"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Samsung Smart Phone</a></h6>
                                        <div class="product_price">
                                            <span class="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div class="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'68%'}}></div>
                                            </div>
                                            <span class="rating_num">(15)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div class="tab-pane fade" id="special" role="tabpanel" aria-labelledby="special-tab">
                        <OwlCarousel class="product_slider carousel_slider owl-carousel owl-theme dot_style1" 
                        loop="true" 
                        margin={20} 
                        responsive=
                        {{0:{items: 1},
                         481:{items: 2},
                          768:{items: 3}, 
                          991:{items: 4}}}>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img2.jpg" alt="el_img2"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img2.jpg" alt="el_hover_img2"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Watch External</a></h6>
                                        <div class="product_price">
                                            <span class="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div class="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'68%'}}></div>
                                            </div>
                                            <span class="rating_num">(15)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img5.jpg" alt="el_img5"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img9.jpg" alt="el_img9"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img9.jpg" alt="el_hover_img9"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">oppo Reno3 Pro</a></h6>
                                        <div class="product_price">
                                            <span class="price">$68.00</span>
                                            <del>$99.00</del>
                                            <div class="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'87%'}}></div>
                                            </div>
                                            <span class="rating_num">(25)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img7.jpg" alt="el_img7"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img7.jpg" alt="el_hover_img7"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Audio Theaters</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img5.jpg" alt="el_img5"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="product_wrap">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="assets/images/el_img12.jpg" alt="el_img12"/>
                                            <img class="product_hover_img" src="assets/images/el_hover_img12.jpg" alt="el_hover_img12"/>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">Sound Equipment for Low</a></h6>
                                        <div class="product_price">
                                            <span class="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* END SECTION SHOP */}





{/* START SECTION SHOP */}
<div className="section pb_20">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-md-6">
                <div className="heading_s4 text-center">
                    <h2>Special Offers</h2>
                </div>
                <p className="text-center leads">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim Nullam nunc varius.</p>
            </div>
		</div>
        <div className="row">
        	<div className="col-md-12">
            	<OwlCarousel className="product_slider carousel_slider owl-carousel owl-theme nav_style5" 
                loop="true" 
                dots="false" 
                nav="true" 
                margin={30}
                responsive={{
                    0:{items: 1},
                     481:{items: 2},
                      768:{items: 3},
                       1199:{items: 4}}}>
                    <div className="item">
                        <div className="product_box text-center">
                            <div className="product_img">
                                <Link to="shop-product-detail.html">
                                    <img src={'assets/images/furniture_img1.jpg'} alt="furniture_img1"/>
                                </Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                        <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                        <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="shop-product-detail.html">enim expedita sed</Link></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'80%'}}></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="add-to-cart">
                                    <Link to="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_box text-center">
                            <div className="product_img">
                                <Link to="shop-product-detail.html">
                                    <img src={'assets/images/furniture_img2.jpg'} alt="furniture_img2"/>
                                </Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                        <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                        <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="shop-product-detail.html">adipisci officia libero</Link></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'68%'}}></div>
                                    </div>
                                    <span className="rating_num">(15)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="add-to-cart">
                                    <Link to="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_box text-center">
                            <div className="product_img">
                                <Link to="shop-product-detail.html">
                                    <img src={'assets/images/furniture_img3.jpg'} alt="furniture_img3"/>
                                </Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                        <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                        <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="shop-product-detail.html">Internet tend to repeat</Link></h6>
                                <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'87%'}}></div>
                                    </div>
                                    <span className="rating_num">(25)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="add-to-cart">
                                    <Link to="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_box text-center">
                            <div className="product_img">
                                <Link to="shop-product-detail.html">
                                    <img src={'assets/images/furniture_img4.jpg'} alt="furniture_img4"/>
                                </Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                        <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                        <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="shop-product-detail.html">Many desktop publishing</Link></h6>
                                <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'70%'}}></div>
                                    </div>
                                    <span className="rating_num">(22)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="add-to-cart">
                                    <Link to="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_box text-center">
                            <div className="product_img">
                                <Link to="shop-product-detail.html">
                                    <img src={'assets/images/furniture_img5.jpg'} alt="furniture_img5"/>
                                </Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                        <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                        <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="shop-product-detail.html">injected humour repetition</Link></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'80%'}}></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="add-to-cart">
                                    <Link to="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_box text-center">
                            <div className="product_img">
                                <Link to="shop-product-detail.html">
                                    <img src={'assets/images/furniture_img6.jpg'} alt="furniture_img6"/>
                                </Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                        <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                        <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="shop-product-detail.html">randomised humour words</Link></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'68%'}}></div>
                                    </div>
                                    <span className="rating_num">(15)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="add-to-cart">
                                    <Link to="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div> 
    </div>
</div>
{/* END SECTION SHOP */}






<div className="section small_pb small_pt">
	<div className="container">
    	<div className="row justify-content-center">
			<div className="col-md-6">
                <div className="heading_s4 text-center">
                    <h2>Top Categories</h2>
                </div>
                <p className="text-center leads">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim Nullam nunc varius.</p>
            </div>
		</div>
        <div className="row align-items-center">
            <div className="col-12">
                <OwlCarousel className="cat_slider cat_style1 mt-4 mt-md-0 carousel_slider owl-carousel owl-theme nav_style5" 
                loop="true"
                dots="false"
                nav="true"
                margin={30}
                responsive={{0:{items: 2},
                 480:{items: 3},
                  576:{items: 4},
                   768:{items: 5},
                    991:{items: 6},
                     1199:{items: 7}}}>
                    <div className="item">
                        <div className="categories_box">
                            <Link to="#">
                                <img src={'assets/images/cat_img1.png'} alt="cat_img1"/>
                                <span>Television</span>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="categories_box">
                            <Link to="#">
                                <img src={'assets/images/cat_img2.png'} alt="cat_img2"/>
                                <span>Mobile</span>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="categories_box">
                            <Link to="#">
                                <img src={'assets/images/cat_img3.png'} alt="cat_img3"/>
                                <span>Headphone</span>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="categories_box">
                            <Link to="#">
                                <img src={'assets/images/cat_img4.png'} alt="cat_img4"/>
                                <span>Watch</span>
                            </Link>
                        </div>
                    </div>
                    <div class="item">
                        <div class="categories_box">
                            <Link to="#">
                                <img src={'assets/images/cat_img5.png'} alt="cat_img5"/>
                                <span>Game</span>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="categories_box">
                            <Link to="#">
                                <img src={'assets/images/cat_img6.png'} alt="cat_img6"/>
                                <span>Camera</span>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="categories_box">
                            <Link to="#">
                                <img src={'assets/images/cat_img7.png'} alt="cat_img7"/>
                                <span>Audio</span>
                            </Link>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
</div>

{/* START SECTION TEAM */}
<div class="section pb_70">
	<div class="container">
    	<div class="row justify-content-center">
        	<div class="col-lg-6">
            	<div class="heading_s1 text-center">
                	<h2>Our Team Members</h2>
                </div>
                <p class="text-center leads">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
        </div>
        <div class="row justify-content-center">
        	<div class="col-lg-3 col-sm-6">
            	<div class="team_box team_style1">
                	<div class="team_img">
                    	<img src="assets/images/team_img1.jpg" alt="team_img1"/>
                        <ul class="social_icons social_style1">
                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul>
                    </div>
                    <div class="team_content">
                        <div class="team_title">
                            <h5>John Muniz</h5>
                            <span>Project Engineer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
            	<div class="team_box team_style1">
                	<div class="team_img">
                    	<img src="assets/images/team_img2.jpg" alt="team_img2"/>
                        <ul class="social_icons social_style4">
                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul>
                    </div>
                    <div class="team_content">
                        <div class="team_title">
                            <h5>Alea Brooks</h5>
                            <span>Graphics Designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
            	<div class="team_box team_style1">
                	<div class="team_img">
                    	<img src="assets/images/team_img3.jpg" alt="team_img3"/>
                        <ul class="social_icons social_style4">
                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul>
                    </div>
                    <div class="team_content">
                        <div class="team_title">
                            <h5>Anders Glick</h5>
                            <span>Software Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
            	<div class="team_box team_style1">
                	<div class="team_img">
                    	<img src="assets/images/team_img4.jpg" alt="team_img4"/>
                        <ul class="social_icons social_style4">
                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul>
                    </div>
                    <div class="team_content">
                        <div class="team_title">
                            <h5>Richard Tice</h5>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* END SECTION TEAM */}

{/* START SECTION SHOP INFO */}
<div className="section pb_70">
    	<div className="container">
            <div className="row no-gutters">
                <div className="col-lg-4">	
                    <div className="icon_box icon_box_style1">
                        <div className="icon">
                            <i className="flaticon-shipped"></i>
                        </div>
                        <div className="icon_box_content">
                            <h5>Free Delivery</h5>
                            <p>If you are going to use of Lorem, you need to be sure there anything</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">	
                    <div className="icon_box icon_box_style1">
                        <div className="icon">
                            <i className="flaticon-money-back"></i>
                        </div>
                        <div className="icon_box_content">
                            <h5>30 Day Return</h5>
                            <p>If you are going to use of Lorem, you need to be sure there anything</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">	
                    <div className="icon_box icon_box_style1">
                        <div className="icon">
                            <i className="flaticon-support"></i>
                        </div>
                        <div className="icon_box_content">
                            <h5>27/4 Support</h5>
                            <p>If you are going to use of Lorem, you need to be sure there anything</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* END SECTION SHOP INFO */}




</div>
{/* END MAIN CONTENT */}

{/* START FOOTER */}
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
    </>)}

            </div>

            )
    }
