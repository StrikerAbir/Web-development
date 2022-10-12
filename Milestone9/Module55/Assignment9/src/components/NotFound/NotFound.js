import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/myheroaca.png";
const NotFound = () => {
  return (
    <div className="bg-black h-screen text-white pt-24">
      <div className="flex flex-col items-center ">
        <img className="w-36 md:w-48"
          src="https://media.giphy.com/avatars/myheroacademia/KLsed562kWfD/200h.gif"
          alt=""
        />
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          404 Not Found
        </h1>
        <img className="my-5" src={notfound} alt="" />

        <Link to="/">
          <div className="p-5 bg-[#e92b19] rounded-xl">Go back</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
