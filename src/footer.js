import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Footer() {
  return (
    <>
     <footer class="pt-3 pb-3">
       <Container>
       
          <div class="contact-uaddress d-flex pt-3 pb-3">
            <div class="address-uinfo  align-items-center d-flex ">
               <i class="fas fa-phone"></i> 
               <div class="text-white ps-3 ">
                  <h6 class="mb-1"> Call Us </h6>
                    <p class="mb-0"><a href="tel:+1 123-456-0606" class="contact-uinfo">+1 123-456-0606</a></p>

                </div>
              </div>
              <div class="address-uinfo d-flex ">
               <i class="fas fa-envelope"></i> 
               <div class="text-white ps-3 ">
                <h6 class="mb-1"> Write To Us </h6>
                    <p class="mb-0"> info@travolagency.com </p>

                </div>
              </div>
              <div class="address-uinfo d-flex ">
              <i class="fas fa-map-marker-alt"></i> 
                 <div class="text-white ps-3 ">
                <h6 class="mb-1"> Address </h6>
                    <p class="mb-0"> address </p>
                </div>
              </div>
         </div>
         <div class="sub-zfooter border-cusbottom pt-5 pb-5">
  <Row>
    <Col md={4}>
                        <div class="widget clearfix">
                            <div class="footer-logo mb-2"> 
                               <img class="img-fluid footer-logo"  src={require('./images/logo-light.png')}  alt="" /> 
                              </div>
                            <div class="widget-text text-white">
                                <p>Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam the nesuen.</p>
                                <div class="social-icons">
                                    <ul class="list-inline px-0">
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col md={3} className="offset-md-1 widget-area">
                          <div class="widget clearfix usful-links">
                            <h3 class="widget-title">Quick Links</h3>
                            <ul class="ps-0">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Tours</a></li>
                                <li><a href="#">Destinations</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        </Col>
                        <Col md={4} className="widget-area">      
                          <div class="widget clearfix">
                            <h3 class="widget-title">Subscribe</h3>
                            <p>Sign up for our monthly blogletter to stay informed about travel and tours</p>
                            <div class="widget-newsletter position-relative">
                                <form action="#">
                                    <input type="email" placeholder="Email Address" required="" />
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </Col>

   
  </Row>
 </div>
 <div class="copyright pt-3 pb-3">
      <p class="mb-0 text-white"> ©2023 <a href="#">Travel Portal Solution Pvt Ltd </a>. All rights reserved.</p>
   </div>


          

       </Container>
       <div class="elementor-background-overlay"></div>
      </footer> 
     
    </>
  );
}
export default Footer;