import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Profile from './Profile';
import Signup from './auth/Signup';
import Week from './schedule/Week';
import Display from './Consultation/Display';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCog, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCog, faKey);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    // GET USER INFO
    this.getUser()
  }

  resetUser = () => {
    this.setState({ user: null })
  }

  getUser = () => {
    // SEE IF THERE'S A TOKEN
    let token = localStorage.getItem('serverToken');
    if (token) {
      axios.post(`${SERVER_URL}/auth/current/user`, {}, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response)
        this.setState({ user: response.data.user });
      })
      .catch(error => {
        console.log('error', error);
        this.resetUser()
      })
    } else {
      console.log('No token')
    }
    // IF THERE IS, TRY TO GET USER INFO
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div >
            <Nav user={this.state.user} resetUser={this.resetUser} />
        	<div className="container1">
        		<Route path="/" exact component={
	              () => (<Home user={this.state.user} getUser={this.getUser} />)
	            } />
	            <Route path="/schedule"  component={
	              () => (<Week user={this.state.user} getUser={this.getUser} />)
	            } />
	            <Route path="/login" component={
	              () => (<Login user={this.state.user} getUser={this.getUser} />)
	            } />
	            <Route path="/signup" component={
	              () => (<Signup user={this.state.user} getUser={this.getUser} />)
	            } />
	            <Route path="/profile" component={
	              () => (<Profile user={this.state.user} resetUser={this.resetUser} />)
	            } />
              <Route path="/consultation/display" component={
                () => (<Display user={this.state.user} getUser={this.getUser} />)
              } />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App
