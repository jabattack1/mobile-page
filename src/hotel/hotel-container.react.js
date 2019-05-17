import React from 'react';
import hotelActionsCreators from './hotel-actions-creators';

var createReactClass = require('create-react-class');



const hotelContainer = createReactClass({


	render() {

		require('./hotel.scss');
		return (
			<div className='cover'>
				<div className='heading'>
					<a className='backButton'>&#60; Back</a>
					<span className='title'>Hotel Details</span>
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
						<p className='hotelAddress'>{hotel.city}, {hotel.state}, {hotel.zip}</p>
						<a className='hotelNumber' href={`tel: ${ hotel.phone }`}>{hotel.phone}</a>

						<div className='options'>
							<a className='mapLink' href='maps'>Map<span className='larrow'>&#62;</span></a>
							<a className='photoLink' href='photos'>Photo gallery<span className='larrow'>&#62;</span></a>
							<a className='amenitiesLink' href='amenities'>Amenities<span className='larrow'>&#62;</span></a>
						</div>
					</div>
				);
			});
		}
	},

	_handleChange(event) {
		hotelActionsCreators.changeNewMessage(event.target.value);
	},

	_submitMessage() {
		hotelActionsCreators.submitNewMessage();
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

export default hotelContainer;
