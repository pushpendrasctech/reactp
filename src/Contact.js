import Header from "./header";
import Footer from "./footer";

import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Contact() {
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
           Contact Us
        </Breadcrumb.Item>
      </Breadcrumb>
     </div>
   </div>
      <div class="contact-uinfo mt-4 mb-4">
         <Container>
          <Row>
             <Col sm={4} xs={12}>
               <div class="contactaddress shadow p-2 border text-center text-dark">
                 <h4>Phone</h4>
                   <i class="fas fa-phone"></i>
                    <a href="tel:+91-8510862337">+91-850862335</a>     
                </div>      
             </Col> 
             <Col sm={4} xs={12}>
               <div class="contactaddress shadow p-2 border text-center text-dark">
               <h4>Address</h4>  
                   <i class="fas fa-map-marker"></i>
                     <p class="mb-0">sec-2 sctechnologies Noida</p>    
                </div>      
             </Col> 
             <Col sm={4} xs={12}>
               <div class="contactaddress shadow p-2 border text-center text-dark">
               <h4>Email Address</h4>
                   <i class="fas fa-phone"></i>
                   <a href="mailto:info@travel.com">info@travel.com</a>     
                </div>      
             </Col>    
          </Row>
          </Container>  
      </div>


        <div class="contact-ubanner pt-4 pb-4">
           <Container>
              <Row>
               <Col sm={6} xs={12}>
          <div class="map-address">                     
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14014.123003203751!2d77.
             3143359!3d28.5838504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3b1322cc27%3A0xf921e32041d298d2!2s
             Travel%20Portal%20Solution!5e0!3m2!1sen!2sin!4v1683898266365!5m2!1sen!2sin" width="545" 
              height="450" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0">
             </iframe>
            
           </div>
               </Col>  
               <Col sm={6} xs={12}>
                <div class="contact-uinfo border bg-white shadow p-3 ">
                <Form>
         <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email" />       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone" />       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Enter Message" />       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
         <Button variant="btn btn-primary">Submit</Button>      
      </Form.Group>
      </Form>                        
    </div>
               
               </Col>         

             </Row>
          </Container>
       </div>     
    <Footer/>
    </>
  );
}
 export default Contact;
