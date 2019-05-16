import React from 'react';
import PhoneController from './phone-controller.react';


export default function({ newMessage, messageList}) {

	let timeOfLastMessage ='N/A'

	if(messageList.length > 0 ){
		let lastMessage = messageList[messageList.length-1];
		let lastMessageDate = new Date(lastMessage.id);
		timeOfLastMessage = lastMessageDate.toLocaleTimeString();
	}

	return(
		<div className='chat-metrics'>
			<table>
				<tbody>
					<tr>
						<td>Number of Characters:</td>
						<td className='right'>{newMessage.length}</td>
					</tr>
					<tr>
						<td>Number of Messages</td>
						<td className='left'>{messageList.length}</td>
					</tr>
					<tr>
						<td>Time of Last Messsage:</td>
						<td className=''>{timeOfLastMessage}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};