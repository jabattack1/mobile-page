import React from 'react';
import phoneStore from './phone-store.js';
import PhoneContainer from './phone-container.react'; 

var createReactClass = require('create-react-class');



const PhoneController = createReactClass({
	
	getInitialState(){
		return this.getState();
	},

	getState(){
		return {
			hotelList: phoneStore._hotelList
		}
	},

	render(){
		
		return (
			<div className='phone-controller'>
				<PhoneContainer {...this.state} />
			</div>
		);
	},

	componentDidMount(){
		phoneStore.addEventListener(this.handleChange);
	},

	handleChange(){
		this.setState(this.getState());
	},

	componentWillUnmount(){
		phoneStore.removeEventListner(this.handleChange);
	}

});

export default PhoneController;