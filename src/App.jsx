import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addtask = () => {
    if (task.trim() !== '') {
      if (editingIndex !== null) {
        const updatedTasks = tasks.slice();
        updatedTasks[editingIndex] = task;
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        const updatedTasks = tasks.slice();
        updatedTasks.push(task);
        setTasks(updatedTasks);
      }
      setTask('');
    }
  };

  const deltask = (index) => {
    const updatedTasks = tasks.slice();
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const edittask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  return (
    <>
      <div className="bg-red-800 h-20 w-screen text-xl flex justify-center items-center rounded">
        <t>To-do List</t>
      </div>
      <div className="p-4">
        <input
          type="text"
          value={task}
          onChange={(inp) => setTask(inp.target.value)}
          onKeyDown={(inp) => {
            if (inp.key === 'Enter') {
              addtask();
            }
          }}
          placeholder="Enter a task"
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />

        <button
          onClick={addtask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full "
        >
          {editingIndex !== null ? 'Update Task' : 'Add Task'}
        </button>

        <ul className="mt-4">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="bg-gray-100 p-2 my-2 rounded shadow-md flex justify-between items-center"
            >
              {t}
              <div>
                <button
                  onClick={() => edittask(index)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deltask(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
