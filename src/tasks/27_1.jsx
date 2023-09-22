import React from 'react'

function TaskComponent() {
	const isAdmin = true;
	let text;
	// если isAdmin === true, то он запишет в переменную текст абзац с одним текстом, а если нет, то пустую строку. 
	// Переменная text затем используется в блоке div

	if (isAdmin) {
		text = <div>
			<p>Абзац</p>
			<p>Абзац</p>
			<p>Абзац</p>
			<p>Абзац</p>
		</div>
	} else {
		text = '';
	}

	return <div>
		{text}
	</div>;
}

export default TaskComponent