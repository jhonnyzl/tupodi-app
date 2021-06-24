import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import '../screens/css/animate.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import '../screens/bootstrap/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../screens/css/magnific-popup.css';
import '../screens/css/jquery-ui.css';
import '../screens/css/slick.css';
import '../screens/css/slick-theme.css';
import '../screens/css/style.css';
import '../screens/css/responsive.css';

export default function Product(props) {
  const { product } = props;
  return (
                      <div class="item" >
                        <div key={product._id} class="product">
                            <div class="product_img">
                              <Link to={`/product/${product._id}`}>
                                <img className="medium" src={product.image} alt={product.name} />
                              </Link>
                                <div class="product_action_box">
                                    <ul class="list_none pr_action_btn">
                                        <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i class="icon-heart"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="product_info">
                                <h6 class="product_title"><Link to={`/product/${product._id}`}>{product.name}</Link></h6>
                                <h7 class="product_title"><Link to={`/seller/${product.seller._id}`}>
                                  {product.seller.seller.name}
                                </Link></h7>
                                <div class="product_price">
                                    <span class="price">${product.price}</span>
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
                                    <Rating
                                        rating={product.rating}
                                        numReviews={product.numReviews}
                                    ></Rating>
                                </div>
                                <div class="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                            </div>
                        </div>
                      </div>
   
  );
}