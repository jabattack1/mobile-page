import React from 'react';

function MessageCount({messageList}) {
	return (
		<div className='count'>
			<span>Message count: {messageList.length}</span>
		</div>
		);
}

export default MessageCount;