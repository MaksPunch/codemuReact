import React from 'react'

function TaskComponent() {
	const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;
	
	return <ul>
		{li1}
		{li2}
		{li3}
	</ul>;
	// Добавил переменные в тег ul, в переменной также можно хранить и теги
}

export default TaskComponent