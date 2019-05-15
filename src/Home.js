import React, { Component } from 'react';
import Stylist from './Stylist';
import Client from './Client'

class Home extends Component {
  render() {
	if (this.props.user && this.props.user.stylist) {
		return(<Stylist />)
	} else if (this.props.user) {
		return(<Client />)
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
return(
      <div className="container">
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
    );
	  
  }
}

export default Home;
