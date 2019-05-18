import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Card, CardHeader, CardBody } from 'reactstrap';
import logo from './../chopchop.png';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error:'',
      normalLogin:'Login'
    };
  }

  loginError = () => {
  	console.log("FAILED BITCH")
  	this.setState({error: 'Login failed'})
  	this.setState({normalLogin: ''})

  }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/auth/login`, this.state)
    .then(response => {
      // Take the token from the response and set it in local storage
      localStorage.setItem('serverToken', response.data.token);
      // Update the user state info (in App.js)
      this.props.getUser()
      console.log('hey')
    })
    .catch(error => {
      
      if (error == "Error: Request failed with status code 406" || error == "Error: Request failed with status code 404"){
      	this.loginError()
    	}
    })

  }
  render() {
    if(this.props.user){
      return (<Redirect to="/" />);
    }
    return( 
			<div className="loginCenter">
      		<img src={logo} className="App-logo" alt="logo" />
      			<Card className="loginCard">
	      			<CardHeader>
	      				<span className="normalLogin">{this.state.normalLogin}</span>	<span className="failedLogin">{this.state.error}</span>
	      			</CardHeader>
	      			<CardBody>
		      			<form onSubmit={this.handleSubmit}>
		            <div>
		              <input name="Email" placeholder="What is your email?" value={this.state.email} onChange={this.handleEmailChange} />
		            </div>
		            <div>
		              <input name="Password" placeholder="Enter your password." type="password" value={this.state.password} onChange={this.handlePasswordChange} />
		            </div>
		            <input type="submit" value="Log Me In!" className="button" />
		          </form>
							</CardBody>
       		  </Card>
      	  
        <p className="center loginSingUp">New here? <a href="/signup">Sign up</a></p>
      </div>       
      );
  }
}

export default Login;
