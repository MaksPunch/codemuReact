import React from 'react'

function TaskComponent() {
	const obj = {name: 'john', surname: 'smit'};

	return (
		<p>
			name:    <span>{obj.name}</span>, <br/>
			surname: <span>{obj.surname}</span>, 
		</p>
	)
  // Добавил в span теги свойства объекта
}

export default TaskComponent