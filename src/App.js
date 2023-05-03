import React, { Component } from "react";
import './App.css';
import Home from "./pages/home/Home";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Contact from './pages/contact/Contact';
import Resturants from './pages/resturants/Resturants';
import Footer from "./components/footer/Footer";
import Partenrs from "./pages/parteners/Partenrs";
class App extends Component{
     
  render() {
  
   
    return (
      <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/resturants" element = {<Resturants/>} />
      <Route path="/partener" element = {<Partenrs/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>  
      </div>
    )
  }
}
export default App;