
import { useState } from 'react'

const TaskForm = (props) => {
 
  
  return (
    <form className={`flex flex-col bg-white -translate-x-1/3 -translate-y-1/2 fixed top-1/2 left-1/2 md:w-1/2 p-10 rounded-xl border border-gray-400 shadow-xl transition-all ease-in ${props.pop ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-75 invisible' }`} 
    onSubmit={(e) => {
      props.submitHandler(e)
    }}>
      <input type="text" placeholder='Task' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.taskName} onChange={(e) => {
        props.setTaskName(e.target.value)

      }} />
      <input type="text" placeholder="Project" className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3' value={props.project} onChange={(e) => {
        props.setProject(e.target.value)
      }} />
      <select className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3' value = {props.priority} onChange={(e)=>props.setPriority(e.target.value)}>
        <option value="" disabled>Select Priority</option>
        <option value="Low">Low </option>
        <option value="Moderate">Moderate </option>
        <option value="High">High </option>
      </select>
      <input type="date" placeholder='Due Date' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.dueDate} onChange={(e) => {
        props.setDueDate(e.target.value)
      }} />
     <select value = {props.status} onChange={(e)=>props.setStatus(e.target.value)} className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3' >
      <option value="" disabled>Status</option>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
     </select>
      <button className='px-4 py-3 bg-green-700 text-white rounded-2xl text-lg cursor-pointer transition ease-in hover:bg-green-600' >Add Task</button>
    </form>
  )
}

export default TaskForm