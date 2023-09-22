import React from 'react'
import { nanoid } from 'nanoid'
import uuid from 'react-uuid';

function TaskComponent() {
	let nanoidStr = nanoid();
	let react_uuid = uuid();
	
	return <div>
		<p>nanoid <span>{nanoidStr}</span></p>
		<p>react-uuid <span>{react_uuid}</span></p>
	</div>;
}

export default TaskComponent