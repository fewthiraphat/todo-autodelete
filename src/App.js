import './App.css';
import Task from './components/Task';
import {useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([]);
  const [task , setTask] = useState('');
  
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  }
  const handleChangeTask = (e) => {
    setTask(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" value={task} onChange={handleChangeTask}/>
      <button onClick={addTask}>Enter</button>
      {
        tasks.map(task => <Task message={task}/>)
      }
    </div>
  );
}

export default App;
