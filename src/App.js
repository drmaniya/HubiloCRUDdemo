import React from 'react';
import Provider from './Component/Form';
import List from './Component/List';
import TaskForm from './Component/TaskForm';
const App = () => {
  return (
    <Provider>
      <TaskForm />
      <List />
    </Provider>

  )
}
export default App;
