import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Client from "./pages/Client";
import Projects from "./pages/Projects";
import Task from "./pages/Task";
import Payments from "./pages/Payments";
import Notes from "./pages/Notes";
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import Settings from "./pages/Settings";

const App = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex min-h-screen bg-neutral-50 ml-0 md:ml-20 lg:ml-52">
      <SideBar menu={menu} setMenu={setMenu} />
      <Nav menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/task" element={<Task />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
