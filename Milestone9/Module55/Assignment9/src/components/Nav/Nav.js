import React, { useState } from "react";
import Links from "./Links/Links";
import logo from "../../images/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Nav = () => {
    const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Quiz Topics", path: "/" },
    { id: 2, name: "Departments", path: "/departments" },
    { id: 3, name: "ReChart", path: "/chart" },
    { id: 4, name: "Blog", path: "/blog" },
  ];
  return (
    <div className="bg-green-500 text-black lg:flex items-center justify-around py-3 shadow-lg sticky top-0">
      <div className="flex items-center justify-between mx-8">
        <img className="lg:w-48 w-36" src={logo} alt="" />
        <div onClick={() => setOpen(!open)} className="h-8 w-8 lg:hidden ">
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
      </div>
      <nav>
        <ul
          className={`pt-5 lg:pt-0 lg:flex lg:static absolute left-0 right-0 mx-auto bg-green-500 shadow-xl lg:shadow-none ${
            open ? "top-22" : "top-[-500px]"
          }`}
        >
          {routes.map((route) => (
            <Links key={route.id} route={route}></Links>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
