import React from "react";
import Option from "./Option/Option";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ singleQuestion, index}) => {
  const { options, id, question, correctAnswer } = singleQuestion;
    console.log(id);
    let splits=question;
//   const splits = question.slice(3, (question.length - 4))
    for (let i = 0; i < 20; i++){
        if (splits.includes("<p>")) {
          splits = splits.replace("<p>", "");
        }
        if (splits.includes("</p>")) {
          splits = splits.replace("</p>", "");
        }
        if (splits.includes("</span>")) {
          splits = splits.replace("</span>", "");
        }
        if (splits.includes("<span>")) {
          splits = splits.replace("<span>", "");
        }
        if (
          splits.includes(
            `<span style="background-color: transparent; color: rgb(0, 0, 0);">`
          )
        ) {
          splits = splits.replace(
             `<span style="background-color: transparent; color: rgb(0, 0, 0);">`,
            ""
          );
        }
    }
   
    const showAns = (correctAnswer) => {
        toast.success(`Ans: ${correctAnswer}`, {
          position: toast.POSITION.TOP_CENTER,
        });
    };
   
  return (
    <div className="bg-green-500 p-5 mb-8 shadow-lg rounded-xl border-x-4 border-t-2 border-[#e92b19]">
      <div className="font-semibold text-2xl mb-5 flex items-center justify-between">
        Qus-{index + 1} : {`${splits}`}
        <button className="ml-9" onClick={() => showAns(correctAnswer)}>
          <EyeIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {options.map((option) => (
          <Option
            key={Math.random()}
            id={id}
            option={option}
            correctAnswer={correctAnswer}
          ></Option>
          ))}
          
      </div>
    </div>
  );
};

export default Question;
