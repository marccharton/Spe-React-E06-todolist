// == Import npm
import React from 'react';

// // == Styles imports
import './styles.scss';

// == Composant
const TaskCounter = ({taskNumber}) => {
  return (
      <div className="task__counter">
        <div className="task__counter__message">
          {(taskNumber <= 1) && `${taskNumber} tâche restante`}
          {(taskNumber > 1) && `${taskNumber} tâches restantes`}
        </div>
        <hr />
      </div>
  )
}

export default TaskCounter;
