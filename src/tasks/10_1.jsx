
import React from 'react'

function TaskComponent() {
    // Для того, чтобы это работало надо обернуть теги в другой тег, либо пустой <></>, либо в div
    return (
    <div>
      <>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
      </> 
        {/* первый вариант */}
      <div>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
        {/* второй вариант */}
      </div>
    </div>
    
    );
}

export default TaskComponent