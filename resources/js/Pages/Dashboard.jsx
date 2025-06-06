import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";


export default function Dashboard({ totalPendingTasks, myPendingTasks, totalProgressTasks, myProgressTasks, totalCompletedTasks, myCompletedTasks, activeTasks }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="grid grid-cols-3 gap-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className='text-2xl font-semibold text-amber-500'>Pending Tasks</h3>
                            <p className='mt-4 text-xl'>
                                <span className='mr-2'>{myPendingTasks}</span>/
                                <span className='ml-2'>{totalPendingTasks}</span>
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className='text-2xl font-semibold text-blue-500'>In Progress Tasks</h3>
                            <p className='mt-4 text-xl'>
                                <span className='mr-2'>{myProgressTasks}</span>/
                                <span className='ml-2'>{totalProgressTasks}</span>
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className='text-2xl font-semibold text-green-500'>Completed Tasks</h3>
                            <p className='mt-4 text-xl'>
                                <span className='mr-2'>{myCompletedTasks}</span>/
                                <span className='ml-2'>{totalCompletedTasks}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className='text-xl font-semibold text-gray-200'>My Active Tasks</h3>

                            <table className='mt-3 text-left text-gray-500 mttext-sm mw-full rtl:text-right dark:text-gray-400'>
                                <thead className='text-xs text-gray-700 uppercase border-b-2 border-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                    <tr>
                                        <th className='px-3 py-3'>ID</th>
                                        <th className='px-3 py-3'>Project Name</th>
                                        <th className='px-3 py-3'>Name</th>
                                        <th className='px-3 py-3'>Status</th>
                                        <th className='px-3 py-3'>Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeTasks.data.map(task => (
                                        <tr key={task.id}>
                                            <td className='px-3 py-2'>{task.id}</td>
                                            <td className='px-3 py-2 text-white hover:underline'>
                                                <Link href={route("project.show", task.project.id)}>
                                                    {task.project.name}
                                                </Link>
                                            </td>
                                            <td className='px-3 py-2 text-white hover:underline'>
                                                <Link href={route("task.show", task.id)}>
                                                    {task.name}
                                                </Link>
                                            </td>
                                            <td className='px-3 py-2'>
                                                <span className={
                                                    "px-2 py-1 rounded text-white " +
                                                    TASK_STATUS_CLASS_MAP[task.status]
                                                }>
                                                    {TASK_STATUS_TEXT_MAP[task.status]}
                                                </span>
                                            </td>
                                            <td className='px-3 py-2'>{task.due_date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
