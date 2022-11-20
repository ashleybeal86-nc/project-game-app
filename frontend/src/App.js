import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
import LoginForm from './Components/Pages/LoginForm';
import SignUpForm from './Components/Pages/SignUpForm';
import NavBar from './Components/NavBar';

function App() {
/*{  const games = ['TicTacToe', 'Hangman' '_']       }*/
return (
  <div className="App">
    <Router>
      <header>
        <h1 className="title">Welcome to Our Arcade Game Site</h1>
        <div className="NavBar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/games">Our Games</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
              <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            </li>
          </ul>
        </div>
      </header>

      <div className="display">
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/games" render={() => <Games games={games}/>}  />
      </div>

    </Router>

  </div>
);
}

export default App;