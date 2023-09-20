
import React from 'react'

function TaskComponent() {
	const arr = [1, 2, 3, 4, 5];

	return (
		<ul>
			<li>{arr[0]}</li>
			<li>{arr[1]}</li>
			<li>{arr[2]}</li>
			<li>{arr[3]}</li>
			<li>{arr[4]}</li>
		</ul>
	)
  // Добавил тег ul, в котором находятся теги li, каждый с элементом массива
}

export default TaskComponent