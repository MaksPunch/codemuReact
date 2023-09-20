import React from 'react'

function TaskComponent() {
	const num = 4;
	
	return <div>
		result: {Math.sqrt(num)}
	</div>; // получится <div> result: 2 </div>
}

export default TaskComponent