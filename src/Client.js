import React, { Component } from 'react'
import ConsultationForm from './Consultation/ConsultationForm'

class Client extends Component {
	render() {
		return (
			<div>
				Client Profile

				<ConsultationForm />
			</div>
		)
	}
}

export default Client