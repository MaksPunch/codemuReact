import React from 'react'

function TaskComponent() {
	const isAdult = true;
	let text;
	// если isAdult === true, то он запишет в переменную текст абзац с одним текстом, а если нет, то с другим. 
	// Переменная text затем используется в блоке div

	if (isAdult) {
		text = <p>Пользователю больше 18 лет</p>
	} else {
		text = <p>Пользователю нет 18 лет</p>
	}

	return <div>
		{text}
	</div>;
}

export default TaskComponent