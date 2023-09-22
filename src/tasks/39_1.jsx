import React from 'react'

function TaskComponent() {
	const arr = ['a', 'b', 'c', 'd', 'e'];

	const res = arr.map(function(item) {
		return <li>{item}</li>;
	});

	return <ul>
		{res}
	</ul>
}

export default TaskComponent