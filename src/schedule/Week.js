import React, { Component } from 'react';
import DayView from './DayView'

let today = new Date()
today.setHours(0,0,0,0)

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
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Week;