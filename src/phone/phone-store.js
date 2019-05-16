import dispatcher from './phone-dispatcher';
import {EventEmitter} from 'events';

const chatStoreChangeEvent = 'hone-store-change-event';

class PhoneStore extends EventEmitter {

 	constructor(){
 		super();

 		dispatcher.register(this.handleAction.bind(this));


 		this._hotelList = [{id:1, photo:'https://i.imgur.com/PoQv7Oj.jpg', name:'Hilton Chicago', address:'720 South Michigan Avenue', city:'Chicago', state:'Illinois', zip:'60605', phone:'1-312-922-4400'}];
 	}



 	handleAction(action){
 	}

 	_checkSubmitNewMessage(){

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
