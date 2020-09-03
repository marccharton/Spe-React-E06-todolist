// == Import npm
import React from 'react';

// // == Styles imports
import './styles.scss';

// == Composant
const InputTask = ({content, setTaskContent, addTask}) => {

  const handleChange = (e) => setTaskContent(e.target);
  const onKeyDown = (e) => {
    if(e.keyCode == 13){
      addTask(e.target.value);
    }
  }

  return (
      <input 
        className="task__input"
        type="text"  
        onChange={handleChange}
        onKeyDown={onKeyDown}
        value={content}
      />
  )

}  

export default InputTask;
