// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Imports Composants
import TodoList from '../TodoList';

// == Composant
const App = () => {
  return (
    <div className="app">
        <TodoList />
    </div>
  );
}

export default App;
