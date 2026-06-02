
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import ProjectFilter from "./ProjectFilter";

const ProjectTable = ({ projects, deleteProject, editProject }) => {

    const [page, setPage] = useState(1)
    const [filteredProjects, setFilteredProjects] = useState(projects)
    useEffect(() => {
        setFilteredProjects(projects)
    }, [projects])

    const recordsPerPage = 7
    const lastIndex = recordsPerPage * page
    const firstIndex = lastIndex - recordsPerPage
    const currentRecords = filteredProjects.slice(firstIndex, lastIndex)

    const totalPages = Math.ceil(filteredProjects.length / recordsPerPage)

    return (
        <div className="w-full pt-8">
            <ProjectFilter filteredProjects={filteredProjects} setFilteredProjects={setFilteredProjects} projects={projects} />
            <div className="w-full bg-white rounded-lg border shadow-sm overflow-hidden ">
                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">

                        {/* Heading */}
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Projects
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Company
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Deadline
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Progress
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}

                        {projects.length === 0 ? (
                            <tbody>
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-10 text-gray-500 text-lg"
                                    >
                                        <div className="py-12 flex flex-col items-center justify-center text-gray-500">
                                            <i className="ri-folder-3-line text-5xl mb-3"></i>

                                            <h2 className="text-lg font-semibold">
                                                No Projects Found
                                            </h2>

                                            <p className="text-sm">
                                                Add a Project to get started
                                            </p>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                {currentRecords.map((project, idx) => (
                                    <tr key={idx} className="border-b last:border-none hover:bg-gray-50 transition">

                                        <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                            {project.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {project.company}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Completed"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                            >
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {project.deadline}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 flex items-center ">
                                            <div className='w-full bg-gray-200 h-2 py-2  rounded-3xl flex justify-between items-center mr-1'>
                                                <div className={`transition-all ease-in duration-600 h-2 p-2 2 bg-green-600 rounded-xl `}
                                                style={{ width: `${project.progress}%` }}></div>
                                            </div>
                                            <h3>{project.progress}%</h3>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 text-lg text-gray-500">
                                                <button className="hover:text-blue-600 transition" onClick={() => {
                                                    editProject(project.id)
                                                    console.log(project)
                                                }}>
                                                    <i className="ri-pencil-line"></i>
                                                </button>
                                                <button
                                                    className="hover:text-red-500 transition"
                                                    onClick={() => {
                                                        deleteProject(project.id)
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
                    {currentRecords.map((project, idx) => (
                        <div
                            key={idx}
                            className="border rounded-2xl p-4 shadow-sm"
                        >

                            {/* Top */}
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="text-base font-semibold text-gray-800">
                                        {project.name}
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        {project.company}
                                    </p>
                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Completed"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {project.status}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="mt-4 space-y-2">

                                <div>
                                    <p className="text-xs text-gray-400">Deadline</p>
                                    <p className="text-sm text-gray-700 break-all">
                                        {project.deadline}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400">Progress</p>
                                    <p className="text-sm text-gray-700">
                                        {project.progress}
                                    </p>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex items-center gap-3">

                                <button className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition" onClick={() => {
                                    editProject(project.id)

                                }}>
                                    <i className="ri-pencil-line mr-1"></i>
                                    Edit
                                </button>

                                <button className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition" onClick={() => {
                                    deleteProject(project.id)
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

export default ProjectTable;




