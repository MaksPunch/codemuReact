import React from 'react'

function TaskComponent() {
	const num1 = 3;
	const num2 = 2;
	
	return <div>
		result: {num1 ** num2}
	</div>; // <div> result: 9 </div>
}

export default TaskComponent