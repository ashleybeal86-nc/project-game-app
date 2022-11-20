import React from 'react';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
import LoginForm from './Components/Pages/LoginForm';
import SignUpForm from './Components/Pages/SignUpForm';


function App(){
return (
  <div className="App">
    <header>
      <h1 className="title">Our Game Arcade</h1>

      <div className="navBar">
        <ul>
          <li>
            <a href={<HomePage />}>Home</a>
          </li>
          <li>
            <a href={<AboutUs />}>About Us</a>
          </li>
          <li>
            <a href={<ContactUs />}>Contact Us</a>
          </li>
          <li>
            <a href={<LoginForm />}>Login</a>
          </li>
          <li>
            <a href={<SignUpForm />}>Sign Up</a>
          </li>
          <li>
            <a href={<Games />}>Our Games</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
);
}

export default App;