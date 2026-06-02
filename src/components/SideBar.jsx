import React from "react";

import { NavLink } from "react-router-dom";
const SideBar = ({ menu, setMenu }) => {
  return (
    <div
      className={`
          fixed top-0 left-0 z-50 h-full
           w-64 md:w-20 lg:w-52
          bg-linear-to-b from-[#022c22] via-[#042f2e] to-[#020617]
          text-white font-roboto
          flex flex-col justify-between
          p-3 overflow-y-auto
          transition-all duration-300
          ${menu ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          `}
    >
      <div className="">
        <i
          onClick={() => setMenu(false)}
          className="ri-close-line text-2xl md:hidden cursor-pointer"
        ></i>
        <div className="mb-8 mt-2 flex items-center gap-3 px-2">
          <img src="logo.png" alt="" className="h-12 w-12 object-cover" />
          <h3 className="lg:block md:hidden text-xl pb-2 font-semibold font-serif">
            Client<span className="text-amber-400">Flow</span>
          </h3>
        </div>
        <div className="flex flex-col gap-4 text-sm p-2 ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 py-3 md:px-2 lg:px-3 px-3 rounded-xl bg-emerald-800/50"
                : "flex items-center gap-3 py-3 md:px-2 lg:px-3 px-3  rounded-xl hover:bg-emerald-800/50 transition-all duration-200"
            }
          >
            <i className="ri-home-3-line text-2xl text-center"></i>
            <span className="md:hidden lg:block"> Dashboard</span>
          </NavLink>

          <NavLink
            to={"/clients"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 py-3 md:px-2 lg:px-3 px-3 rounded-xl bg-emerald-800/50"
                : "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3  rounded-xl hover:bg-emerald-800/50 transition-all duration-200"
            }
          >
            <i className="ri-user-line text-2xl"></i>

            <span className="md:hidden lg:block"> Clients</span>
          </NavLink>

          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 py-3  md:px-2 lg:px-3  px-3 rounded-xl bg-emerald-800/50"
                : "flex items-center gap-3 py-3  md:px-2 lg:px-3  px-3 rounded-xl hover:bg-emerald-800/50 transition-all duration-200"
            }
          >
            <i className="ri-briefcase-fill text-2xl "></i>

            <span className="md:hidden lg:block"> Projects</span>
          </NavLink>

          <NavLink
            to={"/task"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3  rounded-xl bg-emerald-800/50"
                : "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3  rounded-xl hover:bg-emerald-800/50 transition-all duration-200"
            }
          >
            <i className="ri-task-line text-2xl"></i>

            <span className="md:hidden lg:block"> Tasks</span>
          </NavLink>

          <NavLink
            to={"/notes"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3  rounded-xl bg-emerald-800/50"
                : "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3  rounded-xl hover:bg-emerald-800/50 transition-all duration-200"
            }
          >
            <i className="ri-sticky-note-line text-2xl"></i>

            <span className="md:hidden lg:block"> Notes</span>
          </NavLink>

          <NavLink
            to={"/payments"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3  rounded-xl bg-emerald-800/50"
                : "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3  rounded-xl hover:bg-emerald-800/50 transition-all duration-200"
            }
          >
            <i className="ri-money-rupee-circle-line text-2xl"></i>

            <span className="md:hidden lg:block"> Payments</span>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-sm py-5 px-2 border-t border-gray-600">
        <NavLink
          to={"/settings"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3 rounded-xl bg-emerald-800/50"
              : "flex items-center gap-3 py-3  md:px-2 lg:px-3 px-3 rounded-xl hover:bg-emerald-800/50 transition-all duration-200"
          }
        >
          <i className="ri-settings-5-line text-2xl"></i>

          <span className="md:hidden lg:block"> Settings</span>
        </NavLink>

        <NavLink className="flex items-center gap-3 p-3 ">
          <i className="ri-logout-box-r-line text-2xl text-yellow-200"></i>

          <span className="md:hidden lg:block"> Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
