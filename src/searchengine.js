import { Tab, Col, Nav, Row,Form, Button } from "react-bootstrap";
/* import React, {useState,total} from 'react'; */
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
function Searchengine() {
  {/* start datepicker */}
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
    {/* end datepicker */}
     {/* start autocomplete */}
     
    const items = [
      {
          name: 'Cobol'
      },
      {
         name: 'JavaScript'
      },
      {
         name: 'Basic'
      },
      {
         name: 'PHP'
      },
      {
        name: 'Java'
      }
    ]
    const items1 = [
      {
          name: 'Delhi'
      },
      {
         name: 'Goa'
      },
      {
         name: 'Basic'
      },
      {
         name: 'PHP'
      },
      {
        name: 'Java'
      }
    ]
    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      // the item hovered
      console.log(result)
    }
  
    const handleOnSelect = (item) => {
      // the item selected
      console.log(item)
    }
  
    const handleOnFocus = () => {
      console.log('Focused')
    }
  
    const formatResult = (item) => {
      return (
        <>
       
          <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
        </>
      )
    }
    {/* end datepicker css */}
  const [visible, setVisible] = React.useState(false);
  const [quantity,setQuantity] = useState(1);
  const [quantity1,setQuantity1] = useState(0);
  const [quantity2,setQuantity2] = useState(0);
  //const [total,addtotal] = useState(3);
 function adultincrement()
  {
     
    setQuantity(quantity+1);
     
  // increasing the quantity by 1
  }
  function adultdecrement()
  {
    if(quantity <= 0)
    {
      return;
    } else {
    setQuantity(quantity-1); 
    }
     // decreasing the quantity by 1
  }
  function childincrement()
  {
    setQuantity1(quantity1+1);
 
    // increasing the quantity by 1
  }
    

  function childdecrement()
  {
     if(quantity1<=0)
     {
       return;
     }
     else
     {
    setQuantity1(quantity1-1);
      }
       // decreasing the quantity by 1
  }
  function infantincrement(){
   
    setQuantity2(quantity2+1);   
   
     // increasing the quantity by 1
  }

  function infantdecrement(){
     if(quantity2<=0)
     {
      return;
     }
     else
     {
    setQuantity2(quantity2-1);
      }
       // decreasing the quantity by 1
  }
 
  return (
    <>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" ref={exampleRef => this.exampleRef = exampleRef}>   
      <Nav variant="pills" >
        <Nav.Item>
          <Nav.Link eventKey="first">Flight</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Hotel</Nav.Link>
        </Nav.Item>
      </Nav>
   
      <Tab.Content className=" bg-white p-2 shadow">
        <Tab.Pane eventKey="first">
         <Row>
           <Col sm={3}>
             <Form.Group className="mb-3" controlId="from">
             <Form.Label>From</Form.Label>
             
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            placeholder="Enter Source"
            className={423}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}      />
  
            </Form.Group> 
           </Col> 
           <Col sm={3}>
             <Form.Group className="mb-3" controlId="to">
             <Form.Label>To</Form.Label>
           <ReactSearchAutocomplete
            items={items1}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            placeholder="Enter Destination"
            className={423}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}          />
            </Form.Group> 
           </Col>   
           <Col>
             <Form.Group className="mb-3" controlId="depart">
             <Form.Label>Departure</Form.Label>
             <DatePicker
       selected={startDate}
       className="form-control"
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={date => setStartDate(date)}
     />
            </Form.Group> 
           </Col>
           <Col>
             <Form.Group className="mb-3" controlId="return">
             <Form.Label>Return</Form.Label>
             <DatePicker
       selected={endDate}
       className="form-control"
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
     />
            </Form.Group> 
           </Col> 
          
           <Col>
             <Form.Group className="mb-3" controlId="return">
             <Form.Label> Travellers & Class </Form.Label>
             <div className="passenger-gfinfo position-relative">     
                 <p className="passenger-uinfo" onClick={() => setVisible(!visible)}>  Travellers <i className="fa fa-angle-down"></i></p>
                  <div className={visible ? 'element-visible' : 'element-hidden'}>
                  <div class="d-flex align-items-center border-bottom pb-2 mb-2">  
                  <div className="me-auto">
                    <p class="mb-0"><i class="fa fa-user"></i> Adults <span> ( Over 11 )</span></p>
                  </div> 
                  <div class="passenger-custbutton">             
                    <button onClick={() => adultincrement()}>+</button>
                    <span value={quantity} >{quantity}</span>
                     <button onClick={adultdecrement}>-</button>
                   </div>
                  </div>
                  {/* end plus minus adult */}
                  <div class="d-flex align-items-center border-bottom pb-2 mb-2">  
                  <div className="me-auto">
                    <p class="mb-0"><i class="fa fa-user"></i> Children <span > ( 2-11 ) </span></p>
                  </div> 
                  <div class="passenger-custbutton">             
                    <button onClick={() => childincrement()}>+</button>
                    <span value={quantity1} >{quantity1}</span>
                     <button onClick={childdecrement}>-</button>
                   </div>
                  </div>
                  {/* end plus minus adult */}
                  <div class="d-flex align-items-center border-bottom pb-2 mb-2">  
                  <div className="me-auto">
                    <p class="mb-0"><i class="fa fa-user"></i> Infant <span> ( Under 2 )</span></p>
                  </div> 
                  <div class="passenger-custbutton">             
                    <button onClick={() => infantincrement()}>+</button>
                    <span value={quantity2}>{quantity2}</span>
                     <button onClick={infantdecrement}>-</button>
                   </div>
                  </div>
                  <div class="mb-1">
                   <Button variant="info" onClick={() => setVisible(false)}>Done</Button>
                  </div>
                  {/* end plus minus adult */}
              </div>

             </div>
            </Form.Group> 
           </Col> 
           <Col>
            <Button className="btn-search w-100" variant="info">Search</Button>
           </Col>
        </Row>
             
        </Tab.Pane>
        <Tab.Pane eventKey="second">
           Hotel content          
        </Tab.Pane>
      </Tab.Content>   
</Tab.Container>
  


    </>
  );
}
 export default Searchengine;
