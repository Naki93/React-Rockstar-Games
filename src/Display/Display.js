import React from "react";

import Card from "react-bootstrap/Card";
//import { Carousel } from "bootstrap";
import Carousel from "react-bootstrap/Carousel"
import mercenary from "../Profiles/mercenary.jpg"
import  Button  from "react-bootstrap/Button";


//Create a function component named display that will display the game that is available to watch
//Export the function to App.js
export default function Display(){
    
    return(
        <section className ="main">
            <img src ={mercenary} className="image" alt="gta mercenaries"/>
             <div className ="center">  
             <p className ="texts">Grand Theft Auto Online</p>
             
             <h1 className ="text">San Andreas<br/>Mercenaries Out <br/>Now</h1>
             <div className ="space">
             <button className =" button">Watch Now</button>
             </div>
             <div className ="empty">
             <button className ="second"></button>
             <button  className ="second"></button>
             <button className ="second"></button>
             <button className ="second"></button>
             </div>
             </div>
        </section>
        
    )
}

