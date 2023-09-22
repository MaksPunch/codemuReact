import React from 'react'

function TaskComponent() {
	const age = 19;
	//Если age > 18, то выведет один абзац с текстом, а если меньше, то другой
	
	return <div>
		{age > 18 ? <p>Пользователю больше 18 лет</p> : <p>Пользователю нет 18 лет</p>}
	</div>;
}

export default TaskComponent