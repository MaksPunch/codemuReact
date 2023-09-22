import React from 'react'

function TaskComponent() {
	const isAuth = false;

	// если isAuth === false, то выведет текст, если нет, то не выведет. Работает из-за оператора не !
	
	return <div>
		{!isAuth && <p>пожалуйста, авторизуйтесь</p>}
	</div>;
}

export default TaskComponent