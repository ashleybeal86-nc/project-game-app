import React from 'react';
import './App.css';
import Home from './Components/Pages/HomePage';
import About from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
import Login from './Components/Pages/LoginForm';
import ForgotPassword from './Components/Pages/ForgotPassword';

function App(){
return (
  <div className="App">
    <header>
      <h1 className="title">Our Game Arcade</h1>

      <div className="navBar">
        <ul>
          <li>
            <a href={<Home />}>Home</a>
          </li>
          <li>
            <a href={<About />}>About Us</a>
          </li>
          <li>
            <a href={<ContactUs />}>Contact Us</a>
          </li>
          <li>
            <a href={<Login />}>Login</a>
          </li>
          <li>
            <a href={<Games/>}>Our Games</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
);
}

export default App;