import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import Footer from './layout/Footer';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Profile from './Profile';
import Signup from './auth/Signup';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    // GET USER INFO
  }

  getUser = () => {
    // TODO: SEE IF THERE'S A TOKEN
    // IF THERE IS, TRY TO GET USER INFO
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Nav user={this.state.user} />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={
              () => (<Login user={this.state.user} />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
