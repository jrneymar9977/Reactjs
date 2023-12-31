import React from 'react'
import './Content.css'

const Content = ({ tasks, handleSelect, handledelete, handleTaskChange }) => {

  return (
    <div >
      {(tasks.length) ? (
        <div >
        <ul className='taskcontent-ul'>
          {tasks.map((item) => (
            <li className='taskcontent' key={item.id}>
              <div className='container'>
              <div>
                <select className='select' name='Select Task Status' value={item.taskStatus} onChange={(e) => handleSelect(item.id, e.target.value)}>
                  <option value='InProcess'>InProcess</option>
                  <option value='Completed'>Completed</option>
                </select>
              </div>
              <div>
              <textarea
                className='textar'
                value={item.task}
                onChange={(e) => handleTaskChange(item.id, e.target.value)}
                rows={4}
                placeholder='Enter task description' /></div>
              <div>
                <button className='btn' type='submit' onClick={(e) => handledelete(item.id)}>Delete</button></div>
                </div>
            </li>
          ))}
        </ul>
      </div>
      ) : (<p>No notes</p>)
      }
    </div>
  )
}

export default Content