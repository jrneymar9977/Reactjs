import React from 'react'
import './AddTask.css'

const Task = ({newTask, setNewTask, handleSubmit, newtaskstatus,setNewTaskStatus,showTaskPopup}) => {
  console.log('showTaskPopup in AddTask:', showTaskPopup);
  console.log('newTask in AddTask:', newTask);
  return (
    <form onSubmit={handleSubmit}>
      {showTaskPopup && (
      <div  className={`add-task-popup ${newTask !== '' ? 'active' : ''}`}>
        <div className='container'>
        <div>
        <select name='Task Status' className='select' required value={newtaskstatus} onChange={(e)=>setNewTaskStatus(e.target.value)}>
        <option value="" disabled selected>Select TaskStatus</option>
          <option value='InProcess'>InProcess</option>
          <option value='Completed'>Completed</option>
        </select></div>
        <div>
        <textarea
          required
          className='textar'
          value={newTask} onChange={(e)=>setNewTask(e.target.value)}
          rows={4}
          placeholder='  Enter task description' /></div>
        <button className='btn' type='submit'>Add Task</button>
        </div>
      </div>)}
    </form>
  )
}

export default Task