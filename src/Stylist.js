import React, { Component } from 'react'
import Display from './Consultation/Display'
import { UncontrolledCollapse, Button } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from './constants/server';

class Stylist extends Component {
	 state = {
    consultations: [],
    current: {}
  }

  componentDidMount() {
    this.getConsultations()
  }

  getConsultations = () => {
  	
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/landing`, {userId:this.props.user},
    	{
      	headers: {
        	'Authorization' : `Bearer ${token}`}
      }
      
    )
    .then(response => {
      console.log('consultation response', response)
      this.setState({ consultations: response.data})
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  setCurrentConsultation = (consultation) => {
    this.setState({ current: consultation })
  }
	render() {
		let requests = this.state.consultations.map((consultation, index) => {
        
    // console.log("HEY",consultation.client.user.email)

				return (

          <div key={index}>
            <Button color="primary" id={'toggler' + index} block style={{ border: '1px solid white', borderRadius: 0 }}>
              hey
            </Button>
            <UncontrolledCollapse toggler={'#toggler' + index}>
              <Display 
                consultation={consultation}
                rerender={this.getConsultations}
                setCurrentConsultation={this.setCurrentConsultation}
                currentId={this.state.current._id}
              />
            </UncontrolledCollapse>
          </div>
        )
      })
      return(
        <div className="container">
          <h2>Stylist Page</h2>
          <hr />
          <h4>Pending Consultations</h4>
          {requests}
          <hr />
          <h4>Appointment Requests</h4>
          <br />
          <br />
        </div>
      );
    }
}

export default Stylist