
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppData } from '../context/AppContext'
const PendingTasks = () => {
    const { clients, tasks, payments, projects, notes } = useContext(AppData)
    const pendingTasks = tasks.filter((task) => task.status === 'Pending').slice(0, 3)
    return (
        <div className='min-w-55 flex flex-col justify-between  border border-gray-200 shadow-md px-5 py-3 rounded-lg bg-white '>
            <h3 className='text-xl font-semibold pb-2'><i className="ri-todo-fill text-yellow-700 pr-2"></i>Pending Tasks</h3>

            {pendingTasks.map((e, idx) => {
                return <div key={idx} className='flex justify-between items-center border-b border-gray-300 py-1'>
                    <div>
                        <h2 className='text-lg font-semibold'>{e.taskName}</h2>
                        <p className='text-xs opacity-80 pt-1'>{e.project}</p>
                    </div>
                    <span className='w-fit  text-sm font-medium py-1 px-3 rounded-full'>{new Date(e.dueDate).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                    })}</span>
                </div>
            })}


            <div className='flex justify-center items-center'>
                <Link to={'/task'} className='text-green-700 font-semibold text-sm pt-2 transition-all ease-in duration-200 hover:scale-105'>View all tasks <i className="ri-arrow-right-line"></i></Link>
            </div>

        </div>
    )
}

export default PendingTasks