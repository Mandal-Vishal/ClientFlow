import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppData } from '../context/AppContext'
const Recent = () => {
    const { clients, tasks, payments, projects, notes } = useContext(AppData)
    const projectsOverview = projects.slice(0, 3)
    return (
        <div className='min-w-55  justify-center items-center border border-gray-200 shadow-md px-5 py-3 rounded-lg bg-white '>
            <h3 className='text-xl font-semibold pb-2'><i className="ri-folder-open-fill text-purple-700 pr-2"></i>Recent Projects</h3>
            {projects.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center text-gray-500">
                    <i className="ri-folder-3-line text-5xl mb-3"></i>

                    <h2 className="text-lg font-semibold">
                        No Projects Found
                    </h2>

                    <p className="text-sm">
                        Add a Project to get started
                    </p>
                </div>
            ) : (

                projectsOverview.map((e, idx) => {
                    return <div key={idx} className='flex justify-between items-center  border-b border-gray-300 py-1'>
                        <div className='pb-1'>
                            <h2 className='text-md font-semibold'>{e.name}</h2>
                            <p className='text-xs opacity-80 pt-1'>{e.company}</p>
                        </div>
                        <span className={`w-fit bg-green-100 text-green-800 lg:text-sm text-xs font-medium py-1 px-3 rounded-full
                             ${e.status === "Ongoing" ? 'bg-yellow-100  text-yellow-700' : 'bg-green-100  text-green-700'}`}>{e.status}</span>
                    </div>
                })

            )

            }

            <div className='flex justify-center '>
                <Link to={'/projects'} className='text-green-700 font-semibold text-sm pt-2 transition-all ease-in duration-200 hover:scale-105'>View all projects <i className="ri-arrow-right-line"></i></Link>
            </div>
        </div>
    )
}

export default Recent