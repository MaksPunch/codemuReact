import React from 'react'

function TaskComponent() {
	const getDigitsSum = (num) => {
		return num.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr))
	}
	// сначала число преобразуется в строку, которая потом раскалывается на массив из символов.
	// По этому массиву проходится функция reduce, которая подсчитывает сумму знаков числа

	let digitsSum = getDigitsSum(123);

	return <div>
		{digitsSum}
	</div>
}

export default TaskComponent