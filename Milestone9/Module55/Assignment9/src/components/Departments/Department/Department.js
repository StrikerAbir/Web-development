import React from "react";

const Department = ({ dept }) => {
  // console.log(dept)
  const { id, price, picture, name } = dept;
  return (
    <div className="bg-green-500 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg">
      <div>
        <img className="rounded-t-md w-full h-[250px]" src={picture} alt="" />
      </div>
      <div className="m-5">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>Cost: $ {price}</p>
      </div>
    </div>
  );
};

export default Department;
