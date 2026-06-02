import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppData } from '../context/AppContext'

const PaymentsOverview = () => {
     const { clients, tasks, payments, projects, notes } = useContext(AppData)
    return (
        <div className='min-w-55  border border-gray-200 shadow-md px-5 py-3 rounded-lg flex flex-col gap-3 bg-white'>
            <h3 className='text-xl font-semibold pb-2'><i className="ri-bank-card-fill text-green-700 pr-2"></i>Payments Overview</h3>

            <div className='flex justify-between items-center py-3 border-b border-gray-300'>
                <h2 className='text-lg font-semibold'>Received</h2>
                <span className='w-fit bg-green-100 text-green-800 text-sm font-medium py-1 px-3 rounded-full'>
                    ₹ {payments.reduce((acc, curr) => {
                        return acc + curr.paidAmount
                    }, 0)}
                </span>
            </div>
            <div className='flex justify-between items-center border-b border-gray-300 py-3'>
                <h2 className='text-lg font-semibold'>Pending</h2>
                <span className='w-fit bg-yellow-100 text-green-800 text-sm font-medium py-1 px-3 rounded-full'>₹ {
                    payments.reduce((acc, curr) => {
                        return acc + curr.dueAmount
                    }, 0)}</span>
            </div>


            <div className='flex justify-center mt-5 '>
                <Link to={'/payments'} className='text-green-700 font-semibold text-sm pt-2 transition-all ease-in duration-200 hover:scale-105'>View all payments <i className="ri-arrow-right-line"></i></Link>
            </div>
        </div>
    )
}

export default PaymentsOverview