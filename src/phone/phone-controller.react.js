import React from 'react';
import phoneStore from './phone-store.js';
import PhoneContainer from './phone-container.react'; 
import PhoneMetrics from './phone-metrics.react';

var createReactClass = require('create-react-class');



const PhoneController = createReactClass({
	
	getInitialState(){
		return this.getState();
	},

	getState(){
		return {
			newMessage: phoneStore.newMessage,
			messageList: phoneStore.messageList
		}
	},

	render(){
		// return <ChatContainer newMessage={this.state.newMessage} messageList={this.state.messageList />;
		return (
			<div className='chat-controller'>
			<PhoneContainer {...this.state} />
			<PhoneMetrics {...this.state} />
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