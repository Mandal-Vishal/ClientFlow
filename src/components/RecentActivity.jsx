import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppData } from "../context/AppContext";
const RecentActivity = () => {
  const { clients, tasks, payments, projects, notes } = useContext(AppData);

  const recentActivities = [
    ...projects.slice(0, 1).map((project) => ({
      type: "project",
      title: project.name,
      subtitle: project.company,
      status: project.status,
      icon: "ri-folder-open-fill",
      color: "text-purple-700",
    })),

    ...tasks.slice(0, 1).map((task) => ({
      type: "task",
      title: task.taskName,
      subtitle: task.project,
      status: task.status,
      icon: "ri-todo-fill",
      color: "text-yellow-600",
    })),

    ...clients.slice(0, 1).map((client) => ({
      type: "client",
      title: client.name,
      subtitle: client.company,
      status: "New Client",
      icon: "ri-user-3-fill",
      color: "text-blue-600",
    })),
  ];

  return (
    <div className="min-w-55 border border-gray-200 shadow-md p-3 rounded-lg bg-white">
      <h3 className="text-xl font-semibold pb-3 mx-2">
        <i className="ri-history-fill pr-2 text-blue-500"></i>
        Recent Activity
      </h3>

      <div className="flex flex-col gap-3">
        {recentActivities.map((activity, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border-b border-gray-200 pb-3"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <i className={`${activity.icon} ${activity.color} text-lg`}></i>
              </div>

              <div>
                <h2 className="text-md font-semibold">{activity.title}</h2>

                <p className="text-xs opacity-70 pt-1">{activity.subtitle}</p>
              </div>
            </div>

            <span
              className={`text-xs font-medium py-1 px-3 rounded-full
                    ${
                      activity.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : activity.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
            >
              {activity.status}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-3">
        <Link
          to={"/clients"}
          className="text-green-700 font-semibold text-sm transition-all ease-in duration-200 hover:scale-105"
        >
          View all activity <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </div>
  );
};

export default RecentActivity;
