import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

export class CarouselCars extends Component {  
        render()  
        {      
          return (  
              <div>    
        <div class='container-fluid' >  
          <OwlCarousel items={4}
            margin={8}
            autoplay ={true}
            loop
            responsive= {{
                0:{
                  items:1
                },
                481:{
                    items:2
                  },
                778: {
                  items: 3
                  },
                1154:{
                  items:4
                  },
                1480:{
                  items:5
                  }}
              } >  
        <div className="contenedor"><img  className="img imghg imagen" src= {'assets/img/img1.jpg'}/>

        <div className="product_info">
            <h5 className="product_title mgt1">
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
        <div className="contenedor"><img  className="img imghg imagen" src= {'assets/img/img2.jpg'}/>
           <div className="product_info">
            <h5 className="product_title mgt1">
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
           <div className="contenedor"><img  className="img imghg imagen" src= {'assets/img/img3.jpg'}/>
           <div className="product_info">
            <h5 className="product_title mgt1">
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
           <div className="contenedor"><img  className="img imghg imagen" src= {'assets/img/img4.jpg'}/>
           <div className="product_info">
            <h5 className="product_title mgt1">
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
           <div className="contenedor"><img  className="img imghg imagen" src= {'assets/img/img5.jpg'}/>
           <div className="product_info">
            <h5 className="product_title mgt1">
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
           <div className="contenedor"><img  className="img imghg imagen" src= {'assets/img/img6.jpg'}/>
           <div className="product_info">
            <h5 className="product_title mgt1">
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
           <div className="contenedor"><img  className="img imghg imagen" src= {'assets/img/img7.jpg'}/>
           <div className="product_info">
            <h5 className="product_title mgt1">
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
           <div className="contenedor"><img  className="img imghg imagen" src= {'assets/img/img8.jpg'}/>
           <div className="product_info">
            <h5 className="product_title mgt1">
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
export default CarouselCars  