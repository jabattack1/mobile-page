import React from 'react';
import hotelStore from './hotel-store.js';
import HotelContainer from './hotel-container.react'; 

var createReactClass = require('create-react-class');



const HotelController = createReactClass({
	
	getInitialState(){
		return this.getState();
	},

	getState(){
		return {
			hotelList: hotelStore._hotelList
		}
	},

	render(){
		
		return (
			<div className='hotel-controller'>
				<HotelContainer {...this.state} />
			</div>
		);
	},

	componentDidMount(){
		hotelStore.addEventListener(this.handleChange);
	},

	handleChange(){
		this.setState(this.getState());
	},

	componentWillUnmount(){
		hotelStore.removeEventListner(this.handleChange);
	}

});

export default HotelController;