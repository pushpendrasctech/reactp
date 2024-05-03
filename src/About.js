import Header from "./header";
import Footer from "./footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function About() {
  return (
    <>
    <Header/>
      <div class="about-ubanner">
         <div class="container">
           <Breadcrumb>
        <Breadcrumb.Item href="#">
           Home
        </Breadcrumb.Item>      
         <Breadcrumb.Item active>
            About Us
        </Breadcrumb.Item>
      </Breadcrumb>
     </div>
   </div>
   <div class="about-wbanner ">
     <Container>
       <Row>
         <Col>
            <div class="about-uimage">
              
                <img src={require('./images/abour_right.png')} className="img-thumbnail"/>
            </div>
         
         
         </Col>

         <Col>
          <div class="about_us_left">
                        <h5>About us</h5>
                        <h2>We Are The World Best Travel Agency Company Since 2000</h2>
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing elitr </p>
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing elitr </p>
                        <a href="#" class="btn ">Find tours</a>
                    </div> 
         
         
         
         </Col>
       </Row>     
    </Container>
   </div>
  <div class="banner-qoffer pt-4 pb-4">  
       <Row className="m-0"> 
       <Col sm={4}>
         <div class="offer-uimage">
            <img src={require('./images/small_banner.png')} className="w-100 img-thumbnail"/>
         </div>
       </Col> 
       <Col>
         <div class="offer-uimage position-relative">
            <img src={require('./images/big_banner.png')} className="w-100 img-thumbnail"/>
            <div class="offer-ucontent text-white">
                <p class="mb-0">Enjoy 20% discount </p>
                <h3>Thailand couple tour</h3>
                <a href="#">Find tours</a>

            </div>
         </div>
       </Col>  
       </Row>   

   </div>
      

    <Footer/>
    </>
  );
}
 export default About;