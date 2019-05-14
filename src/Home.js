import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText  } from 'reactstrap';

class Home extends Component {
  render() {
	
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

	  let mainContext

	   if (this.props.user){
	   	console.log('PROPS USER TRUE DUDE')
	   		mainContext = (
					<div><h1>THIS WORKED</h1></div>
	   		)
	   }

    return(
    	<div className="container">
       		<Button color="primary" size="lg" block>Start Consultation</Button>
       		<br />
       		{mainContext}
       		<h3>Pending:</h3>
       		<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
		        <CardTitle>Your consultation with Catherine:</CardTitle>
		        <CardText>Consultation is currently being reviewed.  You'll be notified when completed by your stylist, Catherine.</CardText>
		        <Button>Edit</Button>
		      </Card>
		      <br />
       		<h3>Upcoming:</h3>
		      <Card body outline color="primary">
		        <CardTitle>Special Title Treatment</CardTitle>
		        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
		        <Button color="secondary">Button</Button>
		      </Card>
       		<br />
       		<br />
        </div>
      );
  }
}

export default Home;
