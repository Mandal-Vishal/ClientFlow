import { useContext, useEffect, useState } from 'react'
import NotesForm from '../components/NotesPage/NotesForm'
import NotesList from '../components/NotesPage/NotesList'
import { AppData } from '../context/AppContext'

const Notes = () => {
  const [pop, setPop] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [reference, setReference] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState('')
  const [editId, setEditId] = useState(null)

  const {notes, setNotes} = useContext(AppData)

  function submitHandler(e) {
    e.preventDefault()
    setPop(false)

    // const notesCopy = [...notes]
    // console.log(notesCopy)

    if (editId) {
      const updatedNote = notes.map(note =>
        note.id === editId ? {
          ...note,
          title,
          description,
          reference
        }
          : note
      )
      setNotes(updatedNote)

    }
    else {
      setNotes([
  {
    id: Date.now(),
    title,
    description,
    reference,
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  },
  ...notes
])
    }
    setEditId(null)
    setTitle('')
    setDescription('')
    setReference('')
    
    console.log(notes)
  }
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const deleteNote = (id) => {
    const updatedNote = notes.filter(note => note.id !== id)
    setNotes(updatedNote)
  }

  const editNote = (id) => {
    const selected = notes.find(note => note.id === id)
    setTitle(selected.title)
    setDescription(selected.description)
    setReference(selected.reference)
    setEditId(id)
    setPop(true)
  }
  return (
    <div className='flex-1 mt-18 px-10 items-center relative'>
      <div className='flex justify-between w-full'>
        <span>
          <h3 className='text-xl font-semibold '>Notes</h3>
          <p className='text-sm font-semibold opacity-70'>Keep important nontes and details about clients and projects</p>
        </span>
        <button className='w-full sm:w-fit px-4 py-2 bg-green-700 text-white rounded-lg transition-all ease-in duration-200 hover:bg-green-600 active:scale-90 cursor-pointer' onClick={() => {
          setPop(true)
        }}><i className="ri-add-fill pr-1"></i>Add Note</button>
      </div>

      <NotesForm
        pop={pop} setPop={setPop}
        title = {title} setTitle = {setTitle}
        description={description} setDescription={setDescription}
        reference={reference} setReference={setReference}
      
        submitHandler={submitHandler}
      />

      {/* <ProjectTable projects={projects} deleteProject={deleteProject} editProject={editProject} /> */}
      <NotesList notes = {notes} deleteNote = {deleteNote} editNote = {editNote} />

    </div>
  )
}

export default Notes

