
import React from 'react'

function TaskComponent() {
  const name = 'user';
	const age  = '30';
	
	return <div>
		name: {name}
		age: {age}
	</div>;
  // Добавил переменную name к тексту name:, аналогично с age
}

export default TaskComponent