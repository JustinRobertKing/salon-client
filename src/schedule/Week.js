import React, { Component } from 'react';
import DayView from './DayView'
import { Row, Col, Card, CardHeader, CardBody, UncontrolledCollapse, Button } from 'reactstrap';

let today = new Date()
today.setHours(0,0,0,0)
let aDay = 86400

class Week extends Component {
	state = {
  	todayStamp: Date.parse(today),
  	todayDisplay: today.toLocaleDateString(),
  }

  render() {
    return(
			<div>
				<DayView 
        	setDate={this.setDate} 
        	user={this.props.user} 
        	todayStamp={this.state.todayStamp} 
        	day="0"
        />
        <DayView 
        	setDate={this.setDate} 
        	user={this.props.user} 
        	todayStamp={this.state.todayStamp} 
        	day="1"
        />
        <DayView 
        	setDate={this.setDate} 
        	user={this.props.user} 
        	todayStamp={this.state.todayStamp} 
        	day="2"
        />
        <DayView 
        	setDate={this.setDate} 
        	user={this.props.user} 
        	todayStamp={this.state.todayStamp} 
        	day="3"
        />
        <DayView 
        	setDate={this.setDate} 
        	user={this.props.user} 
        	todayStamp={this.state.todayStamp} 
        	day="4"
        />
        <DayView 
        	setDate={this.setDate} 
        	user={this.props.user} 
        	todayStamp={this.state.todayStamp} 
        	day="5"
        />
        <DayView 
        	setDate={this.setDate} 
        	user={this.props.user} 
        	todayStamp={this.state.todayStamp} 
        	day="6"
        />
      </div>
    );
  }
}

export default Week;