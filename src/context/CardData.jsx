import React, { createContext } from 'react'
import { useContext } from 'react'
import { AppData } from '../context/AppContext'

export const cardCon = createContext()

const CardData = (props) => {
const  {clients , tasks , payments , projects , notes} = useContext(AppData)
    const data = [
        {
        'icon': "ri-group-fill",
        'name': 'Total Clients',
        'number': clients.length || 0 ,
        'bgcolor' : 'bg-green-100/50',
        'textcolor':'text-green-700'
        },
        {
        'icon': "ri-briefcase-4-fill",
        'name': 'Active Projects',
        'number': projects.filter((project) => project.status === 'Ongoing').length,
        'bgcolor' : 'bg-purple-100',
         'textcolor':'text-purple-700'
        },
        {
        'icon':"ri-todo-fill",
        'name': 'Pending Tasks',
        'number': tasks.filter((task)=>task.status==='Pending').length,
        'bgcolor' : 'bg-yellow-100',
         'textcolor':'text-yellow-700'
        },
        {
        'icon': "ri-money-rupee-circle-fill",
        'name': 'payments Due',
        'number': ` ₹ ${payments.reduce((acc,curr) => acc+curr.dueAmount , 0)}`,
        'bgcolor' : 'bg-green-100',
         'textcolor':'text-green-700'
        },
    ]
     console.log(projects)
    return (
        <div>  
            <cardCon.Provider value = {data}>
                {props.children}
               
            </cardCon.Provider>
        </div>
    )
}

export default CardData