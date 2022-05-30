import logo from './logo.svg';
import './App.css';
import mycs from './mycss.module.css'
import {Fragment} from 'react';
import Menu from './Menu';
import Slider from './Slider';
import Offer from './Offer';
import About from './About';
import Lap from './Lap';
import Hs from './Hs';
import Prectice from './Prectice';
import InpJS from './InpJS';

import { Button,ButtonGroup,Card,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var h = 24;
var arr =[1,2,3,4,5,6,7,8,9,10];
var arrdata = [
  {"name":"tarang","gender":"male"},
  {"name":"ashik","gender":"male"},
  {"name":"ruhi","gender":"female"},
  {"name":"kavya","gender":"female"},
]

const main ={
  backgroundColor:"#FACD16",
  textAlign:"center",
  width:"150px",
  marginLeft:"48%",
  borderRadius:"3px",
  padding:"10px 20px"
}

function App() {
  return (
      <>
         {/* <Menu/>
         <Slider name="hello"/>
         <Offer/>
         <div style={{marginTop:"30px",marginBottom:"100px"}}>
           <div style={main}>
              <a style={{color:"white"}}>View All Course </a>
            </div>
         </div>

         <About/>
         <Lap/>
         <Hs/>
         

         <ul>
           {
             arr.map((item) => {
               return(
                 <li>{item}</li>
               )
             })
           }
         </ul>

         {
           arrdata.map((item) => {
             return(
              <Prectice name={item.name} gender={item.gender}  dell="hiiii"/> 
             )
           })
         }

         <br></br>
         <Button variant="info">Click</Button>
         <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>






  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('./img/off3.jpg').default}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('./img/off1.jpg').default}
        alt="Second slide"
      />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('./img/off2.jpg').default}
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>

  <ButtonGroup aria-label="Basic example">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
  </ButtonGroup> */}

  <InpJS/>
         
  </>
  )
}

export default App;
