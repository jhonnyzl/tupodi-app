import React, { Fragment, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel'; 



export class Carousel1 extends Component {  
    render()  
    {  
      return (
            <div>      
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
            </div>  
          )  
        }  
      }  
export default Carousel1