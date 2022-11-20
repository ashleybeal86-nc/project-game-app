import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
import LoginForm from './Components/Pages/LoginForm';
import SignUpForm from './Components/Pages/SignUpForm';
import NavBar from './Components/Pages/NavBar';


export default function App() {
  /*{    const games = ['TicTacToe', 'Hangman', '__']     }*/
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Our Arcade Game Site</h1>
          <div className="Nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
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
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </header>

        <div className="routedisplay">
          <Switch>
            <Route path="/" component={HomePage} />
            <Home />
          </Switch>
          <Switch>
            <Route path="/about" component={AboutUs} />
            <About />
          </Switch>
          <Switch>
            <Route path="/contact" component={ContactUs} />
            <Contact />
          </Switch>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Login />
          </Switch>
          <Switch>
            <Route path="/signup" component={SignUpForm} />
            <Signup />
          </Switch>
          <Switch>
            <Route path="/games" render={() => <Games games={games} />} />
            <Games />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

