import React from 'react'

function TaskComponent() {
	const isAuth = true;

	// если isAuth === true, то выведет текст, если нет, то не выведет
	
	return <div>
		{isAuth && <p>вы авторизованы</p>}
	</div>;
}

export default TaskComponent