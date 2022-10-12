import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  // console.log(topic);
  const { id, logo, name, total } = topic;
  return (
    <div className="bg-green-500 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg">
      <div>
        <img className="border-b-2 border-b-black w-full" src={logo} alt="" />
      </div>
      <div className='bg-green-600'>

      <div className="flex justify-around items-center pt-3 ">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>Total Qus: {total}</p>
      </div>
      <Link to={`/topics/quiz/${id}`}>
        <div className="flex justify-center">
          <button className="w-3/4 bg-yellow-400 rounded-lg my-4 hover:bg-green-400 hover:border-x-4 hover:border-t-2 hover:border-[#e92b19] hover:shadow-lg">
            <p className=" py-2 font-bold">Start Quiz</p>
          </button>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Topic;
