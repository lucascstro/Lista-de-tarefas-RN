import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Tasklist from './components/taskList/TaskList';

function App() {

  const [tasks, setTasks] = useState([]);
  const [ultAdc, setUltAdc] = useState(0);


  const addTask = (title, state) => {

    const newTask = {
      id: ultAdc,
      title,
      state
    }

    setTasks(
      (tasks) => {
        setUltAdc(ultAdc + 1);
        return [...tasks, newTask]
      }
    );
  }

  const removeTask = (id) => {
    setTasks(
      (tasks) => {
        return tasks.filter(task => task.id !== id);
      });
  }

  const updateTask = (id, title, state) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else
          return task;
      });
    });
  }

  return (
    <div className="App">
      <div>
        <Navbar />
        <div className='Container'>
          <Tasklist title='Pendente' tipo={1} tasks={tasks.filter((x) => x.state === 1)} remove={removeTask} addTask={addTask} updateTask={updateTask} />
          <Tasklist title='Fazendo' tipo={2} tasks={tasks.filter((x) => x.state === 2)} remove={removeTask} addTask={addTask} updateTask={updateTask} />
          <Tasklist title='Feitas' tipo={3} tasks={tasks.filter((x) => x.state === 3)} remove={removeTask} addTask={addTask} updateTask={updateTask} />
        </div>
      </div>
    </div>
  );
}

export default App;