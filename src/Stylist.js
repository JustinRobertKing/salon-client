import React, { Component } from 'react'
import Display from './Consultation/Display'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
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
    axios.get(`${SERVER_URL}/profile`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
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
        return (
          <div key={index}>
            <Button color="primary" id={'toggler' + index} block style={{ marginBottom: '.5rem' }}>
              Toggle
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
          <h4>Stylist Page</h4>
          <hr />
          <h4>Pending Consultations</h4>
          {requests}
          <hr />
{/*          <Stylist />
*/}          <br />
          <br />
          <br />
        </div>
      );
    }
}

export default Stylist