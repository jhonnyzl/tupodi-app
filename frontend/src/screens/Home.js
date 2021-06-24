import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';






class Home extends React.Component {

    
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
	                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            {/* Caption */}
                            <div className="banner-caption">
    
                                {/* H1 Heading */}
                                <h1>TUPODI</h1>
                                
                                {/* H2 Heading */}
                                <h2>Best Showcash for your App</h2>
    
                                {/* Paragraph */}
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    indus orem Ipsum has been the industry's standard dummy
                                    ever since the when an own printer took a galley
                                </p>
    
                                {/* Buttons */}
                                <Link to="#" className="slide-button slide-button-active">Descargar</Link>
    
                                {/* Button */}
                                <Link to="#" className="slide-button">Leer más</Link>
    
                        </div>
                    </div>
    	                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="static-banner-image">
                                
                            </div>
                            
                            <div className="static-banner-image" style={{display: 'none'}}>
                                <img src={'assets/images/header-slide-1.png'}/>
                            </div>
                        </div>
					</div>
				</div>
			</div>
            
            {/* START SLIDER - display none */}
            <div id="header-slider" className="header-slider color-gredient" style={{display: 'none'}}>
                <ul className="seq-canvas">

                    {/* SLIDE 1 */}
                    <li className="step1 slides">

                        {/* MAIN IMAGE */}
                        <div className="bg-img tpbi"></div>

                        {/* Caption */}
                        <div className="slide-caption">

                            {/* H1 Heading */}
                            <h1>Smart</h1>

                            {/* H2 Heading */}
                            <h2>Ready to showcase your app</h2>

                            {/* Paragraph */}
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                indus orem Ipsum has been the industry's standard dummy text
                                ever since the when an own printer took a galley
                            </p>

                            {/* Buttons */}
                            <Link to="#" className="slide-button slide-button-active">Download</Link>

                            {/* Button */}
                            <Link to="#" className="slide-button">Learn more</Link>

                        </div>

                    </li>

                    {/* SLIDE 2 */}
                    <li className="step2 slides">

                        {/* MAIN IMAGE */}
                        <div className="bg-img tpbi2"></div>

                        {/* Caption */}
                        <div className="slide-caption">

                            {/* H1 Heading */}
                            <h1>Smart</h1>

                            {/* H2 Heading */}
                            <h2>Ready to showcase your app</h2>

                            {/* Paragraph */}
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                indus orem Ipsum has been the industry's standard dummy text
                                ever since the when an own printer took a galley
                            </p>


                            {/* Buttons */}
                            <Link to="#" className="slide-button slide-button-active">Download </Link>

                            {/* Button */}
                            <Link to="#" className="slide-button">Learn more</Link>

                        </div>

                    </li>

                    {/* SLIDE 3 */}
                    <li className="step3 slides">

                        {/* MAIN IMAGE */}
                        <div className="bg-img tpbi"></div>

                        {/* Caption */}
                        <div className="slide-caption">

                            {/* H1 Heading */}
                            <h1>Smart</h1>

                            {/* H2 Heading */}
                            <h2>Ready to showcase your app</h2>

                            {/* Paragraph */}
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                indus orem Ipsum has been the industry's standard dummy text
                                ever since the when an own printer took a galley
                            </p>


                            {/* Buttons */}
                            <Link to="#" className="slide-button slide-button-active">Download </Link>

                            {/* Button */}
                            <Link to="#" className="slide-button">Learn more</Link>

                        </div>

                    </li>

                    {/* SLIDE 4 */}
                    <li className="step4 slides">

                        {/* MAIN IMAGE */}
                        <div className="bg-img tpbi2"></div>

                        {/* Caption */}
                        <div className="slide-caption">

                            {/* H1 Heading */}
                            <h1>Smart</h1>

                            {/* H2 Heading */}
                            <h2>Ready to showcase your app</h2>

                            {/* Paragraph */}
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting indus orem 
                                Ipsum has been the industry's standard dummy text ever since 
                                the when an own printer took a galley
                            </p>

                            {/* Buttons */}
                            <Link to="#" className="slide-button slide-button-active">Download now</Link>

                            {/* Button */}
                            <Link to="#" className="slide-button">Learn more</Link>

                        </div>

                    </li>

                </ul>

                {/* PAGINATION */}
                <ul className="seq-pagination">
                    <li>01</li>
                    <li>02</li>
                    <li>03</li>
                    <li>04</li>
                </ul>

                {/* NAVIGATION */}
                <button type="button" className="seq-next"><span className="icon-play"></span></button>
                <button type="button" className="seq-prev"><span className="icon-play-flip"></span></button>

            </div>
            
            

        </header>
        {/* END HEADER */}

    </section>

    {/* STORE ICONS */}
    <section className="site-store-icons" style={{display: 'none'}}>
        <div className="align-center">

            {/* BUTTON 1 */}
            <Link to="#">
                {/* FIGURE */}
                <figure><i className="fa fa-mobile"></i></figure>
                {/* h6 heading */}
                <h6>Available on the</h6>
                {/* h5 */}
                <h5>iOS App Store</h5>
            </Link>

            {/* BUTTON 2 */}
            <Link to="#">
                {/* FIGURE */}
                <figure><img src="images/store-google-icon.png" alt="store icon"/></figure>
                {/* h6 heading */}
                <h6>Available on the</h6>
                {/* h5 */}
                <h5>Google Store</h5>
            </Link>

            {/* BUTTON 3 */}
            <Link to="#">
                {/* FIGURE */}
                <figure><i className="fa fa-windows adjust"></i></figure>
                {/* h6 heading */}
                <h6>Available on the</h6>
                {/* h5 */}
                <h5>Windows Store</h5>
            </Link>

