import React from 'react'
import { nanoid } from 'nanoid'
import uuid from 'react-uuid';

function TaskComponent() {
	function id() {
		return nanoid();
	}

	function idUuid() {
		return uuid();
	}
	let nanoidStr = id();
	let react_uuid = idUuid();
	
	return <div>
		<p>nanoid <span>{nanoidStr}</span></p>
		<p>react-uuid <span>{react_uuid}</span></p>
	</div>;
}

export default TaskComponent