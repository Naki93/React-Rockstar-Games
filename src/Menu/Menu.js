import React from "react";
import {Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink} from "react-router-dom"
import Logo  from  "../Profiles/RLogo.png";
import user from "../Profiles/pro.svg"
import icon from "../Profiles/ham.png"

import "bootstrap/dist/css/bootstrap.min.css";

//Create a function component that will show the nav bar of the website
export default function Menu(){
    return (
<Navbar className ="nav">
<Nav>
    <img src ={icon} className="icon" width ="2.9%" alt ="hamburger" /> 
    <img src ={Logo} className="logo" width="2.9% "alt ="logo"/>
    <img src ={user} className="user" width="2.9% "alt ="login/logout"/>
</Nav>

</Navbar>
    );
}
