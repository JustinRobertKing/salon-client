import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText  } from 'reactstrap';

class Home extends Component {
  render() {
    return(
    	<div>
       		<Button color="primary" size="lg" block>Start Consultation</Button>
       		<br />
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
