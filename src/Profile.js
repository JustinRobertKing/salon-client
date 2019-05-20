import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';

class Profile extends Component {
	state = {
		stylistName: '',
		clientNames: '',
	}
	handleLogout = (e) => {
    e.preventDefault();
    // REMOVE LS TOKEN; UPDATE PARENT STATE
    localStorage.removeItem('serverToken')
    this.props.resetUser()
    //redirect to home
  }
  getStylist = () =>{
  	console.log('getting stylist for: ',this.props.user)
    let token = localStorage.getItem('serverToken');
    // console.log(token)
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/landing/profile/client`, { userId: this.props.user },
    	{
      	headers: {
        	'Authorization' : `Bearer ${token}`}
      }
    )
    .then(response=>{
    	console.log('--------response---stylist------',response)
    	if (response.data.stylist){
    		let stylistName = response.data.stylist.user.firstname + response.data.stylist.user.lastname
    		this.setState({stylistName: stylistName})
    	}
    	// console.log(this.state.stylistName)
    })
  }

  getClients = () =>{
  	console.log('getting client for: ',this.props.user)
    let token = localStorage.getItem('serverToken');
    console.log(token)
    // SEND DATA TO SERVER
    axios.get(`${SERVER_URL}/landing/profile/stylist`, 
    	{
      	headers: {
        	'Authorization' : `Bearer ${token}`}
      }
    )
    .then(response=>{
    	console.log('--------response---------',response)
    	let clientNames = response.data.client
    	console.log(clientNames)
    	// .user.firstname + response.data.client.user.lastname
    	// this.setState({clientNames: clientNames})
    	// console.log(this.state.client)
    })
  }
componentDidMount(){
	// console.log('test', this.props.user.stylist)
	if (this.props.user) {
		{!this.props.user.stylist ? this.getStylist() :	this.getClients()}
	}
	
}


  render() {

    if (this.props.user) {
      return(

        <div className="container">
        <div>
        	<h1>Your Profile</h1>
        </div>
          <div>
          	<h5 className="inlineStuff thin">First name:</h5><h4 className="inlineStuff"> {this.props.user.firstname}</h4>
          </div>
          <div>
          	<h5 className="inlineStuff thin">Last name: </h5><h4 className="inlineStuff">{this.props.user.lastname}</h4>
          </div>
          <div>
          	<h5 className="inlineStuff thin">Referral: </h5><h4 className="inlineStuff">{this.props.user.referral}</h4>
          </div>
          <div>
          	<h5 className="inlineStuff thin">Phone: </h5><h4 className="inlineStuff">{this.props.user.phone}</h4>
          </div>
          <div>
          	<h5 className="inlineStuff thin">E-mail: </h5><h4 className="inlineStuff">{this.props.user.email}</h4>
          </div>
           {this.props.user && !this.props.user.stylist ? <div><h5 className="inlineStuff thin">Stylist: </h5><h4 className="inlineStuff">{this.state.stylistName}</h4></div> : <div><h5 className="inlineStuff thin">Clients: </h5><h4 className="inlineStuff">{this.state.clientNames}</h4></div>}
                    <hr />

          <a href='/logout' className="tall" onClick={this.handleLogout}>Logout</a>
          <br />
          <br />
        </div>
      )
    }
    return(
      <Redirect to="/" />
    );
  }
}

export default Profile;
