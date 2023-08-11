import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import dead from"../Profiles/reddeadredemption2.jpg"
import V from"../Profiles/reddeadonline.jpg"
import theft from"../Profiles/V.jpg"
import online from"../Profiles/GTAOnline.jpg"

//Create a function component named Section that will store all the new features
//Export this component on to the App.js
export default function Section(){
    return(
        <section>
        <Container>
            <h2 className="news">Features</h2>
            <Row>
                <Col>
                <img src={theft}  width= "254px" alt="gta 5"/>
                </Col>
                <Col>
                <img src={online} width ="254px" alt ="gta online"/>
                </Col>
                <Col>
                <img src={dead} width= "254px" alt="red dead redemption 2"/>
                </Col>
                <Col>
                <img src={V} width= "254px" alt="red dead online"/>
                </Col>
            </Row>
        </Container>
        
        
        <p className="view">View More</p>
        
        
        </section>
    )
}