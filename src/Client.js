import React, { Component } from 'react'
import ConsultationForm from './Consultation/ConsultationForm'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class Client extends Component {




	render() {
		return (
			<div className="container">
				<h1>Client Home</h1>
				
				<div id="consultations">
					<Button color="primary" block id="toggler" style={{ marginBottom: '1rem' }}>
	     			START CONSULTATION
	    		</Button>
			    <UncontrolledCollapse toggler="#toggler">
			         <ConsultationForm />
			    </UncontrolledCollapse>
		    </div>

			</div>
		)
	}
}

export default Client