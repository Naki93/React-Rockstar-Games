import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import car from "../Profiles/rally.jpg"
import gta from "../Profiles/gta.jpg"
import vine from "../Profiles/vine.jpg"
import theft from "../Profiles/theft.jpg"
import dude from "../Profiles/dude.jpg";
import avenger from "../Profiles/avenger.jpg"


//Create a component that will store the main info of the page by using props
//export the Main component onto App.js
export default function Main({details}){
    const {brand, date, description,description3, date2, date3, date4}=details
    return(
     <main>
    
          <Container className="container">  
          <h2 className="news">NewsWire</h2>
            <Row>
           <Col >     
		<Card style={{ width: "22.3rem" }}  className=" card games bg-dark">
  		<img src ={car} className ="pic"  alt=" car"/>
  		<Card.Body className="black">
          <Card.Title className="brand" ><span className="brands ">{brand}</span> <span className ="date ">{date}</span></Card.Title>
    		<Card.Text >
                
            <p className="description content">{description}</p>
              
    		</Card.Text>
  		</Card.Body>
		</Card>
        </Col>
        <Col >
        <Card  style={{ width: "22.3rem" }} className="games bg-dark" >
  		<img src ={gta} alt="gta mercenaries"/>
  		<Card.Body className="black">
          <Card.Title className="brand" ><span className="brands ">{brand}</span> <span className ="date ">{date}</span></Card.Title>
    		<Card.Text>
            
            <p className="description content">GTA Online: San Andreas<br/> Mecenaries Now Available</p>
            
      		
    		</Card.Text>
  		</Card.Body>
		</Card>
</Col>
<Col >
        <Card style={{ width: "22rem" }}  className="games bg-dark">
  		<img src ={vine} alt="vinewood"/>
  		<Card.Body className="black">
          <Card.Title className="brand" ><span className="brands ">{brand}</span> <span className ="date ">{date2}</span></Card.Title>
    		<Card.Text>
            
            <p className="description content2">{description3}</p>
            
    		</Card.Text>
  		</Card.Body>
		</Card>
        </Col>
        
        </Row>
          </Container> 
          <Container className="container2">
            <Row>
            <Col >     
		<Card style={{ width: "22.3rem" }}  className="games bg-dark">
  		<img src ={dude} alt=" a man"/>
  		<Card.Body className="black">
          <Card.Title className="brand" ><span className="brands ">{brand}</span> <span className ="date ">{date3}</span></Card.Title>	
    		 <Card.Text> 
                
             <p className="description content3">Experience Improvements<br/> Coming To GTA Online</p>
            
    		 </Card.Text> 
  		</Card.Body>
		</Card>
        </Col>
        <Col >
        <Card  style={{ width: "22.3rem" }} className="games bg-dark" >
  		<img src ={avenger} alt="an airplane"/>
  		<Card.Body className="black">
          <Card.Title className="brand" ><span className="brands ">{brand}</span> <span className ="date ">{date3}</span></Card.Title>	
    		<Card.Text>
            
            <p className="description content3">Flight-Themed Bonuses<br/> Continue To Soar Through June</p>
            
      		
    		</Card.Text>
  		</Card.Body>
		</Card>
</Col>
<Col >
        <Card style={{ width: "22rem" }}  className="games bg-dark">
  		<img src ={theft} alt="gta mercenaries"/>
  		<Card.Body className="black">
          <Card.Title className="brand" ><span className="brands ">{brand}</span> <span className ="date ">{date4}</span></Card.Title>	
    		<Card.Text>
            
             <p className="description1 content3">Watch The Trailer For GTA <br/>Online: San Andreas Mecenaries</p>
            
    		</Card.Text>
  		</Card.Body>
		</Card>
        </Col>
            </Row>
            
            </Container> 
             
            <span className="view">View More</span>
            
	 </main>
     
    )
}