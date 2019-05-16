import dispatcher from './phone-dispatcher';
import {EventEmitter} from 'events';

const chatStoreChangeEvent = 'hone-store-change-event';

class PhoneStore extends EventEmitter {

 	constructor(){
 		super();

 		dispatcher.register(this.handleAction.bind(this));

 		this._newMessage = '';
 		// this._messageList = []
 		this._messageList = [{id:1, content:'hello'}];
 	}

 	get newMessage(){
 		return this._newMessage;
 	}

 	get messageList(){
 		return this._messageList;
 	}

 	handleAction(action){

 		console.log(action.type);

 		switch(action.type){
 			case 'change-new-message':
 			// do something with state here
 				this._newMessage = action.payload.content;
 				this.emitChange();
 				break;

 			case 'submit-new-message':
				this._checkSubmitNewMessage();	
				this.emitChange();
 				break;
 		}
 	}

 	_checkSubmitNewMessage(){
 		if (this._newMessage.trim().length > 0) {
			let message = {
				id: Date.now(),
				content: this._newMessage
			};

			this._messageList.push(message);
			this._newMessage = '';

			// this.setState({
			// 	messageList: this.props.messageList,
			// 	newMessage: ''
			// });
		}
 	}

 	emitChange(){
 		this.emit(chatStoreChangeEvent);
 	}

 	addEventListener(callback){
 		this.on('chat-store-change-event', callback);
 	}

 	removeEventListner(callback){
 		this.removeListener(chatStoreChangeEvent, callback);
 	}

}

let phoneStore = new PhoneStore();

export default phoneStore;
