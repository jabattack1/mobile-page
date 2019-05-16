import React from 'react';
import phoneActionsCreators from './phone-actions-creators';

var createReactClass = require('create-react-class');



const PhoneContainer = createReactClass({


	render() {

		require('./phone.scss');
		return (
			<div className='cover'>
				<div className='heading'>
					<a className='backButton'>&#60; Back</a>
					<span>Hotel Details</span>
					<img src='https://i.imgur.com/ekZpAld.png' className='headingLogo'/>
				</div>
				<figure className='figure'>
					<div className='wrap'>
						{this._renderHotel()}
					</div>
				</figure>
			</div>
		);
	},


	_renderHotel() {
		if (this.props.hotelList.length === 0) {
			return <span>No messages</span>;
		}
		else{
			return this.props.hotelList.map(function(hotel){
				return (
					<div key={hotel.id} className='hotel'>
						<img src={hotel.photo} alt={hotel.name} className='hotelPhoto'/>
						<p className='hotelName'>{hotel.name}</p>
						<p className='hotelAddress'>{hotel.address}</p>
						<p className='hotelLocation'>{hotel.city}, {hotel.state}, {hotel.zip}</p>
						<a className='hotelNumber' href={`tel: ${ hotel.phone }`}>{hotel.phone}</a>
					</div>
				);
			});
		}
	},

	_handleChange(event) {
		phoneActionsCreators.changeNewMessage(event.target.value);
	},

	_submitMessage() {
		phoneActionsCreators.submitNewMessage();
	},

	_checkKeyPress(event) {
		if (event.key === 'Enter') {
			this._submitMessage();
		}
	},

	_focus(inputDomElement) {
		inputDomElement.focus();
	},

	componentDidUpdate() {
		this.refs.messagesDiv.scrollTop = this.refs.messagesDiv.scrollHeight;
	},

	_renderMessageCount() {
		return <span>Message count: {this.props.messageList.length}</span>
	}
});

export default PhoneContainer;
