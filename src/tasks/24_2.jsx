import React from 'react'

function TaskComponent() {
	const name = 'john';
	const surname = 'smit';
	
	return <div>
		result: {name + ' ' + surname}
	</div>; // получится <div> result: john smit </div>
}

export default TaskComponent