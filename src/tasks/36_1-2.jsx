import React from 'react'

function TaskComponent() {
	function func(arg1, arg2, event) {
		console.log(arg1, arg2, event);
	}
	
	return <div>
		<button onClick={event => func('eee', 'adwda', event)}>act</button>
	</div>;
	// в button теге, в событии onClick передается аргумент event, который затем вместе с произвольной строкой передается в функцию func
	// функция func выводит в консоль произвольную строку и объект event
}

export default TaskComponent