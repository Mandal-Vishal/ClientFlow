import React from 'react'

const Nav = ({menu , setMenu}) => {
    return (
        // <div className='flex lg:px-10 px-5 h-12 items-center fixed top-1 lg:left-48 md:left-20  right-0 z-50 xs:w-full'>\
        <div className='flex items-center gap-4 lg:px-8 px-4 h-14 fixed top-0 lg:left-52 md:left-20 right-0 z-40 bg-[#f8fafc]'>
            <i className="ri-menu-fill md:hidden text-2xl cursor-pointer" onClick={()=>setMenu(!menu)}></i>
            <form className='flex-1 relative md:ml-0 ml-5'>
                <i className="ri-search-line absolute top-1.5 left-3 text-lg opacity-50"></i>
                <input type="text" placeholder='Search Dashboard' className='h-9 w-full  pl-10 pr-3 outline-0 rounded-full bg-white shadow-sm text-sm' />
            </form>
            <div className='flex items-center gap-3 ml-auto'>
                <span>Theme</span>
                <span className='h-6 border'></span>
                <div className='h-7 w-7 border border-gray-200 rounded-full text-center flex justify-center items-center'>
                    <i className="ri-user-3-fill text-center text-xl"></i>
                </div>
                <h3 className='text-xs font-medium hidden lg:block'>Vishal Mandal</h3>
            </div>
        </div>
    )
}

export default Nav