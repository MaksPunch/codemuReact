import React from 'react'

function TaskComponent() {
	const getDigitsSum = (num) => {
		return num.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr))
	}

	return <div>
		<p>{getDigitsSum(12345)}</p>
	</div>
}

export default TaskComponent