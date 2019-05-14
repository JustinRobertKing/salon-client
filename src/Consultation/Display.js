import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Display extends Component {
	constructor(props){
    super(props);
    this.state = {
      products: '',
      time: '',
      cost: '',
      stylistComment: ''
    };
  }

  handleProductsChange = (e) => { this.setState({ products: e.target.value }); }

  handleTimeChange = (e) => { this.setState({ time: e.target.value }); }

  handleCostChange = (e) => { this.setState({ cost: e.target.value }); }

  handleStylistCommentChange = (e) => { this.setState({ stylistComment: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('HERE - handle submit', this.state)
    let token = localStorage.getItem('serverToken');
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/consultation/display`, this.state, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response => {
    	console.log('consultation response', response)
    })
    .catch(error => {
      console.log('error', error)
    })
  }

	render() {
		return (
			<div>
				<hr />
				<Carousel>
          <div>
            <img src="https://thecentraltrend.com/wp-content/uploads/2019/02/caramel-melt.jpg" />
            <p className="legend">Before 1</p>
          </div>
          <div>
            <img src="https://thecentraltrend.com/wp-content/uploads/2019/02/caramel-melt.jpg" />
            <p className="legend">Before 2</p>
          </div>
          <div>
            <img src="https://thecentraltrend.com/wp-content/uploads/2019/02/caramel-melt.jpg" />
            <p className="legend">Before 3</p>
          </div>
        </Carousel>
				<hr />
				<Carousel>
          <div>
            <img src="https://thecentraltrend.com/wp-content/uploads/2019/02/caramel-melt.jpg" />
            <p className="legend">Dream 1</p>
          </div>
          <div>
            <img src="https://thecentraltrend.com/wp-content/uploads/2019/02/caramel-melt.jpg" />
            <p className="legend">Dream 2</p>
          </div>
          <div>
            <img src="https://thecentraltrend.com/wp-content/uploads/2019/02/caramel-melt.jpg" />
            <p className="legend">Dream 3</p>
          </div>
        </Carousel>
				<hr />
				<p>Kevin pork chop meatloaf ball tip, pork loin ham bacon. Ground round andouille jowl landjaeger meatloaf frankfurter doner swine cow chuck prosciutto. Chicken ham hamburger sausage, fatback cow sirloin rump meatball ham hock pork loin kevin porchetta flank. Burgdoggen venison hamburger short ribs, sausage ham jerky tongue beef ribs rump doner filet mignon. Venison ribeye bresaola tri-tip, biltong pastrami prosciutto kielbasa pork loin swine capicola brisket hamburger doner.
				</p>
				<Form onSubmit={this.handleSubmit}>
	        <FormGroup>
	          <Label for="products">Products</Label>
	          <Input type="text" name="products" id="products" value={this.state.products} onChange={this.handleProductsChange}/>
	        </FormGroup>
	        <FormGroup>
	          <Label for="time">Time Required</Label>
	          <Input type="text" name="time" id="time" value={this.state.time} onChange={this.handleTimeChange}/>
	        </FormGroup>
	        <FormGroup>
          <Label for="time">Time Required</Label>
          <Input type="select" name="time" id="time">
            <option>-:--</option>
            <option>0:15</option>
            <option>0:30</option>
            <option>0:45</option>
            <option>1:00</option>
            <option>1:15</option>
            <option>1:30</option>
            <option>1:45</option>
            <option>2:00</option>
            <option>2:15</option>
            <option>2:30</option>
            <option>2:45</option>
            <option>3:00</option>
            <option>3:15</option>
            <option>3:30</option>
            <option>3:45</option>
            <option>4:00</option>
            <option>4:15</option>
            <option>4:30</option>
            <option>4:45</option>
            <option>5:00</option>
            <option>5:15</option>
            <option>5:30</option>
            <option>5:45</option>
            <option>6:00</option>
            <option>6:15</option>
            <option>6:30</option>
            <option>6:45</option>
            <option>7:00</option>
            <option>7:15</option>
            <option>7:30</option>
            <option>7:45</option>
            <option>8:00</option>
          </Input>
        </FormGroup>
 					<FormGroup>
	          <Label for="cost">Estimated Cost</Label>
	          <Input type="text" name="cost" id="cost" value={this.state.cost} onChange={this.handleCostChange}/>
	        </FormGroup>
	       {/* <FormGroup check>
	          <Label check>
	            <Input type="checkbox" name="cut" value="cut"/>{' '}
	            Cut
	          </Label>
	        </FormGroup>
	        <FormGroup check>
	          <Label check>
	            <Input type="checkbox" name="color" value="color"/>{' '}
	            Color
	          </Label>
	        </FormGroup>*/}
	        <FormGroup>
	          <Label for="stylistComment">Process Description</Label>
	          <Input type="textarea" name="stylistComment" id="stylistComment" value={this.state.stylistComment} onChange={this.handleStylistCommentChange}/>
	        </FormGroup>
	        <Button type="submit">Submit</Button>
	      </Form>
			</div>
		)
	}
}

export default Display