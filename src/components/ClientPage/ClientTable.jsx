
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import FilterBtn from "./FilterBtn";

const ClientTable = ({ clients, deleteClient, editClient }) => {
    const [page, setPage] = useState(1)
    const [filteredClients, setFilteredClients] = useState(clients)
    console.log('filteredClients value:', filteredClients);
    useEffect(() => {
        setFilteredClients(clients)
    }, [clients])


    const recordsPerPage = 7
    const lastIndex = recordsPerPage * page
    const firstIndex = lastIndex - recordsPerPage
    const currentRecords = filteredClients.slice(firstIndex, lastIndex)
    
    const totalPages = Math.ceil(filteredClients.length / recordsPerPage)


    return (
        <div className="w-full pt-8">
            <FilterBtn filteredClients={filteredClients} setFilteredClients={setFilteredClients} clients={clients} />
            <div className="w-full bg-white rounded-lg border shadow-sm overflow-hidden ">
                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">

                        {/* Heading */}
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Client
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Company
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Email
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Phone
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}

                        {clients.length === 0 ? (
                            <tbody>
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-10 text-gray-500 text-lg"
                                    >
                                        <div className="py-12 flex flex-col items-center justify-center text-gray-500">
                                            <i className="ri-user-search-line text-5xl mb-3"></i>

                                            <h2 className="text-lg font-semibold">
                                                No Clients Found
                                            </h2>

                                            <p className="text-sm">
                                                Add a client to get started
                                            </p>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                {currentRecords.map((client, idx) => (
                                    <tr key={idx} className="border-b last:border-none hover:bg-gray-50 transition">

                                        <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                            {client.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {client.company}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {client.email}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {client.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${client.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {client.status}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 text-lg text-gray-500">
                                                <button className="hover:text-blue-600 transition" onClick={() => {
                                                    editClient(client.id)
                                                }}>
                                                    <i className="ri-pencil-line"></i>
                                                </button>
                                                <button
                                                    className="hover:text-red-500 transition"
                                                    onClick={() => {
                                                        deleteClient(client.id)
                                                    }}
                                                >
                                                    <i className="ri-delete-bin-line"></i>
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        )}

                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden p-4 space-y-4">
                    {currentRecords.map((client, idx) => (
                        <div
                            key={idx}
                            className="border rounded-2xl p-4 shadow-sm"
                        >

                            {/* Top */}
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="text-base font-semibold text-gray-800">
                                        {client.name}
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        {client.company}
                                    </p>
                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${client.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {client.status}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="mt-4 space-y-2">

                                <div>
                                    <p className="text-xs text-gray-400">Email</p>
                                    <p className="text-sm text-gray-700 break-all">
                                        {client.email}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400">Phone</p>
                                    <p className="text-sm text-gray-700">
                                        {client.phone}
                                    </p>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex items-center gap-3">

                                <button className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition" onClick={() => {
                                    editClient(client.id)
                                }}>
                                    <i className="ri-pencil-line mr-1"></i>
                                    Edit
                                </button>

                                <button className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition" onClick={() => {
                                    deleteClient(client.id)
                                }} >
                                    <i className="ri-delete-bin-line mr-1"></i>
                                    Delete
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-6 py-5 border-t">
                    <button className={`px-4 py-1 rounded-lg text-white ${page === 1
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-700"
                        }`} disabled ={page === 1} onClick={() => {
                            setPage(page - 1)
                        }}>Prev</button>

                    <p> {page}/{totalPages} </p>

                    <button className={`px-4 py-1 rounded-lg text-white ${page === totalPages || totalPages === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-700 cursor-pointer"
                        }`} disabled={page === totalPages || totalPages === 0}
                        onClick={() => {
                            setPage(page + 1)
                        }}>Next</button>

                </div>
            </div>
        </div>
    );
};

export default ClientTable;




