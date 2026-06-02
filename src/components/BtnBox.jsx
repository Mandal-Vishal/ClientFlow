import React from 'react'
import Btn from './Btn'

const BtnBox = () => {
    const data = [
        {
            'name': 'Add Client',
            'bgcolor': 'bg-green-100',
            'text': 'text-green-700',
            'hover':'hover:bg-green-200 hover:scale-105',
            'path':'/clients'
        },
        {
            'name': 'New Project',
            'bgcolor': 'bg-purple-100',
            'text': 'text-purple-700',
            'hover':'hover:bg-purple-200 hover:scale-105',
            'path':'/projects'
        },
        {
            'name': 'Add Task',
            'bgcolor': 'bg-yellow-100',
            'text': 'text-yellow-700',
            'hover':'hover:bg-yellow-200 hover:scale-105',
            'path':'/task'
        },
        {
            'name': 'Record Payment',
            'bgcolor': 'bg-red-100',
            'text': 'text-red-700',
            'hover':'hover:bg-red-200 hover:scale-105',
            'path':'/payments'
        },
    ]
    return (
        <div className='w-full px-10 py-2 flex gap-3 '>
            <div className=' w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-4 rounded-lg bg-white border border-gray-200 shadow-md
                '>
                {data.map((elem,idx)=>{
                    return <Btn key ={idx} name={elem.name} bg = {elem.bgcolor} text = {elem.text} hover={elem.hover} path = {elem.path} /> 
                })}
            </div>
        </div>
    )
}

export default BtnBox