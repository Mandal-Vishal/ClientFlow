import React from 'react'

const FilterBtn = (prop) => {
    return (
        <div className="w-full lg:w-1/2 flex flex-wrap gap-3 mb-3 font-semibold text-white text-sm">
            <button className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm bg-blue-700 rounded-lg transition-all ease-in hover:bg-blue-600 cursor-pointer" onClick={() => {
                prop.setFilteredClients(prop.clients)
            }}>All Clients</button>
            <button className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm bg-green-700 rounded-lg transition-all ease-in hover:bg-green-600 cursor-pointer" onClick={() => {
                prop.setFilteredClients(
                    prop.clients.filter((client) => client.status === 'Active')
                )

            }}>Active</button>
            <button className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm bg-red-700 rounded-lg transition-all ease-in hover:bg-red-600 cursor-pointer" onClick={() => {
                prop.setFilteredClients(
                    prop.clients.filter((client) => client.status === 'Inactive')
                )
            }} >Inactive</button>
        </div>
    )
}

export default FilterBtn