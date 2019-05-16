import dispatcher from './hotel-dispatcher';
import {EventEmitter} from 'events';

const hotelStoreChangeEvent = 'hotel-store-change-event';

class HotelStore extends EventEmitter {

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
 		this.emit(hotelStoreChangeEvent);
 	}

 	addEventListener(callback){
 		this.on('hotel-store-change-event', callback);
 	}

 	removeEventListner(callback){
 		this.removeListener(hotelStoreChangeEvent, callback);
 	}

}

let hotelStore = new HotelStore();

export default hotelStore;
