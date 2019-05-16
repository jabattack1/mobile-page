import React from 'react';
import phoneActionsCreators from './phone-actions-creators';

var createReactClass = require('create-react-class');



const PhoneContainer = createReactClass({

	// getInitialState() {
	// 	return {
	// 		messageList: []
	// 	};
	// },

	render() {

		require('./phone.scss');

		return (
			<div className="chat-container">
				<div className="messages" ref="messagesDiv">
					{this._renderMessages()}
				</div>
				<div className="message-input">
					<input
						type="text"
						placeholder="Type here"
						value={this.props.newMessage}
						onChange={this._handleChange}
						onKeyPress={this._checkKeyPress}
						ref={this._focus}/>
				</div>
				<div className="message-button">
					<button onClick={this._submitMessage}>Submit</button>
				</div>
				// <div className="count">
				// 	{this._renderMessageCount()}
				// </div>
			</div>
		);
	},


	_renderMessages() {
		if (this.props.messageList.length === 0) {
			return <span>No messages</span>;
		}
		// else {
		// 	return this.props.messageList.map(message => {
		// 		return <div className="message" key={message.id}>{message.content}</div>
		// 	});
		// }
		else{
			return this.props.messageList.map(function(message){
				console.log('message');
				console.log(message);
				return <div key={message.id} className='message'>{message.content}</div>
			});
		}
	},

	_handleChange(event) {
		phoneActionsCreators.changeNewMessage(event.target.value);
		// this.setState({
		// 	newMessage: event.target.value
		// });
	},

	_submitMessage() {
		phoneActionsCreators.submitNewMessage();

		// if (this.props.newMessage.trim().length > 0) {
		// 	let message = {
		// 		id: Date.now(),
		// 		content: this.props.newMessage
		// 	};

		// 	this.props.messageList.push(message);

		// 	this.setState({
		// 		messageList: this.props.messageList,
		// 		newMessage: ''
		// 	});
		// }
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