        </div>
    </section>

    {/* AMAZING FEATURES */}
    <section id="amazing-features" className="site-amazing-features section-white">
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
    </section>
    
    {/* ABOUT APP */}
    <section id="about-smart" className="site-about-app left-heading section-grey">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6">
					
                    <div className="about-half-colom-section">
    	            	{/* H1 HEADING */}
	                    <h1>About smart</h1>    
                        <div className="about-half-colom-section-content">
                        	<p>
                           Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the  dummy text of the printing anprinting <strong className="bold-color">Amazing Smart app landing page</strong> Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the industry's standard dndustry's standard dumummy text ever since the when an Lorem Ipsum.<br>
</br><br></br>


Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text mmy text of tof the  dummy text of the printing anprinting and typeseing.

                            </p>
                            
                            <section className="site-download-icons about-icon">
                        
                                    {/* BUTTON 1 */}
                                    <Link to="#" className="app-download-icons">
                                        {/* FIGURE */}
                                        <figure><i className="fa fa-mobile"></i></figure>
                                        {/* h6 heading */}
                                        <h6>Available on the</h6>
                                        {/* h5 */}
                                        <h5>iOS App Store</h5>
                                    </Link>
                        
                                    {/* BUTTON 2 */}
                                    <Link to="#" className="app-download-icons">
                                        {/* FIGURE */}
                                        <figure><i className="fa fa-android"></i></figure>
                                        {/* h6 heading */}
                                        <h6>Available on the</h6>
                                        {/* h5 */}
                                        <h5>Google Store</h5>
                                    </Link>
                        
    						</section>
                            
                        </div>
                    </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                	<div className="about-half-colom-section-image wow fadeInRight" data-wow-duration="2s">
						<img src={'assets/images/about.png'} alt="aboutimage"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

	{/* MORE FEATURES */}
    <div className="site-more-features section-blue color-gredient" id="site-more-features">
        <div className="container">
            <div className="row">

                <div className="col-sm-12">
                    {/* heading */}
                    <h1>More Features</h1>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
                    <div className="heading-text">
                    	<p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting indus
 orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.
                        </p>
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
                    </div>
                </div>

                {/* clearfix */}
                <div className="clearfix"></div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-md-push-4">

                    {/* mobile image */}
                    <figure className="featured-img wow fadeInDown" data-wow-duration="2s">
                        <img src={'assets/images/feature-mobile.png'} alt="Image"/>
                    </figure>
                    {/* end */}

                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-md-pull-4">

                    {/* feature 1 */}
                    <div className="feature align-right">
                        <h5>Application records</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                        <figure>
                            <span className="icon-micro"></span>
                        </figure>
                    </div>

                    {/* feature 2 */}
                    <div className="feature align-right move">
                        <h5>Best for business</h5>
                        <p>Lorem Ipsum is simply dummyof the printing and typeseing</p>
                        <figure>
                            <span className="icon-portfolio"></span>
                        </figure>
                    </div>

                    {/* feature 3 */}
                    <div className="feature align-right">
                        <h5>Full free chat</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                        <figure>
                            <span className="icon-chat"></span>
                        </figure>
                    </div>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-4">

                    {/* feature 1 */}
                    <div className="feature align-left">
                        <h5>Retina ready</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                        <figure>
                            <span className="icon-albums"></span>
                        </figure>
                    </div>

                    {/* feature 2 */}
                    <div className="feature align-left move">
                        <h5>Secure extra</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and.</p>
                        <figure>
                            <span className="icon-lock"></span>
                        </figure>
                    </div>

                    {/* feature 3 */}
                    <div className="feature align-left">
                        <h5>Night vision</h5>
                        <p>Lorem Ipsum is simply dummy of the printing and industry.</p>
                        <figure>
                            <span className="icon-moon"></span>
                        </figure>
                    </div>

                </div>

            </div>

        </div>
    </div>
    
    {/* LEFT CONTENT & RIGHT IMAGE */}
    <section id="left-content-section" className="site-amazing-features left-heading two-colom-section">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6">
					
                    <div className="half-colom-left-section">
    	            	{/* H1 HEADING */}
                        <div className="left-heading-icon wow fadeInLeft" data-wow-duration="2s" > <img src={'assets/images/desing-icon.png'} alt="designicon"/>
                        </div>
	                    <h1>Beautiful, unique Vibrant & Modern Design </h1>    
                        <div className="two-colom-content">
                        	<p>
                            Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the  dummy text of the printing anprinting <strong className="highlited-text">Amazing Smart app landing page</strong> Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the indushe industry's stry's standard dummy text ever since the when an Lorem Ipsum.
                            </p>
                        </div>
                        
