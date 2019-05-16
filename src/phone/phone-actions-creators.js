import dispatcher from './phone-dispatcher'

let phoneActionsCreators = {

	changeNewMessage(newMessage){
		let action = {
			type: 'change-new-message',
			payload: {
				content: newMessage
			}	
		};

		dispatcher.dispatch(action);
	},

	submitNewMessage(){
		let action = {
			type: 'submit-new-message'
		}

		dispatcher.dispatch(action);
	}

};

export default phoneActionsCreators;