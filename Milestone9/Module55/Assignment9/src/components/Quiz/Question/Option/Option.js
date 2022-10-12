import React, { useContext } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { DashContext } from '../../Quiz';

const Option = ({ option, id, correctAnswer }) => {
    const [correct, setCorrect, wrong, setWrong] = useContext(DashContext);
    // console.log(id);
    const showToastMessage = (correctAnswer, option) => {
        if (correctAnswer === option) {
            setCorrect(correct + 1);
         toast.success("Correct Answer!", {
          position: toast.POSITION.TOP_CENTER,
        });
        } else {
            setWrong(wrong + 1);
         toast.error("Wrong Answer!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      console.log(correctAnswer);
    };
    return (
      <label
        htmlFor={option}
        className=" shadow-lg rounded-xl border-x-4 border-black hover:border-[#e92b19] hover:border-t-2 flex hover:bg-green-400 py-5"
        // onClick={() => showToastMessage(correctAnswer, option)}
      >
        <input
          type="radio"
          id={option}
          name={id}
          className="ml-4"
          onClick={() => showToastMessage(correctAnswer, option)}
        />
        <p className="ml-4">{option}</p>
      </label>
    );
};

export default Option;