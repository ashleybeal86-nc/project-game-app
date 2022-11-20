import React from 'react';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
import LoginForm from './Components/Pages/LoginForm';
import SignUpForm from './Components/Pages/SignUpForm';
import NavBar from './Components/Pages/NavBar';

function App(){
return (
  <div className="App">
      <h1 className="title">Our Game Arcade</h1>
      <Home />
      <Login />
      <SignUp />
      <ContactUs />
      <AboutUs />
      <Games />
    </div>
  );
}

export default App;