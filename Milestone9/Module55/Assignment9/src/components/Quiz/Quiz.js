import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const DashContext = createContext();
const Quiz = () => {
  const questionData = useLoaderData();
  const { id, name, questions } = questionData.data;
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  return (
    <>
      <DashContext.Provider value={[correct, setCorrect, wrong, setWrong]}>
        <div>
          <div className="xl:fixed right-0 m-10 p-10 shadow-lg rounded-xl border-x-4 border-black">
            <h3 className="font-bold text-lg">Dashboard</h3>
            <p>Correct : {correct}</p>
            <p>Wrong : {wrong}</p>
          </div>
          <div className="flex justify-center py-10">
            <h1 className="text-2xl lg:text-4xl font-extrabold tracking-wider mb-10 px-20 py-5 bg-green-500 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg ">
              {name} Quiz
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="lg:w-4/6 mx-5">
              {questions.map((question, index) => (
                <Question
                  key={Math.random()}
                  index={index}
                  singleQuestion={question}
                ></Question>
              ))}
            </div>
          </div>
        </div>
      </DashContext.Provider>
      <ToastContainer />
    </>
  );
};

export default Quiz;
