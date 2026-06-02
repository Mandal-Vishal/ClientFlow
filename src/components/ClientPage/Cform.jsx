
import { useState } from 'react'

const Cform = (props) => {
 
  
  return (
    <form className={`flex flex-col bg-white -translate-x-1/3 -translate-y-1/2 fixed top-1/2 left-1/2 md:w-1/2 p-10 rounded-xl border border-gray-400 shadow-xl transition-all ease-in ${props.pop ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-75 invisible' }`} 
    onSubmit={(e) => {
      props.submitHandler(e)
    }}>
      <input type="text" placeholder=' Client Name' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.name} onChange={(e) => {
        props.setName(e.target.value)

      }} />
      <input type="text" placeholder=" Client's Company" className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3' value={props.company} onChange={(e) => {
        props.setCompany(e.target.value)
      }} />
      <input type="tel" pattern='[0-9]{10}' placeholder='  Phone No.' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.phone} onChange={(e) => {
        props.setPhone(e.target.value)
      }} />
      <input type="email" placeholder='  Email' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.email} onChange={(e) => {
        props.setEmail(e.target.value)
      }} />
      <input type="text" placeholder=' Activity Status' className='border border-gray-300 outline-0 px-4 py-2 rounded-lg mb-3'  value={props.status} onChange={(e) => {
        props.setStatus(e.target.value)
      }} />
      <button className='px-4 py-3 bg-green-700 text-white rounded-2xl text-lg cursor-pointer transition ease-in hover:bg-green-600' onClick={()=>{
        props.setId(Date.now())
      }}>Add Client</button>
    </form>
  )
}

export default Cform