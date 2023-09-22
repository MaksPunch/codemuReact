import React from 'react'

function TaskComponent() {

	const act1 = (text) => {
		alert(text)
	}

	return <div>
		<button onClick={() => act1(1)}>act1</button>
		<button onClick={() => act1(2)}>act2</button>
		<button onClick={() => act1(3)}>act3</button>
	</div>;
}

export default TaskComponent