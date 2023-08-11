import React from "react"
import arrow from "../Profiles/arrow.svg"
import english from "../Profiles/english.svg"
import twitch from "../Profiles/twitch.svg"
import insta from "../Profiles/insta.svg"
import twitter from "../Profiles/twitter.svg"
import you from "../Profiles/you.svg"
import face from "../Profiles/facebook.svg"

//Create a function component named Footer that will display all contact details
//Export this function in to App.js
export default function Footer(){
    return(
        <footer className ="footer">
            <ul className="list">
                <li>Contact</li>
                <li>Careers</li>
                <li>Support</li>
                <li className="arrow"><img src ={arrow} width = "50%" alt="small arrow"/></li>
                
                <li className="english"><img src ={english} width = "20px" height="20px" alt="picture of a globe" />English</li>
                 {/* <select><option value ="English">English</option></select>  */}
            </ul>
            <ul className ="socials">
                <li className="policy">Coporate</li>
                <li className="policy">Privacy</li>
                <li className="policy">Cookie Settings</li>
                <li className="policy">Cookie Policy</li>
                <li className="policy">Legal</li>
                <li className="policy">Do Not Sell My personal Information</li>
                 <img src ={twitch} width = "30px" height="30px" className=" twitch" alt="twitch icon"/> 
                <img src ={insta} width = "30px" height="30px" className=" insta" alt="instagram icon"/>
                <img src ={twitter} width ="30px" height="30px" className=" twitter" alt="twitter icon"/>
                <img src ={you} width = "30px" height="30px" className=" you" alt="youtube icon"/>
                <img src ={face} width = "30px" height="30px" className=" face" alt="facebook icon"/>
                <li></li>
            </ul>
            <ul className ="places">
            <li className="rock">Rockstar Games</li>
                <li className="new">New York  London  Paris  Bogota</li>
                <li className="sign">MCMXCVIII</li>
            </ul>
            <div>
                <a href = "https://rockstargames.com" target="_blank" className="rockstar">Rockstar Games</a>
            </div>

        </footer>
    )
}