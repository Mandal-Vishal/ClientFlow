import { createContext, useState } from 'react'

export const AppData = createContext()

const AppContext = (props) => {

    const [clients, setClients] = useState(() => {
        return JSON.parse(localStorage.getItem('clients')) || []
    })
    const [projects, setProjects] = useState(() => {
        return JSON.parse(localStorage.getItem('projects')) || []
    })
    const [payments, setPayments] = useState(() => {
        return JSON.parse(localStorage.getItem('payments')) || []
    })
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem('task')) || []
    })
    const [notes, setNotes] = useState(() => {
        return JSON.parse(localStorage.getItem('notes')) || []
    })
    return (
        <AppData.Provider value={{
            clients, setClients,
            tasks, setTasks,
            projects, setProjects,
            notes, setNotes,
            payments, setPayments
        }}>
            {props.children}
        </AppData.Provider>
    )
}

export default AppContext