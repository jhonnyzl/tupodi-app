import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
 
export class CarouselHome extends Component {  
        render()  
        {  
          return (  
            <div>        
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8}
          responsive= {{
            0:{
              items:1
              },
            768:{
                items:2
                },
            1153:{
                items:3
                },
            1480:{
              items:4
              }}
          } >  
           <div className="contenedor"><img className="img imagen" src= {'assets/img/casa1.jpeg'}/>
           <div className="product_info mrgtpi">
            <h5 className="product_title">
                <a href="shop-product-detail.html">
                    oppo Reno3 Pro
                </a>
            </h5>
                <div className="product_price">
                    <span className="price">$68.00</span>
                        <del>$99.00</del>
                            <div className="on_sale">
                                <span>20% Off</span>
                            </div>
                </div>
                <div className="rating_wrap">
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star laststar"/>
                    <text className="colorstock">
                    (25)
                    </text>         
                </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
        </div>
           </div>  
           <div className="contenedor"><img className="img imagen" src= {'assets/img/casa2.jpg'}/>
           <div className="product_info mrgtpi">
            <h5 className="product_title">
                <a href="shop-product-detail.html">
                    oppo Reno3 Pro
                </a>
            </h5>
                <div className="product_price">
                    <span className="price">$68.00</span>
                        <del>$99.00</del>
                            <div className="on_sale">
                                <span>20% Off</span>
                            </div>
                </div>
                <div className="rating_wrap">
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star laststar"/>
                    <text className="colorstock">
                    (25)
                    </text>         
                </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
        </div>
           </div>  
           <div className="contenedor"><img className="img imagen" src= {'assets/img/casa3.jpeg'}/>
           <div className="product_info mrgtpi">
            <h5 className="product_title">
                <a href="shop-product-detail.html">
                    oppo Reno3 Pro
                </a>
            </h5>
                <div className="product_price">
                    <span className="price">$68.00</span>
                        <del>$99.00</del>
                            <div className="on_sale">
                                <span>20% Off</span>
                            </div>
                </div>
                <div className="rating_wrap">
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star laststar"/>
                    <text className="colorstock">
                    (25)
                    </text>         
                </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
        </div>
           </div>  
           <div className="contenedor"><img className="img imagen" src= {'assets/img/casa4.jpg'}/>
           <div className="product_info mrgtpi">
            <h5 className="product_title">
                <a href="shop-product-detail.html">
                    oppo Reno3 Pro
                </a>
            </h5>
                <div className="product_price">
                    <span className="price">$68.00</span>
                        <del>$99.00</del>
                            <div className="on_sale">
                                <span>20% Off</span>
                            </div>
                </div>
                <div className="rating_wrap">
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star laststar"/>
                    <text className="colorstock">
                    (25)
                    </text>         
                </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
        </div>
           </div>  
           <div className="contenedor"><img className="img imagen" src= {'assets/img/casa5.jpg'}/>
           <div className="product_info mrgtpi">
            <h5 className="product_title">
                <a href="shop-product-detail.html">
                    oppo Reno3 Pro
                </a>
            </h5>
                <div className="product_price">
                    <span className="price">$68.00</span>
                        <del>$99.00</del>
                            <div className="on_sale">
                                <span>20% Off</span>
                            </div>
                </div>
                <div className="rating_wrap">
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star laststar"/>
                    <text className="colorstock">
                    (25)
                    </text>         
                </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
        </div>
           </div>  
           <div className="contenedor"><img className="img imagen" src= {'assets/img/casa6.jpg'}/>
           <div className="product_info mrgtpi">
            <h5 className="product_title">
                <a href="shop-product-detail.html">
                    oppo Reno3 Pro
                </a>
            </h5>
                <div className="product_price">
                    <span className="price">$68.00</span>
                        <del>$99.00</del>
                            <div className="on_sale">
                                <span>20% Off</span>
                            </div>
                </div>
                <div className="rating_wrap">
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star laststar"/>
                    <text className="colorstock">
                    (25)
                    </text>         
                </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
        </div>
           </div>  
           <div className="contenedor"><img className="img imagen" src= {'assets/img/casa7.jpg'}/>
           <div className="product_info mrgtpi">
            <h5 className="product_title">
                <a href="shop-product-detail.html">
                    oppo Reno3 Pro
                </a>
            </h5>
                <div className="product_price">
                    <span className="price">$68.00</span>
                        <del>$99.00</del>
                            <div className="on_sale">
                                <span>20% Off</span>
                            </div>
                </div>
                <div className="rating_wrap">
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star laststar"/>
                    <text className="colorstock">
                    (25)
                    </text>         
                </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
        </div>
           </div>
           <div className="contenedor"><img className="img imagen" src= {'assets/img/casa8.jpg'}/>
           <div className="product_info mrgtpi">
            <h5 className="product_title">
                <a href="shop-product-detail.html">
                    oppo Reno3 Pro
                </a>
            </h5>
                <div className="product_price">
                    <span className="price">$68.00</span>
                        <del>$99.00</del>
                            <div className="on_sale">
                                <span>20% Off</span>
                            </div>
                </div>
                <div className="rating_wrap">
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star mrstar"/>
                    <span className="fa fa-star laststar"/>
                    <text className="colorstock">
                    (25)
                    </text>         
                </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
        </div>
           </div>  
      </OwlCarousel>  
      </div>  
      </div>  
          )  
        }  
      }  
export default CarouselHome  
