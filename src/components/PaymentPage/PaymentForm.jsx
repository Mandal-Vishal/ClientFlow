import React from 'react'

const PaymentForm = (props) => {
  return (
    <form className={`flex flex-col bg-white -translate-x-1/3 -translate-y-1/2 fixed top-1/2 left-1/2 md:w-1/2 p-10 rounded-xl border border-gray-400 shadow-xl transition-all ease-in ${props.pop ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-75 invisible' }`} 
    onSubmit={(e) => {
      props.submitHandler(e)
    }}>
      <input type="text" placeholder=' Invoice ID' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.invoice} onChange={(e) => {
        props.setInvoice(e.target.value)

      }} />
      <input type="text" placeholder="Client" className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3' value={props.client} onChange={(e) => {
        props.setClient(e.target.value)
      }} />
      
      <input type="text" placeholder='Project' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.project} onChange={(e) => {
          props.setProject(e.target.value)
        }} />
      <input type="number" placeholder='Amount Received' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.paidAmount} onChange={(e) => {
          props.setPaidAmount(e.target.value === '' ? '' : Number(e.target.value))
        }} />
      <input type="number" placeholder='Amount Due' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.dueAmount} onChange={(e) => {
          props.setDueAmount(e.target.value === '' ? '' : Number(e.target.value))
        }} />
        <input type="text" placeholder='Status' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.status} onChange={(e) => {
          props.setStatus(e.target.value)
        }} />
      
      <button className='px-4 py-3 bg-green-700 text-white rounded-2xl text-lg cursor-pointer transition ease-in hover:bg-green-600'>Add Payment</button>
    </form>
  )
}

export default PaymentForm