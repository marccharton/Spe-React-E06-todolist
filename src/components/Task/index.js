// == Import npm
import React from 'react';

// == Styles imports
import './styles.scss';

// == Composant
const Task = ({done, label, id, setIsDone}) => {

  const handleChange = (e) => {
    setIsDone(id, e.target.checked);
  };

  const handleClick = (e) => {
    setIsDone(id, e.target.checked);
  };

  return (
    <li key={id} 
        className={`task__item ${done ? "task__item--done" : ""}`}
        // onClick={handleClick}
        > 
      <input 
        className="pouet"
        type="checkbox"  
        id={id} 
        name={id} 
        onChange={handleChange}
        defaultChecked={done}
      />
      {label} 
    </li>
  )

}  

export default Task;
