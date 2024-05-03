import Header from "./header";
import Footer from "./footer";
import Searchengine from "./searchengine";
import Carousel from 'react-bootstrap/Carousel';
import plane from './plane.png';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";

//import Footer from "./footer";
function Home() {
  /*const [user,setUser] = useState();
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts').then((data)=> data.json()).then((cdata)=> setUser(cdata));},[]); */
  return (
    <>
      <Header/>      
      {/* start carousel slider */ }
    {/* <div>
    <table  striped bordered hover>
      <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
        <th>body</th>
      </tr>
      <tbody>
       { user?.map((item)=>(
           <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
           </tr>
         )) }
      </tbody>

    </table>

    </div> */ }


      <div class="main-usearchengine position-relative">
        <div class="position-usearchengine">
           <Searchengine/>
        </div>
     <div class="main-slider position-relative">
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./images/banner1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./images/banner1.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./images/banner1.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
       <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path>
        </svg>
        </div>
      {/* End carousel slider */ }        
      </div>
      
      {/* start why choose section */}
        <div class="choose-usection mt-5 mb-5">
        <div class="d-flex align-items-center justify-content-center mb-4">
                  <div class="vf-custom-icon me-2 flex-shrink-0">
                      <img src={require('./plane.png')} alt="plane-icon" className="img-fluid" />
                  </div>
                 <h3 class="mb-0 text-capitalize text-whead pb-3 position-relative">  Why Are The Best </h3>
            </div>
         <Container>
         <Row className="mb-2" >
           <Col>
               <div class="section-ucontent border shadow p-2">
                  <img src={require('./images/why1.png')} alt="choose-uimage" />
                     <h3>Amazing Travel</h3>
                     <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                </div>    
             </Col>
             <Col>
               <div class="section-ucontent border shadow p-2">
                  <img src={require('./images/why2.png')} alt="choose-uimage" />
                     <h3>Discover</h3>
                     <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                </div>    
             </Col>
             <Col>
               <div class="section-ucontent border shadow p-2">
                  <img src={require('./images/why3.png')} alt="choose-uimage" />
                     <h3>Book Your Trip</h3>
                     <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                </div>    
             </Col>
             <Col>
               <div class="section-ucontent border shadow p-2">
                  <img src={require('./images/why4.png')} alt="choose-uimage" />
                     <h3>Nice Support</h3>
                     <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                </div>    
             </Col>
          </Row>
           </Container>
        </div>
       {/* end why choose section */}
      {/* start domestic tour */}
      <div class="tour-destination mt-4 mb-4">
      <Container>
      <div class="d-flex align-items-center justify-content-center mb-4">
                  <div class="vf-custom-icon me-2 flex-shrink-0">
                      <img src={require('./plane.png')} alt="plane-icon" className="img-fluid" />
                  </div>
                 <h3 class="mb-0 text-capitalize text-whead pb-3 position-relative"> Domestic Tour Destination  </h3>
            </div>
      <Row className="mb-2" >
        <Col>
        <div class="image-destination">
          <img src={require('./images/destination1.jpg')}  className="w-100" alt="Second slide"/>
            <div class="desti-uname">
               <p> Manali</p>
            </div>
        </div>        
        </Col>
        <Col xs={6}>
          <div class="image-destination">
          <img src={require('./images/destination2.jpg')}  className="w-100"  alt="Second slide"/>
          <div class="desti-uname">
               <p> Manali</p>
            </div>
        </div>        
        </Col>
        <Col>
        <div class="image-destination">
          <img src={require('./images/destination3.jpg')}  className="w-100"  alt="Second slide"/>
          <div class="desti-uname">
               <p> Manali</p>
            </div>
        </div>        
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
        <div class="image-destination">
          <img src={require('./images/destination4.jpg')}  className="w-100" alt="Second slide"/>
          <div class="desti-uname">
               <p> Manali</p>
            </div>
        </div>        
        </Col>
        <Col xs={5}>
          <div class="image-destination">
            <img src={require('./images/destination5.jpg')}   className="w-100"  alt="Second slide"/>
            <div class="desti-uname">
               <p> Manali</p>
            </div>
          </div>        
        </Col>
        <Col>
        <div class="image-destination">
          <img src={require('./images/destination6.jpg')}   className="w-100"  alt="Second slide"/>
          <div class="desti-uname">
               <p> Manali</p>
            </div>
        </div>        
        </Col>
      </Row>
    </Container>
    </div>
    {/* end domestic tour */}
       <div class="popular-destination mt-4 mb-4">
       <Container>
       <div class="d-flex align-items-center justify-content-center mb-4">
                  <div class="vf-custom-icon me-2 flex-shrink-0">
                      <img src={require('./plane.png')} alt="plane-icon" className="img-fluid" />
                  </div>
                 <h3 class="mb-0 text-capitalize text-whead pb-3 position-relative">  International Tour Destination </h3>
            </div>
     <Row className="mb-2">
        <Col sm>
          <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination1.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div>
        </Col>
        <Col sm>  <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination2.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div></Col>
        <Col sm>  <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination3.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div></Col>
       
      </Row>
      <Row className="mb-2">
        <Col sm>
          <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination4.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div>
        </Col>
        <Col sm>  <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination5.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div></Col>
        <Col sm>  <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination6.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div></Col>
       
      </Row>
      <Row className="mb-2">
        <Col sm>
          <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination6.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div>
        </Col>
        <Col sm>  <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination5.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div></Col>
        <Col sm>  <div class="popular-destination">
              <div class="d-flex shadow  align-items-center bg-white rounded border">
                 <img src={require('./images/destination4.jpg')}   className="popu-destimage"  alt="Second slide"/>  
                   <div class="dest-ucontent ps-3">
                      <h6>London</h6>
                        <a href="#">Flight </a> , <a href="#">Hotel </a>    
                    </div>
              </div>
          </div></Col>
       
      </Row>
      </Container>
       </div>
       <div class="tour-uoffer mt-4 mb-4">
        <Container> 
          <Row>
            <Col xs={8}>
                <div class="offer-udest  bg-white position-relative ps-3 rounded">
                    <img src={require('./images/sbanner.jpg')} alt="offer-banner" class="img-thumbnail w-100 shadow p-1"/>
                  <div class="offer-destcontent text-white ps-3">
                      <h5>Plan Ahead And Save</h5>
                       <p>Book 60 days in advance for 20% off select stays</p>
                  </div>  
                </div>
               
            </Col>
            <Col>
                <div class="offer-udest position-relative rounded custom-robanner">
                    <img src={require('./images/sbanner1.jpg')} alt="offer-banner" class="w-100 shadow rounded"/>
                  <div class="offer-destcontent text-white ps-3">
                      <h2> Up To 15% Off On Domestic Flights</h2>
                    </div>  
                </div>
               
            </Col>
          </Row>
        </Container> 
       </div>
      <Footer/>
    </>
  );
}
 export default Home;
