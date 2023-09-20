import React from 'react'

function TaskComponent() {
	const items = <>
		<li>text1</li><li>text2</li><li>text3</li>
	</>; // Добавил родительский тег <></>
	
	return <ul>
		{items}
	</ul>
}

export default TaskComponent