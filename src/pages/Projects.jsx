import { useContext, useEffect, useState } from 'react'
import ProjectTable from '../components/ProjectPage/ProjectTable'
import ProjectForm from '../components/ProjectPage/ProjectForm'
import { AppData } from '../context/AppContext'

const Projects = () => {
  const [pop, setPop] = useState(false)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [deadline, setDeadline] = useState('')
  const [status, setStatus] = useState('')
  const [progress, setProgress] = useState('')
  const [id, setId] = useState('')
  const [editId, setEditId] = useState(null)

  const {projects, setProjects} = useContext(AppData)

  function submitHandler(e) {
    e.preventDefault()
    setPop(false)

    const projectCopy = [...projects]

    if (editId) {
      const updatedProject = projects.map(project =>
        project.id === editId ? {
          ...project,
          name,
          company,
          deadline,
          status,
          progress
        }
          : project
      )
      setProjects(updatedProject)

    }
    else {
     setProjects([
      { id: Date.now(), name, company, status, deadline, progress },
      ...projects
     ])
    }
    setEditId(null)
    setName('')
    setCompany('')
    setStatus('')
    setDeadline('')
    setProgress('')
    console.log(projects)
  }
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  const deleteProject = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id)
    setProjects(updatedProjects)
  }

  const editProject = (id) => {
    const selected = projects.find(project => project.id === id)
    setName(selected.name)
    setCompany(selected.company)
    setStatus(selected.status)
    setDeadline(selected.deadline)
    setProgress(selected.progress)
    setEditId(id)
    setPop(true)
  }
  return (
    <div className='flex-1 mt-18 px-10 items-center relative'>
      <div className='flex justify-between w-full'>
        <span>
          <h3 className='text-xl font-semibold '>Projects</h3>
          <p className='text-sm font-semibold opacity-70'>Manage all your projects and track progress</p>
        </span>
        <button className='w-full sm:w-fit px-4 py-2 bg-green-700 text-white rounded-lg transition-all ease-in duration-200 hover:bg-green-600 active:scale-90 cursor-pointer' onClick={() => {
          setPop(true)
        }}><i className="ri-add-fill pr-1"></i>Add Project</button>
      </div>
      <ProjectForm
        pop={pop} setPop={setPop}
        name={name} setName={setName}
        company={company} setCompany={setCompany}
        status={status} setStatus={setStatus}
        deadline={deadline} setDeadline={setDeadline}
        progress={progress} setProgress={setProgress}
        submitHandler={submitHandler}
      />

      <ProjectTable projects={projects} deleteProject={deleteProject} editProject={editProject} />

    </div>
  )
}

export default Projects