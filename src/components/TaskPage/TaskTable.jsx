
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import TaskFilter from "./TaskFilter";

const TaskTable = ({ tasks, deleteTask, editTask, toggleTask }) => {
    const [page, setPage] = useState(1)
    const [filteredTask, setFilteredTask] = useState(tasks)

    useEffect(() => {
        setFilteredTask(tasks)
    }, [tasks])


    const recordsPerPage = 7
    const lastIndex = recordsPerPage * page
    const firstIndex = lastIndex - recordsPerPage
    const currentRecords = filteredTask.slice(firstIndex, lastIndex)

    const totalPages = Math.ceil(filteredTask.length / recordsPerPage)

    return (
        <div className="w-full pt-8">
            <TaskFilter filteredTask={filteredTask} setFilteredTask={setFilteredTask} tasks={tasks} />
            <div className="w-full bg-white rounded-lg border shadow-sm overflow-hidden ">
                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">

                        {/* Heading */}
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Tasks
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Project
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Priority
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Due date
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

                        {tasks.length === 0 ? (
                            <tbody>
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-10 text-gray-500 text-lg"
                                    >
                                        <div className="py-12 flex flex-col items-center justify-center text-gray-500">
                                            <i className="ri-user-search-line text-5xl mb-3"></i>

                                            <h2 className="text-lg font-semibold">
                                                No Task Found
                                            </h2>

                                            <p className="text-sm">
                                                Add a Task to get started
                                            </p>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                {currentRecords.map((task, idx) => (
                                    <tr key={idx} className="border-b last:border-none hover:bg-gray-50 transition">

                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                                            <div className="flex items-center">
                                                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="w-4 h-4 mr-2 cursor-pointer" />
                                                <span className={task.completed ? 'line-through opacity-50' : ''}>
                                                    {task.taskName}
                                                </span>
                                            </div>

                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {task.project}
                                        </td>
                                        <td className="px-6 py-4 ">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.priority === "Low" ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} ${task.priority === "Moderate" ? 'bg-yellow-100 text-yellow-700' : task.priority === 'Low' || task.priority === 'High'}`}>
                                                {task.priority}
                                            </span>

                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {new Date(task.dueDate).toLocaleDateString('en-GB', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${task.status === "Completed"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                            >
                                                {task.status}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 text-lg text-gray-500">
                                                <button className="hover:text-blue-600 transition" onClick={() => {
                                                    editTask(task.id)
                                                }}>
                                                    <i className="ri-pencil-line"></i>
                                                </button>
                                                <button
                                                    className="hover:text-red-500 transition"
                                                    onClick={() => {
                                                        deleteTask(task.id)
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
                    {currentRecords.map((task, idx) => (
                        <div
                            key={idx}
                            className="border rounded-2xl p-4 shadow-sm"
                        >

                            {/* Top */}
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="text-base font-semibold text-gray-800">
                                        {task.taskName}
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        {task.project}
                                    </p>
                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${task.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {task.status}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="mt-4 space-y-2">

                                <div>
                                    <p className="text-xs text-gray-400">priority</p>
                                    <p className="text-sm text-gray-700 break-all">
                                        {task.priority}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400">Due Date</p>
                                    <p className="text-sm text-gray-700">
                                        {task.dueDate}
                                    </p>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex items-center gap-3">

                                <button className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition" onClick={() => {
                                    editTask(task.id)
                                }}>
                                    <i className="ri-pencil-line mr-1"></i>
                                    Edit
                                </button>

                                <button className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition" onClick={() => {
                                    deleteTask(task.id)
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
                        }`} disabled={page === 1} onClick={() => {
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

export default TaskTable;




