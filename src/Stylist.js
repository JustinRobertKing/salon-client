import React, { Component } from 'react'
import ConsultationForm from './Consultation/ConsultationForm'
import Display from './Consultation/Display'

class Stylist extends Component {
	render() {
		return (
			<div>
				Stylist Profile
				<Display />
			</div>
		)
	}
}

export default Stylist