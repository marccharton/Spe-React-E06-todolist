// == Import npm
import React from 'react';

// == Styles imports
import './styles.scss';

// == Import data
import taskList from 'src/data/tasks';

// == Imports Composants
import TaskList from '../TaskList';
import InputTask from '../InputTask';
import TaskCounter from '../TaskCounter';

// == Composant
class TodoList extends React.Component {

  state = {
    taskList: taskList,
    newTaskContent: "",
  }


  getTaskDoneCount() {
    return this.state.taskList.reduce((acc, task) => acc + !task.done, 0);
  }

  setIsDone = (id, isDone) => {
    const { taskList } = this.state;

    const newTaskList = [...taskList];
    const task = newTaskList.find((t) => t.id === id);
    task.done = isDone;

    this.setState({
      ...this.state,
      taskList: newTaskList
    });
  }

  setTaskContent = (input) => {
    this.setState({
      ...this.state,
      newTaskContent: input.value
    })
  }

  addTask = (taskContent) => {
    const { taskList } = this.state;
    let newTaskList = [...taskList];

    newTaskList.unshift({
      id: Math.floor(Math.random() * 1000),
      label: taskContent,
      done: false,
    });

    this.setState({
      ...this.state,
      newTaskContent: "",
      taskList: newTaskList,
    })
  }
  
  render() {
    return (
      <>
        <InputTask 
          content={this.state.newTaskContent} 
          setTaskContent={this.setTaskContent}
          addTask={this.addTask}
        />
        <TaskCounter 
          taskNumber={this.getTaskDoneCount()}
        />
        <TaskList 
          className="todolist"
          taskList={this.state.taskList} 
          setIsDone={this.setIsDone} 
        />
      </>
    )
  }

}  

export default TodoList;
