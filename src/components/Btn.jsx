// Btn.jsx

import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ name, bg, text, hover, path }) => {
  return (
    <Link
      to={path}
      className={` w-full flex items-center justify-center gap-2 ${bg} ${text} px-5 py-3 rounded-xl font-medium shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 ease-in-out ${hover} `}
    >
      <i className="ri-add-fill text-lg"></i>
      <span>{name}</span>
    </Link>
  );
};

export default Btn;
