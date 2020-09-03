// == Import npm
import React from 'react';

// == Styles imports
import './styles.scss';

// == Imports Composants
import Task from '../Task';

// == Composant
const TaskList = ({taskList, setIsDone}) => {

  const sortList = (list) => list.sort((x, y) => (x.done === y.done)? 0 : x.done? 1 : -1);

  return (<div> 
    <ul>
    {
      sortList(taskList)
        .map((task) => (
          <Task 
            key={task.id}
            { ...task } 
            setIsDone={setIsDone}
          />
        ))
    } 
    </ul>
  </div>)

}  

export default TaskList;
