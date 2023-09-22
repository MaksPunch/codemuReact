import React from 'react'

function TaskComponent() {
	function func(event) {
		console.log(event);
	}
	
	return <div>
		<button onClick={func}>act</button>
	</div>;
}

export default TaskComponent