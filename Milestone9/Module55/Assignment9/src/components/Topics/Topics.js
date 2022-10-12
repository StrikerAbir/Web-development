import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topic from "./Topic/Topic";

const Topics = () => {
  const topics = useLoaderData();
  // console.log(topics);
  return (
    <div className="pb-24">
      <Header></Header>
      <div className="flex justify-center py-10">
        <h1 className="text-2xl lg:text-4xl font-extrabold tracking-wider mb-10 px-20 py-5 bg-green-500 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg ">
          Quiz Topics
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mx-10">
        {topics.data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
