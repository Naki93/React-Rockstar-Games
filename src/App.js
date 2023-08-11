import logo from './logo.svg';
import './App.css';
import {Nav, Navbar} from "react-bootstrap"
import Logo  from  "./Profiles/RLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu/Menu.js"
import Display from './Display/Display';
import Main from './Main/Main';
import Section from './Section/Section';
import Footer from "./Footer/Footer.js"

//Export all data containing info within a card
export const data = {
  brand: "GTA Online",
  date: "June 13, 2023",
  date2: "June 9, 2023",
  date3: "June 8, 2023",
  date4: "June 6, 2023",
  description: "Become a Charter Member of The VineWood Club and Get The New Maibatsu MonstroCiti With GTA+",
  description2:"GTA Online: San Andreas Mecenaries Now Available",
  description3: "The VineWood Vine Club",
  description4:"Experience Improvements Coming To GTA Online",
  description5:"Flight-Themed Bonuses Continue To Soar Through June",
  description6:"Watch The Trailer For GTA Online: San Andreas Mecenaries"
  
};

export const footer ={
  contact: ["Contact", "Careers", "Subscribe"]
}


function App() {
  return (
    
    <div className="App">     
     <Menu/>
      <Display/>
      <Main details={data}/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
