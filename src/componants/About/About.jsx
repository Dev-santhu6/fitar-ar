import React from "react";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/css/style.css"
import "./About.css"
import Footer from "../Footer/Footer";
// import { fa,fa-mobile } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt,faExclamationCircleAlt, faRocket, faCheckCircle, faShoppingCart} from '@fortawesome/free-solid-svg-icons';



function About() {
  return (
    <div className="About">
      <section id="abouts" class="about hero-about">
        <div class="container">
<br/>
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150" style={{marginTop:"100px"}}>
              < img src={require("../../image/about.png")} style={{ marginTop:"40px",height:"700px"}} class="img-fluid moving-image" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
              
              <p class="fst-italic" >
             <span style={{fontFamily:"Poppins,sans-serif",marginTop:"80px", fontSize:"35px"}} >WHAT WE PROVIDE ?</span> 
             <ul>
              <li>        <FontAwesomeIcon icon={faMobileAlt} style={{height:"60px",marginTop:"10px"}}/>  Use augmented reality technology to see furniture in your room before you buy it.</li>
              <li> <FontAwesomeIcon icon={faCheckCircle} style={{height:"50px"}}/> AR-Webstore invites you to experience furniture purchasing of the future.</li>
              <li> <FontAwesomeIcon icon={faShoppingCart} style={{height:"40px"}}/> Goodbye to returns and welcome to purchases made with confidence.</li>
              <li> <FontAwesomeIcon icon={faRocket} style={{height:"40px"}}/> Transform your shopping experience with our immersive AR technology.</li>
             </ul>
              </p>
            </div>
          </div>
        </div>  
      </section>
       {/* <section class="about ">
    <div class="container  ">
      <div class="heading_container heading_center">
        <h1>
          PROBLEM 
        </h1>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
            <img src={require("../../image/prob1.jpg")} style={{height:"500px",width:"500px",margin:"30px",borderRadius:"10%30%50%80%"}}  alt=""/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
           
          <p class="fst-italic" style={{ marginTop:"50px",fontFamily:"Poppins,sans-serif",fontWeight:"bolder",fontSize:"20px"}}>
                Traditional e-commerce platforms fail to deliver immersive product experiences,
                leaving customers uncertain about the look, fit, and functionality of items. This lack of
                visualization leads to higher return rates as products may not meet expectations. Additionally,
                customer engagement suffers due to the limited ability to interact with and explore products online.
              </p>
          </div>
        </div>
      </div>
    </div>
  </section> */}
{/* <section id="abouts" class="about">
        <div class="container">
<h1 style={{textAlign:"center", marginTop:"20px"}}>SOLUTION</h1>
<br/>
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
              <img src={require("../../image/prob2.jpg")} style={{height:"450px",width:"550px",margin:"20px",borderRadius:"80%50%30%10%"}}  class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
              
              <p class="fst-italic" style={{ marginTop:"50px",fontFamily:"Poppins,sans-serif",fontWeight:"bolder",fontSize:"20px"}}>
              With AR-Webstore,customers can visualize products 
                       in their own spaces and view all the virtual features more clearly. This empowers
                         customers to make informed decisions, reduces return rates, and enhances 
                          engagement, resulting in a more satisfying and immersive shopping journey.
              </p>
            </div>
          </div>
        </div>  
      </section> */}
      <Footer></Footer>
    </div>
  );
}

export default About;