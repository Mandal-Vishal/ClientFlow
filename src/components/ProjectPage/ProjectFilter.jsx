import React from 'react'

const ProjectFilter = (prop) => {
  return (
     <div className="w-full lg:w-1/2 flex flex-wrap gap-3 mb-3 font-semibold text-white text-sm">
            <button className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm bg-blue-700 rounded-lg transition-all ease-in hover:bg-blue-600 cursor-pointer" onClick={() => {
                prop.setFilteredProjects(prop.projects)
            }}>All Projects</button>
            <button className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm bg-yellow-600 rounded-lg transition-all ease-in hover:bg-yellow-500 cursor-pointer" onClick={() => {
                prop.setFilteredProjects(
                    prop.projects.filter((project) => project.status === 'Ongoing')
                )

            }}>Ongoing</button>
            <button className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm bg-green-700 rounded-lg transition-all ease-in hover:bg-green-600 cursor-pointer" onClick={() => {
                prop.setFilteredProjects(
                    prop.projects.filter((project) => project.status === 'Completed')
                )
            }} >Completed</button>
        </div>
  )
}

export default ProjectFilter