                    </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                	<div className="half-colom-right-section wow fadeInDown" data-wow-duration="2s">
						<img src={'assets/images/right-image1.png'} alt="rightimage"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* LEFT IMAGE & RIGHT  CONTENT */}
    <section id="right-content-section" className="site-amazing-features left-heading two-colom-section">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-push-6">
                    <div className="half-colom-left-section half-colom-padding">
    	            	{/* H1 HEADING */}
                        <div className="left-heading-icon wow fadeInRight" data-wow-duration="2s"> <img src={'assets/images/perfomance-icon.png'} alt="perfomanceicon"/>
                        </div>
	                    <h1>Beautiful, unique Vibrant & Modern Design </h1>    
                        <div className="two-colom-content">
                        	<p>
                            Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the  dummy text of the printing anprinting <strong className="highlited-text">Amazing Smart app landing page</strong> Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the indushe industry's stry's standard dummy text ever since the when an Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-pull-6 ">
                	<div className="half-colom-right-section wow fadeInLeft" data-wow-duration="2s">
						<img src={'assets/images/left-image1.png'} alt="leftimage"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* HOW IT WORKS */}
    <section className="site-how-it-works section-grey" id="how-it-works">
        <div className="container-fluid wide">
            <div className="row">
                <div className="col-xs-12">

                    {/* H1 HEADING */}
                    <h1>How it Works?</h1>

                    {/* START SLIDER */}

                    {/* Slider main container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-11 ">
                                <div className="swiper-container" id="how-it-works-slider">
                                    {/* Additional required wrapper */}
                                    <ul className="swiper-wrapper">
                                        {/* Slides */}
                                        {/* SLIDE 1 */}
                                        <li className="swiper-slide">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* H5 HEADING */}
                                                    <h3>First tab title - How to install ?</h3>
                                                    {/* PARAGRAPH */}
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typese
														ing industry Lorem Ipsum has been the industry's standard
                                                        dummy text Lorem is simply dummy </p>

                                                    {/* BOX */}
                                                    <div className="section first">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-config"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Confing your mobile</h4>
                                                        {/* PARAGRAPH */}
                                                        <p> Lorem Ipsum is simply dummy text of the printing and typing
                                                            indus try Lorem Ipsum has been the indus. </p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-refresh"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Refresh setup</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Simply dummy text of the printing and typing indus try Lorem
                                                            Ipsum has been the indus try's standard.</p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-comment"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Chat with your love</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Ipsum is simply dummy text of the printing and typing indus
                                                            try Lorem Ipsum has been the indus standard.</p>
                                                    </div>

                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* DEVICE */}
                                                    <figure className="device">
                                                        <img src={'assets/images/how-it-works-device.png'} alt="Device"/>
                                                    </figure>

                                                </div>
                                            </div>
                                        </li>

                                        {/* SLIDE 2 */}
                                        <li className="swiper-slide">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* H5 HEADING */}
                                                    <h3>First tab title - How to install ?</h3>
                                                    {/* PARAGRAPH */}
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typese
														ing industry Lorem Ipsum has been the industry's standard
                                                        dummy text Lorem is simply dummy </p>

                                                    {/* BOX */}
                                                    <div className="section first">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-config"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Confing your mobile</h4>
                                                        {/* PARAGRAPH */}
                                                        <p> Lorem Ipsum is simply dummy text of the printing and typing
                                                            indus try Lorem Ipsum has been the indus. </p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-refresh"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Refresh setup</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Simply dummy text of the printing and typing indus try Lorem
                                                            Ipsum has been the indus try's standard.</p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-comment"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Chat with your love</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Ipsum is simply dummy text of the printing and typing indus
                                                            try Lorem Ipsum has been the indus standard.</p>
                                                    </div>

                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* DEVICE */}
                                                    <figure className="device">
                                                        <img src={'assets/images/how-it-works-screen2.png'} alt="Device"/>
                                                    </figure>

                                                </div>
                                            </div>
                                        </li>

                                        {/* SLIDE 3 */}
                                        <li className="swiper-slide">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* H5 HEADING */}
                                                    <h3>First tab title - How to install ?</h3>
                                                    {/* PARAGRAPH */}
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typese
														ing industry Lorem Ipsum has been the industry's standard
                                                        dummy text Lorem is simply dummy </p>

                                                    {/* BOX */}
                                                    <div className="section first">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-config"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Confing your mobile</h4>
                                                        {/* PARAGRAPH */}
                                                        <p> Lorem Ipsum is simply dummy text of the printing and typing
                                                            indus try Lorem Ipsum has been the indus. </p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-refresh"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Refresh setup</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Simply dummy text of the printing and typing indus try Lorem
                                                            Ipsum has been the indus try's standard.</p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-comment"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Chat with your love</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Ipsum is simply dummy text of the printing and typing indus
                                                            try Lorem Ipsum has been the indus standard.</p>
                                                    </div>

                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* DEVICE */}
                                                    <figure className="device">
                                                        <img src={'assets/images/how-it-works-device.png'} alt="Device"/>
                                                    </figure>

                                                </div>
                                            </div>
                                        </li>

                                        {/* SLIDE 4 */}
                                        <li className="swiper-slide">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* H5 HEADING */}
                                                    <h3>First tab title - How to install ?</h3>
                                                    {/* PARAGRAPH */}
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typese
														ing industry Lorem Ipsum has been the industry's standard
                                                        dummy text Lorem is simply dummy </p>

                                                    {/* BOX */}
                                                    <div className="section first">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-config"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Confing your mobile</h4>
                                                        {/* PARAGRAPH */}
                                                        <p> Lorem Ipsum is simply dummy text of the printing and typing
                                                            indus try Lorem Ipsum has been the indus. </p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-refresh"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Refresh setup</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Simply dummy text of the printing and typing indus try Lorem
                                                            Ipsum has been the indus try's standard.</p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-comment"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Chat with your love</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Ipsum is simply dummy text of the printing and typing indus
                                                            try Lorem Ipsum has been the indus standard.</p>
                                                    </div>

                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* DEVICE */}
                                                    <figure className="device">
                                                        <img src={'assets/images/how-it-works-screen2.png'} alt="Device"/>
                                                    </figure>

                                                </div>
                                            </div>
                                        </li>

                                        {/* SLIDE 5 */}
                                        <li className="swiper-slide">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* H5 HEADING */}
                                                    <h3>First tab title - How to install ?</h3>
                                                    {/* PARAGRAPH */}
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typese
														ing industry Lorem Ipsum has been the industry's standard
                                                        dummy text Lorem is simply dummy </p>

                                                    {/* BOX */}
                                                    <div className="section first">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-config"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Confing your mobile</h4>
                                                        {/* PARAGRAPH */}
                                                        <p> Lorem Ipsum is simply dummy text of the printing and typing
                                                            indus try Lorem Ipsum has been the indus. </p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-refresh"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Refresh setup</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Simply dummy text of the printing and typing indus try Lorem
                                                            Ipsum has been the indus try's standard.</p>
                                                    </div>

                                                    {/* BOX */}
                                                    <div className="section">
                                                        {/* FIGURE */}
                                                        <figure><span className="icon-comment"></span></figure>
                                                        {/* H4 HEADING */}
                                                        <h4>Chat with your love</h4>
                                                        {/* PARAGRAPH */}
                                                        <p>Ipsum is simply dummy text of the printing and typing indus
                                                            try Lorem Ipsum has been the indus standard.</p>
                                                    </div>

                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-6">

                                                    {/* DEVICE */}
                                                    <figure className="device">
                                                        <img src={'assets/images/how-it-works-device.png'} alt="Device"/>
                                                    </figure>

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If we need navigation buttons */}
                    <div id="how-it-works-prev" className="swiper-button-prev"><i className="fa fa-angle-up hidden-xs"></i><span className="icon-play-flip visible-xs"></span></div>
                    <div id="how-it-works-next" className="swiper-button-next"><i className="fa fa-angle-down hidden-xs"></i><span className="icon-play visible-xs"></span></div>

                    {/* If we need pagination */}
                    <div id="how-it-works-paging" className="swiper-pagination" data-icons='[
                         "fa fa-mobile",
                         "icon-config",
                         "icon-help",
                         "fa fa-shopping-basket",
                         "icon-unlock",
                         "icon-shopbag"
                         ]'></div>

                </div>
            </div>
        </div>
    </section>

    {/* DOWNLOAD */}
    <section id="site-download" className="site-download section-blue">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">

                    {/* H1 HEADING */}
                    <h1>Smart Download</h1>
                     {/* DOWNLOAD ICONS */}
				    <section className="site-download-icons">
                        <div className="align-center">
                
                            {/* BUTTON 1 */}
                            <Link to="#" className="app-download-icons wow fadeInLeft" data-wow-duration="1s">
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
                            <Link to="#" className="app-download-icons wow fadeInRight" data-wow-duration="3s">
                                {/* FIGURE */}
                                <figure><i className="fa fa-windows adjust"></i></figure>
                                {/* h6 heading */}
                                <h6>Available on the</h6>
                                {/* h5 */}
                                <h5>Windows Store</h5>
                            </Link>
                
                        </div>
    				</section>

                </div>
            </div>
        </div>
    </section>

    {/* QUICK VIEW */}
    <section className="site-quick-view section-white" id="site-quick-view">
        <div className="container-fluid wide">
            <div className="row">
                <div className="col-sm-12">

                    {/* heading */}
                    <h1>Quick View</h1>

                    {/* Slider main container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="swiper-container" id="quick-view-slider">

                                    {/* Additional required wrapper */}
                                    <ul className="swiper-wrapper">

                                        {/* slide 1 */}
                                        <li className="swiper-slide">
                                            {/* box URL */}
                                            <Link to="#" className="box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/quick-view-1.png'} alt="Image"/>
                                                </figure>
                                            </Link>
                                        </li>

                                        {/* slide 2 */}
                                        <li className="swiper-slide">
                                            {/* box URL */}
                                            <Link to="#" className="box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/quick-view-2.png'} alt="Image"/>
                                                </figure>
                                            </Link>
                                        </li>

                                        {/* slide 3 */}
                                        <li className="swiper-slide">
                                            {/* box URL */}
                                            <Link to="#" className="box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/quick-view-3.png'} alt="Image"/>
                                                </figure>
                                            </Link>
                                        </li>

                                        {/* slide 4 */}
                                        <li className="swiper-slide">
                                            {/* box URL */}
                                            <Link to="#" className="box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/quick-view-4.png'} alt="Image"/>
                                                </figure>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If we need navigation buttons */}
                    <div id="quick-view-prev" className="swiper-button-prev"><span className="icon-play-flip"></span></div>
                    <div id="quick-view-next" className="swiper-button-next"><span className="icon-play"></span></div>

                    {/* If we need pagination */}
                    <div id="quick-view-paging" className="swiper-pagination visible-xs"></div>

                </div>
            </div>
        </div>
    </section>

    {/* ACCORDION */}
    <section id="site-accordion" className="site-accordion section-grey left-heading ">
        <div className="container">
            <div className="row">
				<div className="col-xs-12 col-md-6">
                	<div className="accordian-main">
                        <h1> FAQs</h1>
                        {/* accordion */}
                        <div className="panel-group" id="accordion">
    
                            {/* section 1 */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <Link data-toggle="collapse" data-parent="#accordion" to="#collapse1" className="collapsed">
                                            What is the Start App ?
                                            <span>icon</span>
                                        </Link>
                                    </h4>
                                </div>
                                <div id="collapse1" className="panel-collapse collapse">
                                    <div className="panel-body-container">
                                        <div className="panel-body">
                                            Lorem Ipsum is simply dummy text of the printing and typeseing
                                            industry Lorem Ipsum has been the industry's standard dummy
                                            text ever since the when an Lorem Ipsum is simply.
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            {/* section 2 */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title active">
                                        <Link data-toggle="collapse" data-parent="#accordion" to="#collapse2">
                                            Where can i download this app ?
                                            <span>icon</span>
                                        </Link>
                                    </h4>
                                </div>
                                <div id="collapse2" className="panel-collapse collapse in">
                                    <div className="panel-body-container">
                                        <div className="panel-body">
                                            Lorem Ipsum is simply dummy text of the printing and typeseing
                                            industry Lorem Ipsum has been the industry's standard dummy
                                            text ever since the when an Lorem Ipsum is simply.
                                            Lorem Ipsum is simply dummy text of the printing and typeseing
                                            industry Lorem Ipsum has been the industry's standard dummy
                                            text ever since the when an Lorem Ipsum is simply.
                                            Lorem Ipsum is simply dummy text of the printing and typeseing
                                            industry Lorem Ipsum has been the industry's standard dummy
                                            text ever since the when an Lorem Ipsum is simply.
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            {/* section 3 */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <Link data-toggle="collapse" data-parent="#accordion" to="#collapse3" className="collapsed">
                                            How to install this app ?
                                            <span>icon</span>
                                        </Link>
                                    </h4>
                                </div>
                                <div id="collapse3" className="panel-collapse collapse">
                                    <div className="panel-body-container">
                                        <div className="panel-body">
                                            Lorem Ipsum is simply dummy text of the printing and typeseing
                                            industry Lorem Ipsum has been the industry's standard dummy
                                            text ever since the when an Lorem Ipsum is simply.
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            {/* section 4 */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <Link data-toggle="collapse" data-parent="#accordion" to="#collapse4" className="collapsed">
                                            Is this app useful for business purpose ?
                                            <span>icon</span>
                                        </Link>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse">
                                    <div className="panel-body-container">
                                        <div className="panel-body">
                                            Lorem Ipsum is simply dummy text of the printing and typeseing
                                            industry Lorem Ipsum has been the industry's standard dummy
                                            text ever since the when an Lorem Ipsum is simply.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* section 5 */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <Link data-toggle="collapse" data-parent="#accordion" to="#collapse5" className="collapsed">
                                            Is this app useful for business purpose ?
                                            <span>icon</span>
                                        </Link>
                                    </h4>
                                </div>
                                <div id="collapse5" className="panel-collapse collapse">
                                    <div className="panel-body-container">
                                        <div className="panel-body">
                                            Lorem Ipsum is simply dummy text of the printing and typeseing
                                            industry Lorem Ipsum has been the industry's standard dummy
                                            text ever since the when an Lorem Ipsum is simply.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        {/* end */}
					</div>

                </div>
                <div className="col-xs-12 col-md-6">

                    {/* mobile image */}
                    <figure className="accordion-img wow fadeIn" data-wow-duration="3s">
                        <img src={'assets/images/accordion-image.png'} alt="Image"/>
                    </figure>
                    {/* end */}

                </div>
            </div>
        </div>
    </section>

    {/* TEAM */}
    <section className="site-team section-white" id="site-team">
        <div className="container-fluid wide">
            <div className="row">
                <div className="col-sm-12">

                    {/* heading */}
                    <h1>Innovative Team</h1>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    	<div className="main-heading-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and
							typeseing industry Lorem Ipsum has been the industry's standard
							dummy text Lorem is simply dummy text of the printing and
                        </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    </div>

                    {/* Slider main container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="swiper-container" id="team-slider">

                                    {/* Additional required wrapper */}
                                    <ul className="swiper-wrapper">

                                        {/* slide 1 */}
                                        <li className="swiper-slide">
                                            {/* box */}
                                            <div className="site-box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/team-1.png'} alt="User"/>
                                                </figure>
                                                {/* heading */}
                                                <h5>Jhon Due Stive</h5>
                                                {/* description */}
                                                <h6>Founder & CEO</h6>
                                                {/* paragraph */}
                                                <p>Lorem Ipsum is simply dummy 
													text of the printing and typeseing in
													dustry Lorem Ipsum</p>
                                                {/* social icons */}
                                                <div className="site-social-icons">
                                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                                </div>
                                            </div>
                                        </li>

                                        {/* slide 2 */}
                                        <li className="swiper-slide">
                                            {/* box */}
                                            <div className="site-box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/team-2.png'} alt="User"/>
                                                </figure>
                                                {/* heading */}
                                                <h5>Mark Denial</h5>
                                                {/* description */}
                                                <h6>Chief Developer</h6>
                                                {/* paragraph */}
                                                <p>Lorem Ipsum is simply dummy 
													text of the printing and typeseing in
													dustry Lorem Ipsum</p>
                                                {/* social icons */}
                                                <div className="site-social-icons">
                                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                                </div>
                                            </div>
                                        </li>

                                        {/* slide 3 */}
                                        <li className="swiper-slide">
                                            {/* box */}
                                            <div className="site-box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/team-3.png'} alt="User"/>
                                                </figure>
                                                {/* heading */}
                                                <h5>Worner Smith</h5>
                                                {/* description */}
                                                <h6>UI Designer</h6>
                                                {/* paragraph */}
                                                <p>Lorem Ipsum is simply dummy 
													text of the printing and typeseing in
													dustry Lorem Ipsum</p>
                                                {/* social icons */}
                                                <div className="site-social-icons">
                                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If we need navigation buttons */}
                    <div id="team-prev" className="swiper-button-prev hidden-lg"><span className="icon-play-flip"></span></div>
                    <div id="team-next" className="swiper-button-next hidden-lg"><span className="icon-play"></span></div>

                    {/* If we need pagination */}
                    <div id="team-paging" className="swiper-pagination visible-xs"></div>

                </div>
            </div>
        </div>
    </section>
    
    {/* STATISTIC */}
    <section className="site-statistic section-white" id="site-statistic">
        <div className="container">
            <div className="row">

                <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0">
                    {/* number */}
                    <div className="site-number">
                        {/* icon */}
                        <div className="stat-icon"> <img src={'assets/images/cloud.png'} alt="cloud"/></div>
                        {/* h5 heading */}
                        <h5 className="counter-count">200 <span>K</span></h5>
                        {/* paragraph */}
                        <p>App Download</p>
                    </div>
                    {/* end */}
                </div>
                <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0">
                    {/* number */}
                    <div className="site-number">
                        {/* icon */}
                        <div className="stat-icon"> <img src={'assets/images/thumbsup.png'} alt="thumbsup"/></div>
                        {/* h5 heading */}
                        <h5 className="counter-count">50 <span>K</span></h5>
                        {/* paragraph */}
                        <p>Free Download</p>
                    </div>
                    {/* end */}
                </div>
                <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0">
                    {/* number */}
                    <div className="site-number">
                        {/* icon */}
                        <div className="stat-icon"> <img src={'assets/images/users.png'} alt="users"/></div>
                        {/* h5 heading */}
                        <h5 className="counter-count">95 <span>%</span></h5>
                        {/* paragraph */}
                        <p>Return Customers</p>
                    </div>
                    {/* end */}
                </div>
                <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0">
                    {/* number */}
                    <div className="site-number">
                        {/* icon */}
                        <div className="stat-icon"> <img src={'assets/images/star.png'} alt="star"/></div>
                        {/* h5 heading */}
                        <h5 className="counter-count">10 <span>+</span></h5>
                        {/* paragraph */}
                        <p>Best Awards</p>
                    </div>
                    {/* end */}
                </div>

            </div>
        </div>
    </section>

    {/* TESTIMONIAL */}
    <section className="site-testimonial section-grey" id="site-testimonial">
        <div className="container-fluid wide">
            <div className="row">
                <div className="col-sm-12">
                	{/* H1 HEADING */}
                    <h1>Trusted by 1000+ clients</h1>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    	<div className="main-heading-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and
							typeseing industry Lorem Ipsum has been the industry's standard
							dummy text Lorem is simply dummy text of the printing and
                        </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    </div>

                    <div className="clearfix"> </div>
                    {/* Slider main container */}
                    <div className="container">
                        <div className="row">
                        	<div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="swiper-container" id="testimonial-slider">

                                    {/* Additional required wrapper */}
                                    <ul className="swiper-wrapper">

                                        {/* slide 1 */}
                                        <li className="swiper-slide">
                                        	<div className="swiper-slide-box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/testimonial-user.png'} alt="User"/>
                                                </figure>
                                                {/* user name */}
                                                <h5>Mr. Jhon Due</h5>
                                                <span className="testimonial-degignation">Founder at Smart Technologies</span>
    
                                                {/* paragraph */}
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typeseing industry Lorem Ipsum has been the industry 
                                                    standard dummy text Lorem is simply.
                                                </p>
    
											</div>
                                            <div className="swiper-slide-back-box">
                                            </div>
                                        </li>
                                        {/* slide 2 */}
                                        <li className="swiper-slide">
                                        	<div className="swiper-slide-box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/testimonial-user2.png'} alt="User"/>
                                                </figure>
                                                {/* user name */}
                                                <h5>Devil Shohe</h5>
                                                <span className="testimonial-degignation">Founder at Smart Technologies</span>
    
                                                {/* paragraph */}
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typeseing industry Lorem Ipsum has been the industry 
                                                    standard dummy text Lorem is simply.
                                                </p>
    
                                                
											</div>
                                            <div className="swiper-slide-back-box">
                                            </div>
                                        </li>
                                        {/* slide 3 */}
                                        <li className="swiper-slide">
                                        	<div className="swiper-slide-box">
                                                {/* image */}
                                                <figure>
                                                    <img src={'assets/images/testimonial-user.png'} alt="User"/>
                                                </figure>
                                                {/* user name */}
                                                <h5>Devil Shohe</h5>
                                                <span className="testimonial-degignation">Founder at Smart Technologies</span>
    
                                                {/* paragraph */}
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typeseing industry Lorem Ipsum has been the industry 
                                                    standard dummy text Lorem is simply.
                                                </p>
    
											</div>
                                            <div className="swiper-slide-back-box">
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            </div>
                        </div>
                    </div>

                    {/* If we need navigation buttons */}
                    <div id="testimonial-prev" className="swiper-button-prev hidden-lg"><span className="icon-play-flip"></span></div>
                    <div id="testimonial-next" className="swiper-button-next hidden-lg"><span className="icon-play"></span></div>

                    {/* If we need pagination */}
                    <div id="testimonial-paging" className="swiper-pagination"></div>

                </div>
            </div>
        </div>
    </section>

    {/* PACKAGES */}
    <section className="site-packages section-blue " id="site-packages">
        <div className="container-fluid">
        	<div className="row">
	        	<div className="color-gredient">
    	        </div>
            </div>
            <div className="site-packages-inner">
            <div className="row no-gutter">
                <div className="col-sm-12">
                    {/* h1 heading */}
                    <h1>Our Best Pricing</h1>
                </div>
                
                <div className="container">
                
                	<div className="col-xs-12 col-sm-4 col-md-push-4">
                        {/* plan active */}
                        <div className="box active wow fadeInDown" data-wow-duration="2s">
                            <div className="price-box-header">
                            {/* heading */}
                            <h4 className="heading">Premium Plan</h4>
                            {/* price */}
                            <div className="price"><span>$</span>99<span>/pm</span></div>
                            </div>
                            
                            {/* options */}
                            <ul className="options">
                                <li><span><i className="fa fa-check"></i> Limited Indtall</span></li>
                                <li><span><i className="fa fa-check"></i> Unlimited Downlaod</span></li>
                                <li><span><i className="fa fa-check"></i> Free One Year Support</span></li>
                                <li><span><i className="fa fa-check"></i> Free 15GB Linux Hosing</span></li>
                                <li><span><i className="fa fa-close"></i> 30GB Storage</span></li>
                                <li><span><i className="fa fa-close"></i> Unlimited Data</span></li>
                            </ul>
                            {/* button */}
                            <Link to="#">Order Now</Link>
                        </div>
                        {/* end */}
    
                    </div>
                    
                    <div className="col-xs-12 col-sm-4 col-md-pull-4">
    
                        {/* plan */}
                        <div className="box left wow fadeInDown" data-wow-duration="1s">
                            <div className="price-box-header">
                                {/* heading */}
                                <h4 className="heading">Basic Plan</h4>
                                {/* price */}
                                <div className="price"><span>$</span>49<span>/pm</span></div>
                            </div>
                            
                            {/* options */}
                            <ul className="options">
                                <li><span> <i className="fa fa-check"></i> Limited Indtall</span></li>
                                <li><span> <i className="fa fa-check"></i> Unlimited Downlaod</span></li>
                                <li><span> <i className="fa fa-check"></i> Free One Year Support</span></li>
                                <li><span> <i className="fa fa-close"></i> Free 15GB Linux Hosing</span></li>
                                <li><span> <i className="fa fa-close"></i> 30GB Storage</span></li>
                            </ul>
                            {/* button */}
                            <Link to="#">Order Now</Link>
                        </div>
                        {/* end */}
    
                    </div>
    
                    <div className="col-xs-12 col-sm-4">
    
                        {/* plan */}
                        <div className="box right wow fadeInDown" data-wow-duration="3s">
                            <div className="price-box-header">
                            {/* heading */}
                            <h4 className="heading">Premium Plan</h4>
                            {/* price */}
                            <div className="price"><span>$</span>150<span>/pm</span></div>
                            </div>
                            
                            {/* options */}
                            <ul className="options">
                                <li><span><i className="fa fa-check"></i> Limited Indtall</span></li>
                                <li><span><i className="fa fa-check"></i> Unlimited Downlaod</span></li>
                                <li><span><i className="fa fa-check"></i> Free One Year Support</span></li>
                                <li><span><i className="fa fa-check"></i> Free 15GB Linux Hosing</span></li>
                                <li><span><i className="fa fa-check"></i> 30GB Storage</span></li>
                            </ul>
                            {/* button */}
                            <Link to="#">Order Now</Link>
                        </div>
                        {/* end */}
    
                    </div>
                </div>
			</div>
            </div>
        </div>
    </section>

    {/* LATEST BLOG */}
    <section className="latest-blog section-grey" id="latest-blog">
        <div className="container-fluid wide">
            <div className="row">
                <div className="col-xs-12">

                    {/* H1 HEADING */}
                    <h1>Latest Blog Post</h1>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    	<div className="main-heading-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and
							typeseing industry Lorem Ipsum has been the industry's standard
							dummy text Lorem is simply dummy text of the printing and
                        </p>
                        </div>
                    </div>
                    
                    	{/*- blog post 1 */}
                    	<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        	<div className="blog-post-box">
                            	{/*- image */}
                            	<figure> <img src={'assets/images/blog-images/blog-post1.jpg'} alt="blogpostimage"/></figure>
                                <div className="blog-post-content">
                                    {/*- admin details */}
                                    <ul>
                                        <li> By Admin &nbsp; &nbsp;|</li>
                                        <li> (20) Comments </li>
                                    </ul>
                                    {/*- title */}
                                    <Link to="#">
                                    <h4>A process behind app </h4>
                                    </Link>
                                    {/*- date */}
                                    <span> May 24, 2017</span>
                                    {/*- paragraph */}
                                    <p>Lorem Ipsum is simply dummy text of the printing and typeseg indury Lorem Ipsum e printing and has been the industry's standard dummy text ever since the. </p>
								</div>
                            </div>
                            <Link className="blog-more-button" to="#">read more </Link>
                    	</div>
                        
                        {/*- blog post 2 */}
                    	<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        	<div className="blog-post-box">
                            	{/*- image */}
                            	<figure> <img src={'assets/images/blog-images/blog-post2.jpg'} alt="blogpostimage"/></figure>
                                <div className="blog-post-content">
                                    {/*- admin details */}
                                    <ul>
                                        <li> By Admin &nbsp; &nbsp;|</li>
                                        <li> (20) Comments </li>
                                    </ul>
                                    {/*- title */}
                                    <Link to="#">
                                    <h4>Blog title goes here </h4>
                                    </Link>
                                    {/*- date */}
                                    <span> May 24, 2017</span>
                                    {/*- paragraph */}
                                    <p>Lorem Ipsum is simply dummy text of the printing and typeseg indury Lorem Ipsum e printing and has been the industry's standard dummy text ever since the. </p>
								</div>
                            </div>
                            <Link className="blog-more-button" to="#">read more </Link>
                    	</div>
                        
                        {/*- blog post 3 */}
                    	<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        	<div className="blog-post-box">
                            	{/*- image */}
                            	<figure> <img src={'assets/images/blog-images/blog-post3.jpg'} alt="blogpostimage"/></figure>
                                <div className="blog-post-content">
                                    {/*- admin details */}
                                    <ul>
                                        <li> By Admin &nbsp; &nbsp;|</li>
                                        <li> (20) Comments </li>
                                    </ul>
                                    {/*- title */}
                                    <Link to="#">
                                    <h4>A process behind app </h4>
                                    </Link>
                                    {/*- date */}
                                    <span> May 24, 2017</span>
                                    {/*- paragraph */}
                                    <p>Lorem Ipsum is simply dummy text of the printing and typeseg indury Lorem Ipsum e printing and has been the industry's standard dummy text ever since the. </p>
								</div>
                            </div>
                            <Link className="blog-more-button" to="#">read more </Link>
                    	</div>
                </div>
            </div>
        </div>
    </section>
    
    {/* SUBSCRIBE */}
    <section id="site-subscribe" className="site-subscribe section-white">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 wow flipInX" data-wow-duration="2s">
					{/* H1 HEADING */}
                    <h1>Sunscribe us</h1>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    	<div className="main-heading-text">
                        <p>Subscribe to our Newsletter to get daily updates by us!!
                        Lorem Ipsum is simply dummy text of the printing and typeseing
                        </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    </div>
                    
                    
                    {/* BOX */}
                    <div className="site-box">
                        <div className="row">
                        	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                {/* FORM */}
                                <form action="#" method="post" className="site-form">
                                    <label>
                                        <input type="email" placeholder="enter your email id here" required="required"/>
                                    </label>
                                    <input type="submit" value="SUBMIT"/>
                                </form>
                                {/* END FORM */}
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    
    {/* TWITTER */}
    <section className="site-twitter section-blue" id="site-twitter" style={{display: 'none'}}>
        <div className="container-fluid wide">
            <div className="row">
                <div className="col-xs-12">

                    {/*  H1 HEADING*/}
                    <h1 className="heading-inverse">Tweet @ <strong>Start</strong></h1>

                    {/* Slider main container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                                <div className="swiper-container" id="tweet-slider">

                                    {/* Tweets */}
                                    <ul className="swiper-wrapper tweet"></ul>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If we need navigation buttons */}
                    <div id="tweet-prev" className="swiper-button-prev hidden-lg"><span className="icon-play-flip"></span></div>
                    <div id="tweet-next" className="swiper-button-next hidden-lg"><span className="icon-play"></span></div>

                    {/* If we need pagination */}
                    <div id="tweet-paging" className="swiper-pagination"></div>

                </div>
            </div>
        </div>
    </section>

    {/* QUICK SUPPORT */}
    <section id="quick-support" className="site-quick-support section-white">
        <div className="container">
            <div className="contact-box color-gredient">
                <div className="col-xs-12">
					<div className="box">

                    {/* INFO */}
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
	                    <div className="site-info">
                        <h5> Contact Info</h5>
                        <p>Lorem Ipsum is simply dummy text of the 
                        printing and typesetting indus orem Ipsum 
                        has been the industrys.
                        </p>

                        {/* BOX */}
                        <Link to="tel:+911234567890" className="site-box-row">
                            {/* ICON */}
                            <h6><i className="fa fa-phone"></i> Call us </h6>
                            {/* PARAGRAPH */}
                            <p>+91 123 456 7890</p>
                        </Link>

                        {/* BOX */}
                        <Link to="mailto:support@gmail.com" className="site-box-row last">
                            {/* ICON */}
                            <h6><i className="fa fa-envelope"></i> Email us</h6>
                            {/* Mail */}
                            <p>support@gmail.com</p>
                        </Link>
                        
                        {/* BOX */}
                        <Link target="_blank" to="http://maps.google.com/?q=Location,125BusinessEvenue,Huston,USA" className="site-box-row">
                            {/* ICON */}
                            <h6><i className="fa fa-map-marker"></i> Location</h6>
                            {/* ADDRESS */}
                            <address>Location, 125 Business Evenue, Huston, USA</address>
                        </Link>

                    </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    	<div className="site-info form">
	                    	<h5> Send us message! </h5>
		                    <form action="php/form.php" method="post" className="site-contact-form" id="myForm">
                            	<label>
									<input className="app-btn value-clear formpw" type="text" name="app_name" placeholder="Name" required="required" />
                                </label>
                                
                                <label>
									<input className="app-btn value-clear formpw" type="email" name="app_email" placeholder="Email" required="required"/>
								</label>
                                
                                <label>
									<input className="app-btn value-clear formpw" type="tel" name="app_phone" placeholder="Phone" required="required"/>
								</label>
                                
                                <label>
									<input className="app-btn value-clear formpw" type="url" name="app_website" placeholder="Website"/>
								</label>
                                
                                <label className="last">
									<textarea className="app-btn value-clear formpw" name="app_message" placeholder="Message" required></textarea>
								</label>
                                
                                <label className="move">
									<button id="form-submit-btn" className="app-btn" type="submit">Submit <i className="fa fa-spin fa-spinner"></i></button>
								</label>
                    </form>
                    	</div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    </section>

    {/* SUBSCRIBE */}
    <section className="site-subscribe" style={{display: 'none'}}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">

                    {/* BOX */}
                    <div className="site-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 no-space">

                                {/* PARAGRAPH */}
                                <p>Subscribe to our Newsletter to get first Gift voucher by Start</p>
                                {/* END PARAGRAPH */}

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 no-space">

                                {/* FORM */}
                                <form action="#" method="post" className="site-form">
                                    <label>
                                        <input type="email" placeholder="" required="required"/>
                                    </label>
                                    <input type="submit" value="SUBMIT"/>
                                </form>
                                {/* END FORM */}


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
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

export default Home;