import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
  
export class CarouselArticles extends Component {  
        render()  
        {  
          return (  
            <div>        
       


      <div class='container-fluid' >            
        <OwlCarousel items={7}  
          className="owl-theme"  
          loop  
          nav  
          margin={6}
          responsive= {{
            0:{
              items:1
              },
            312:{
                items:2
                },
            480:{
              items:3
              },
            636: {
              items: 4
              },
            778: {
              items: 5
              },
            840:{
              items:6
              },
            1366:{
              items:7
              }}
          }
           >  
           <div className="contenedor artcr">
               <a href="#">
                    <center>
                        <img className="imga" src= {'assets/img/cat_img1.png'}/>
                            Televisor
                    </center>
                </a>
           </div>  
           <div className="contenedor artcr">
               <a href="#">
                    <center>
                        <img className="imga" src= {'assets/img/cat_img2.png'}/>
                            Mobile
                    </center>
                </a>
           </div>  
           <div className="contenedor artcr">
                <a href="#">
                    <center>
                        <img className="imga" src= {'assets/img/cat_img3.png'}/>
                            Headphone
                    </center>
                </a>
           </div>  
           <div className="contenedor artcr">
               <a href="#">
                    <center>
                        <img className="imga" src= {'assets/img/cat_img4.png'}/>
                            Watch
                    </center>
                </a>
           </div>  
           <div className="contenedor artcr">
                <a href="#">
                    <center>
                        <img className="imga" src= {'assets/img/cat_img5.png'}/>
                            Game
                    </center>
                </a>
           </div>  
           <div className="contenedor artcr">
               <a href="#">
                    <center>
                        <img className="imga" src= {'assets/img/cat_img6.png'}/>
                            Camera
                    </center>
                </a>
           </div>  
           <div className="contenedor artcr">
                <a href="#">
                    <center>
                        <img className="imga" src= {'assets/img/cat_img7.png'}/>
                            Audio
                    </center>
                </a>
           </div>  
      </OwlCarousel>  
      </div>

      </div>
      
      
      
          )  
        }  
      }  
export default CarouselArticles  
