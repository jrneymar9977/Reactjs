import './App.css';
import Header from './Header'
import Navbar from './Navbar';
import Content from './content';
import AddTask from './AddTask';
import { useState } from 'react';

function App() {

  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem('Notes')) || []);

  const [newTask, setNewTask] = useState('')
  const [newtaskstatus, setNewTaskStatus] = useState('')

  const [showTaskPopup, setShowTaskPopup] = useState(false);

  const toggleTaskPopup = () => {
    setShowTaskPopup((prevShowTaskPopup) => !prevShowTaskPopup);
  };

  console.log('showTaskPopup:', showTaskPopup);


  const addtask = (task, newtaskstatus) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const taskStatus = newtaskstatus
    const addnewtask = { id, taskStatus, task }
    const updatedlist = [...tasks, addnewtask]
    setTask(updatedlist)
    localStorage.setItem('Notes', JSON.stringify(updatedlist))
    setShowTaskPopup(false);
  }


  const handleSelect = (id, selectedStatus) => {
    const updatingtask = tasks.map((item) => item.id === id ? { ...item, taskStatus: selectedStatus } : item)
    setTask(updatingtask)
    localStorage.setItem('Notes', JSON.stringify(updatingtask))
  }

  const handledelete = (id) => {
    const deletingtask = tasks.filter((item) => item.id !== id)
    setTask(deletingtask)
    localStorage.setItem('Notes', JSON.stringify(deletingtask))
  }

  const handleTaskChange = (id, newTaskContent) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, task: newTaskContent } : item
    );
    setTask(updatedTasks);
    localStorage.setItem('Notes', JSON.stringify(updatedTasks));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newTask) return;
    addtask(newTask, newtaskstatus)
    setNewTask('')
    setNewTaskStatus('')

  }

  return (
    <main>
      <Navbar newTaskButton={toggleTaskPopup} />
      <Header title="TaskManager"
      />
      {showTaskPopup && (
        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          handleSubmit={handleSubmit}
          newtaskstatus={newtaskstatus}
          setNewTaskStatus={setNewTaskStatus}
          showTaskPopup={showTaskPopup}
          setShowTaskPopup={setShowTaskPopup}
        />
      )}

      <Content
        tasks={tasks}
        handleSelect={handleSelect}
        handledelete={handledelete}
        handleTaskChange={handleTaskChange}
      />
    </main>
  );
}

export default App;
