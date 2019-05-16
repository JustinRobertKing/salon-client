import React, { Component } from 'react';
import Stylist from './Stylist';
import Client from './Client'
import { Redirect } from 'react-router-dom';


class Home extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	      user: null
	    }
	}

  render() {
		if (this.props.user && this.props.user.stylist) {
			return(
				<Stylist 
					user={this.props.user}
				/>)
		} else if (this.props.user) {
			return(
				<Client 
					user={this.props.user}
				/>)
		}

			/*
	    			if statement - 
	    				check if they have an appointment booked.  
	    						If yes
	    							draw the show scheduled appointment component
	    						if no 
				    				check if they have an approved consultation
				    						if yes 
				    							draw component to schedule the appointment
				    						if no
				    							check if they have a consultation pending
				    								if yes
				    									show the edit consultation box
				    								if no
				    									draw start consultation button
			*/

		//not logged in, render login component
		return (<Redirect to="/login" />);
  }
}

export default Home;
