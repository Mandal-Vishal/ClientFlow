import { useContext, useEffect, useState } from 'react'
import Btn from '../components/Btn'
import BtnBox from '../components/BtnBox'
import TaskForm from '../components/TaskPage/TaskForm'
import TaskTable from '../components/TaskPage/TaskTable'
import { AppData } from '../context/AppContext'

const Task = () => {
  const [pop, setPop] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [project, setProject] = useState('')
  const [priority, setPriority] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [status, setStatus] = useState('')
  const [id, setId] = useState('')
  const [editId, setEditId] = useState(null)
  
  const {tasks , setTasks} = useContext(AppData)

  function submitHandler(e) {
    e.preventDefault()
    setPop(false)
    const taskCopy = [...tasks]
    if(editId){
      const updateTask = tasks.map(task=>
       task.id === editId ? {
        ...task , 
        taskName,
        project,
        priority,
        dueDate,
        status
       }
       :task
      )
      setTasks(updateTask)
    }
    else{
      setTasks([
        {id:Date.now() , taskName , project , priority ,dueDate, status , completed:false},
        ...tasks
      ])
    }
    setEditId(null)
    setTaskName('')
    setProject('')
    setPriority('')
    setDueDate('')
    setStatus('')
  }
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  }, [tasks])

  const deleteTask = (id) => {
    const updatedTask = tasks.filter(
      task => task.id !== id
   )
   setTasks(updatedTask)
  }

  const toggleTask = (id)=>{
    const updatedTask = tasks.map((task)=> 
      task.id === id ? {...task , completed:!task.completed,
         status: !task.completed ? "Completed" : "Pending"
      }
    :task
  )
  setTasks(updatedTask)
  }

  const editTask = (id)=>{
    const selected = tasks.find(task => task.id === id)
    setTaskName(selected.taskName)
    setProject(selected.project)
    setPriority(selected.priority)
    setDueDate(selected.dueDate)
    setStatus(selected.status)
    setEditId(id)
    setPop(true)
  }

  return (
    <div className='flex-1 mt-18 px-10 items-center relative'>
      <div className='flex justify-between w-full'>
        <span>
          <h3 className='text-xl font-semibold '>Tasks</h3>
          <p className='text-sm font-semibold opacity-70'>Organize and track all your tasks</p>
        </span>
        <button className='px-4 py-2 bg-green-700 text-white rounded-lg transition-all ease-in duration-200 hover:bg-green-600 active:scale-90 cursor-pointer' onClick={() => {
          setPop(true)
        }}><i className="ri-add-fill pr-1"></i>Add Task</button>
      </div>
      <TaskForm
        pop={pop} setPop={setPop}
        taskName = {taskName} setTaskName = {setTaskName}
        project = {project} setProject = {setProject}
        priority = {priority} setPriority = {setPriority}
        dueDate = {dueDate} setDueDate = {setDueDate}
        status={status} setStatus={setStatus}
        submitHandler={submitHandler}
      />
      <TaskTable tasks={tasks} deleteTask={deleteTask} editTask = {editTask} toggleTask = {toggleTask} />
    </div>
  )
}

export default Task