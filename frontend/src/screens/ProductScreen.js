import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createReview, detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';


import ScriptTag from 'react-script-tag';

import OwlCarousel from 'react-owl-carousel';
import Slider from "react-slick";


import './css/animate.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap/css/bootstrap.min.css';

import './css/all.min.css';
import './css/ionicons.min.css';
import './css/themify-icons.css';
import './css/linearicons.css';
import './css/flaticon.css';
import './css/simple-line-icons.css';

import 'owl.carousel/dist/assets/owl.carousel.min.css'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './css/magnific-popup.css';
import './css/jquery-ui.css';
import './css/slick.css';
import './css/slick-theme.css';
import './css/style.css';
import './css/responsive.css';






export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Reseña enviada con éxito');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Por favor ingrese comentario y calificación');
    }
  };







  



  return (

    
    <div>

    


      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Volver a los resultados</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Precio : ${product.price}</li>
                <li>
                  Descripción:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    Vendedor{' '}
                    <h2>
                      <Link to={`/seller/${product.seller._id}`}>
                        {product.seller.seller.name}
                      </Link>
                    </h2>
                    <Rating
                      rating={product.seller.seller.rating}
                      numReviews={product.seller.seller.numReviews}
                    ></Rating>
                  </li>
                  <li>
                    <div className="row">
                      <div>Precio</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Cantidad en stock</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">Hay existencias</span>
                        ) : (
                          <span className="danger">No disponible</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Cantidad</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Agregar al carrito
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 id="reviews">Reseñas</h2>
            {product.reviews.length === 0 && (
              <MessageBox>No hay reseñas</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Escribe las reseñas de un cliente</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Clasificación</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Selecciona...</option>
                        <option value="1">1- Pobre</option>
                        <option value="2">2- Justo</option>
                        <option value="3">3- Bueno</option>
                        <option value="4">4- Muy bueno</option>
                        <option value="5">5- Excelente</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comentario</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Enviar
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Por favor <Link to="/signin">Inicia sesión</Link> para escribir una reseña
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>





          <div className="breadcrumb_section bg_gray page-title-mini">
    <div className="container">
        <div className="row align-items-center">
        	<div className="col-md-6">
                <div className="page-title">
            		<h1>Product Detail</h1>
                </div>
            </div>
            <div className="col-md-6">
                <ol className="breadcrumb justify-content-md-end">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active">Product Detail</li>
                </ol>
            </div>
        </div>
    </div>
</div>



<div className="main_content">


<div className="section">
	<div className="container">
		<div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <div className="product-image">
                    <div className="product_img_box">
                        <img id="product_img" src={product.image}  data-zoom-image={product.image} alt={product.name} />
                        <Link to="#" className="product_img_zoom" title="Zoom">
                            <span className="linearicons-zoom-in"></span>
                        </Link>
                    </div>
                    <Slider id="pr_item_gallery" className="product_gallery_item slick_slider" 
                    slidesToShow={3}
                    slidesToScroll={1}
                    
                    infinite="true">
                        <div className="item">
                            <Link to="#" className="product_gallery_item active " data-image={product.image} data-zoom-image={product.image}>
                                <img src={product.image} alt="product_small_img1" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#" className="product_gallery_item" data-image={product.image} data-zoom-image={product.image}>
                                <img src={product.image} alt="product_small_img2" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#" className="product_gallery_item" data-image={product.image} data-zoom-image={product.image}>
                                <img src={product.image} alt="product_small_img2" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#" className="product_gallery_item" data-image={product.image} data-zoom-image={product.image}>
                                <img src={product.image} alt="product_small_img2" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#" className="product_gallery_item" data-image={product.image} data-zoom-image={product.image}>
                                <img src={product.image} alt="product_small_img2" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#" className="product_gallery_item" data-image={product.image} data-zoom-image={product.image}>
                                <img src={product.image} alt="product_small_img2" />
                            </Link>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="pr_detail">
                    <div className="product_description">
                        <h4 className="product_title"><a href="#">{product.name}</a></h4>
                        Vendedor{' '}
                    <h6 className="product_title">
                      <Link to={`/seller/${product.seller._id}`}>
                        {product.seller.seller.name}
                      </Link>
                    </h6>
                
                        <div className="product_price">
                            <span className="price">${product.price}</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                                <span>35% Off</span>
                            </div>
                        </div>
                        <div className="rating_wrap">
                                <div className="rating">
                                    <div className="product_rate" style={{width:'80%'}}>
                                    </div>
                                </div>
                                <span className="rating_num">(21)</span>
                            </div>
                        <div className="pr_desc">
                            <p>{product.description}</p>
                        </div>
                        <div className="product_sort_info">
                            <ul>
                                <li><i className="linearicons-shield-check detailpc"></i> 1 Year AL Jazeera Brand Warranty</li>
                                <li><i className="linearicons-sync"></i> 30 Day Return Policy</li>
                                <li><i className="linearicons-bag-dollar"></i> Cash on Delivery available</li>
                            </ul>
                        </div>
                        <div className="pr_switch_wrap">
                            <span className="switch_lable">Color</span>
                            <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#DA323F"></span>
                            </div>
                        </div>
                        <div className="pr_switch_wrap">
                            <span className="switch_lable">Size</span>
                            <div className="product_size_switch">
                                <span>xs</span>
                                <span>s</span>
                                <span>m</span>
                                <span>l</span>
                                <span>xl</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="cart_extra">
                        <div className="cart-product-quantity">
                            <div className="quantity">
                                <input type="button" value="-" className="minus"/>
                                <input type="text" name="quantity" value="1" title="Qty" className="qty" size="4"/>
                                <input type="button" value="+" className="plus"/>
                            </div>
                        </div>
                        <div className="cart_btn">
                            <button className="btn btn-fill-out btn-addtocart" type="button"><i className="icon-basket-loaded"></i> Add to cart</button>
                            <a className="add_compare" href="#"><i className="icon-shuffle"></i></a>
                            <a className="add_wishlist" href="#"><i className="icon-heart"></i></a>
                        </div>
                    </div>
                    <hr />
                    <ul className="product-meta">
                        <li>SKU: <a href="#">BE45VGRT</a></li>
                        <li>Category: <a href="#">Clothing</a></li>
                        <li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a> </li>
                    </ul>
                    
                    <div className="product_share">
                        <span>Share:</span>
                        <ul className="social_icons">
                            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                            <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                            <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                            <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
        	<div className="col-12">
            	<div className="large_divider clearfix"></div>
            </div>
        </div>
        <div className="row">
        	<div className="col-12">
            	<div className="tab-style3">
					<ul className="nav nav-tabs" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" id="Description-tab" data-toggle="tab" href="#Description" role="tab" aria-controls="Description" aria-selected="true">Description</a>
                      	</li>
                      	<li className="nav-item">
                        	<a className="nav-link" id="Additional-info-tab" data-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Additional info</a>
                      	</li>
                      	<li className="nav-item">
                        	<a className="nav-link" id="Reviews-tab" data-toggle="tab" href="#Reviews" role="tab" aria-controls="Reviews" aria-selected="false">Reviews (2)</a>
                      	</li>
                    </ul>
                	<div className="tab-content shop_info_tab">
                      	<div className="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                        	<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Vivamus bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
                        	<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                      	</div>
                      	<div className="tab-pane fade" id="Additional-info" role="tabpanel" aria-labelledby="Additional-info-tab">
                        	<table className="table table-bordered">
                            	<tr>
                                	<td>Capacity</td>
                                	<td>5 Kg</td>
                            	</tr>
                                <tr>
                                    <td>Color</td>
                                    <td>Black, Brown, Red,</td>
                                </tr>
                                <tr>
                                    <td>Water Resistant</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Material</td>
                                    <td>Artificial Leather</td>
                                </tr>
                        	</table>
                      	</div>
                      	<div className="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
                        	<div className="comments">
                            	<h5 className="product_tab_title">2 Review For <span>Blue Dress For Woman</span></h5>
                                <ul className="list_none comment_list mt-4">
                                    <li>
                                        <div className="comment_img">
                                            <img src="images/user1.jpg" alt="user1"/>
                                        </div>
                                        <div className="comment_block">
                                            <div className="rating_wrap">
                                                <div className="rating">
                                                    <div className="product_rate" style={{width:'80%'}}></div>
                                                </div>
                                            </div>
                                            <p className="customer_meta">
                                                <span className="review_author">Alea Brooks</span>
                                                <span className="comment-date">March 5, 2018</span>
                                            </p>
                                            <div className="description">
                                                <p>Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment_img">
                                            <img src="images/user2.jpg" alt="user2"/>
                                        </div>
                                        <div className="comment_block">
                                            <div className="rating_wrap">
                                                <div className="rating">
                                                    <div className="product_rate" style={{width:'60%'}}></div>
                                                </div>
                                            </div>
                                            <p className="customer_meta">
                                                <span className="review_author">Grace Wong</span>
                                                <span className="comment-date">June 17, 2018</span>
                                            </p>
                                            <div className="description">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                        	</div>
                            <div className="review_form field_form">
                                <h5>Add a review</h5>
                                <form className="row mt-3">
                                    <div className="form-group col-12">
                                        <div className="star_rating">
                                            <span data-value="1"><i className="far fa-star"></i></span>
                                            <span data-value="2"><i className="far fa-star"></i></span> 
                                            <span data-value="3"><i className="far fa-star"></i></span>
                                            <span data-value="4"><i className="far fa-star"></i></span>
                                            <span data-value="5"><i className="far fa-star"></i></span>
                                        </div>
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea required="required" placeholder="Your review *" className="form-control" name="message" rows="4"></textarea>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input required="required" placeholder="Enter Name *" className="form-control" name="name" type="text"/>
                                     </div>
                                    <div className="form-group col-md-6">
                                        <input required="required" placeholder="Enter Email *" className="form-control" name="email" type="email"/>
                                    </div>
                                   
                                    <div className="form-group col-12">
                                        <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                      	</div>
                	</div>
                </div>
            </div>
        </div>
        <div className="row">
        	<div className="col-12">
            	<div className="small_divider"></div>
            	<div className="divider"></div>
                <div className="medium_divider"></div>
            </div>
        </div>
        <div className="row">
        	<div className="col-12">
            	<div className="heading_s1">
                	<h3>Releted Products</h3>
                </div>
            	<OwlCarousel className="releted_product_slider carousel_slider owl-carousel owl-theme" 
              margin={20} 
              responsive={{
                0:{items: 1},
                481:{items: 2},
                768:{items: 3},
                1199:{items: 4}}}>
                	<div className="item">
                        <div className="product">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                    <img src="images/product_img1.jpg" alt="product_img1"/>
                                </a>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
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
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#87554B"></span>
                                        <span data-color="#333333"></span>
                                        <span data-color="#DA323F"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                    <img src="images/product_img2.jpg" alt="product_img2"/>
                                </a>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><a href="shop-product-detail.html">Lether Gray Tuxedo</a></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
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
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#847764"></span>
                                        <span data-color="#0393B5"></span>
                                        <span data-color="#DA323F"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product">
                            <span className="pr_flash">New</span>
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                    <img src="images/product_img3.jpg" alt="product_img3"/>
                                </a>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><a href="shop-product-detail.html">woman full sliv dress</a></h6>
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
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#333333"></span>
                                        <span data-color="#7C502F"></span>
                                        <span data-color="#2F366C"></span>
                                        <span data-color="#874A3D"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                    <img src="images/product_img4.jpg" alt="product_img4"/>
                                </a>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                                <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
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
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#333333"></span>
                                        <span data-color="#A92534"></span>
                                        <span data-color="#B9C2DF"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                    <img src="images/product_img5.jpg" alt="product_img5"/>
                                </a>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
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
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#87554B"></span>
                                        <span data-color="#333333"></span>
                                        <span data-color="#5FB7D4"></span>
                                    </div>
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




    <ScriptTag type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/jquery-1.12.4.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/jquery-ui.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/popper.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/bootstrap/js/bootstrap.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/owlcarousel/js/owl.carousel.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/magnific-popup.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/waypoints.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/parallax.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/jquery.countdown.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/imagesloaded.pkgd.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/isotope.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/jquery.dd.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/slick.min.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/jquery.elevatezoom.js" />
    <ScriptTag type="text/javascript" src="https://bestwebcreator.com/shopwise/demo/assets/js/scripts.js" />






        </div>



      )}


    </div>
  );
}
