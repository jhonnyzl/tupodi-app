import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';






class HomeVacio extends React.Component {

    
    render() {
        return (
            <div>
                {/* STATIC BANNER */}
{/* WRAPPER */}    {/* Preloader */}
<div className="wrapper preloader" id="site-home">
    {/* NAVIGATION AND SLIDER HOLDER */}
    <section className="site-holder" role="banner">

        {/* HEADER */}
        <header className="site-header">

            {/* STICKY HEADER */}
            <div className="sticky-header" id="sticky-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-3">

                            {/* LOGO */}
                            <div className="site-logo">
                                <Link to="index.html">
                                    <img src={'assets/images/logo.png'} alt="Logo"/>
                                    <span>Tupodi</span>
                                </Link>
                            </div>
                            {/* END LOGO */}

                        </div>
                        <div className="col-xs-4 col-sm-9">

                            {/* NAVIGATION */}
                            <nav className="site-nav" id="site-nav" role="navigation">
                                {/* MOBILE VIEW BUTTON */}
                                <div className="nav-mobile">
                                    <i className="fa fa-bars show"></i>
                                    <i className="fa fa-close hide"></i>
                                </div>
                                {/* LINKS */}
                                <ul className="nav-off-canvas">
                                    {/* ACTIVE ITEM */}
                                    <li className="active"><Link to="#site-home">Inicio</Link></li>
                                    <li><Link to="#amazing-features">Features</Link></li>
                                    <li><Link to="#site-quick-view">Screens</Link></li>
                                    <li><Link to="#site-download">Descargar</Link></li>
                                    <li><Link to="#site-team">Equipo</Link></li>
                                    <li><Link to="#site-packages">Precios</Link></li>
                                    <li><Link to="#">Sub Menu <i className="fa fa-angle-down"></i> </Link>

                                        {/* SUB MENU */}
                                        <ul className="site-sub-menu">
                                        	<li><Link to="#site-more-features">Some Seatures</Link></li>
                                            <li><Link to="#amazing-features">About App</Link></li>
                                            <li><Link to="#left-content-section">left Content</Link></li>
                                            <li><Link to="#right-content-section">Right Content</Link></li>
                                            <li><Link to="#how-it-works">How It Works</Link></li>
                                            <li><Link to="#site-accordion">Accordian</Link></li>
                                            <li><Link to="#site-testimonial">Testimonials</Link></li>
                                            <li><Link to="#site-subscribe">Subscribe</Link></li>
                                        </ul>

                                    </li>
                                    <li><Link to="#quick-support">Contact us</Link></li>
                                    
                                </ul>
                            </nav>
                            {/* END NAVIGATION */}

                        </div>
                    </div>
                </div>
            </div>


            
            
			<div className="static-banner">
            	<div className="star-bg">
                	<div id='stars'></div>
	                <div id='stars2'></div>
	                <div id='stars3'></div>
                </div>




                <div className="container">
                	<div className="static-content">
	                    


                    <div className="container">
            <div className="row">
                <div className="col-xs-12">

                    {/* H1 HEADING */}
                    <h1>Amazing Features</h1>

                    <div className="row">
                        <div className="col-xs-12 col-sm-4">

                            {/* FEATURE 1 */}
                            <div className="features move wow fadeInDown" data-wow-duration="1s">
                                {/* ICON */}
                                <figure><span className=""> <img src={'assets/images/feature1.png'} alt="feature"/> </span></figure>
                                {/* H5 HEADING */}
                                <h5>Free Support</h5>
                                {/* PARAGRAPH */}
                                <p>	Lorem Ipsum is simply dummy
									text the printing and typeseing industry 
									Lorem Ipsum has been standard.</p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-4">

                            {/* FEATURE 1 */}
                            <div className="features wow fadeInDown" data-wow-duration="2s">
                                {/* ICON */}
                                <figure><span className=""><img src={'assets/images/feature2.png'} alt="feature"/></span></figure>
                                {/* H5 HEADING */}
                                <h5>Quick Loading</h5>
                                {/* PARAGRAPH */}
                                <p>Lorem Ipsum is simply dummy
									text the printing and typeseing industry 
									Lorem Ipsum has been standard.</p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-4">

                            {/* FEATURE 1 */}
                            <div className="features move wow fadeInDown" data-wow-duration="3s">
                                {/* ICON */}
                                <figure><span className=""> <img src={'assets/images/feature3.png'} alt="feature"/></span></figure>
                                {/* H5 HEADING */}
                                <h5>Awesome Design</h5>
                                {/* PARAGRAPH */}
                                <p>Lorem Ipsum is simply dummy
									text the printing and typeseing industry 
									Lorem Ipsum has been standard.</p>
                            </div>

                        </div>
                        <div className="col-xs-12">

                            {/* Mobile PICTURE */}
                            <figure className="device wow fadeInUp" data-wow-duration="3s">
                                <img src={'assets/images/features-mobile.png'} alt="Device"/>
                            </figure>

                        </div>
                    </div>

                </div>
            </div>
        </div>






					</div>
				</div>



			</div>
            
            
            

        </header>
        {/* END HEADER */}

    </section>

 



















    
    
    

	
    
    

    

    

    

    
    
    

    

    

    
    
    
    


    

    {/* FOOTER */}
    <footer className="site-footer section-blue">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                	<h1> Download Smart Now</h1>
					{/* DOWNLOAD ICONS */}
				    <section className="site-download-icons">
                        <div className="align-center">
                
                            {/* BUTTON 1 */}
                            <Link to="#" className="app-download-icons wow fadeInDown" data-wow-duration="1s">
                                {/* FIGURE */}
                                <figure><i className="fa fa-mobile"></i></figure>
                                {/* h6 heading */}
                                <h6>Available on the</h6>
                                {/* h5 */}
                                <h5>iOS App Store</h5>
                            </Link>
                
                            {/* BUTTON 2 */}
                            <Link to="#" className="app-download-icons wow fadeInDown" data-wow-duration="2s">
                                {/* FIGURE */}
                                <figure><i className="fa fa-android"></i></figure>
                                {/* h6 heading */}
                                <h6>Available on the</h6>
                                {/* h5 */}
                                <h5>Google Store</h5>
                            </Link>
                
                            {/* BUTTON 3 */}
                            <Link to="#" className="app-download-icons wow fadeInDown" data-wow-duration="3s">
                                {/* FIGURE */}
                                <figure><i className="fa fa-windows adjust"></i></figure>
                                {/* h6 heading */}
                                <h6>Available on the</h6>
                                {/* h5 */}
                                <h5>Windows Store</h5>
                            </Link>
                
                        </div>
    				</section>
                    
                    {/* END LOGO */}

                    {/* SOCIAL ICONS */}
                    <div className="site-social-icons">
                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                        <Link to="#"><i className="fa fa-google-plus"></i></Link>
                        <Link to="#"><i className="fa fa-pinterest"></i></Link>
                        <Link to="#"><i className="fa fa-youtube"></i></Link>
                    </div>
                    {/* END SOCIAL ICONS */}

                    {/* COPYRIGHT */}
                    <div className="site-copyright">
                        <p>© Copyright 2016 Start. Designed by <Link to="https://graphicriver.net/user/kalanidhithemes" target="_blank">Kalanidhi Themes</Link></p>
                    </div>

                </div>
            </div>
        </div>
    </footer>

</div>
            </div>
        )
    }
}

export default HomeVacio;