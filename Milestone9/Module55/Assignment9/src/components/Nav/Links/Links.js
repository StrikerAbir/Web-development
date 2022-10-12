import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ route }) => {
  const { path, name } = route;
  const activeStyle = {
    borderTop: "1px solid #e92b19",
    borderLeft: "4px solid #e92b19",
    borderRight: "4px solid #e92b19",
    borderRadius: "8px",
    padding: "10px 20px",
    boxShadow: "0px 4px 3px #86efac",
    color: "white",
  };
  return (
    <div className="lg:pl-8 font-bold my-7 flex lg:block justify-center">
      <NavLink
        to={path}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Links;
