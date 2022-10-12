import React from "react";
import Gif from "../Gif/Gif";

const Blog = () => {
  return (
    <div>
      <Gif></Gif>
      <div className=" flex flex-col items-center py-10">
        <h1 className="text-2xl lg:text-4xl font-extrabold tracking-wider mb-10 px-20 py-5 border-x-4 border-t bg-green-500 shadow-lg border-[#e92b19] rounded-lg ">
          Blog
        </h1>
        <div className="text-center w-3/4">
          <h2 className="text-xl lg:text-2xl font-bold text-[#e92b19] my-3 shadow-md rounded border-x-4 border-[#e92b19] border-t p-3">
            What is the purpose of React Router?
          </h2>
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL. React Router, and dynamic, client-side routing,
            allows us to build a single-page web application with navigation
            without the page refreshing as the user navigates.
          </p>
          <h2 className="text-xl lg:text-2xl font-bold text-[#e92b19] my-3 shadow-md rounded border-x-4 border-[#e92b19] border-t p-3">
            How does Context API works?
          </h2>
          <p>
            Context provides a way to pass data through the component tree
            without having to pass props down manually at every level.
            <br /> Steps:
          </p>
          <li>Declare a context.</li>
          <li>
            Context provider set kora. With value (single value, array, object)
          </li>
          <li>useContext. In the place where you want to get the context.</li>
          <h2 className="text-xl lg:text-2xl font-bold text-[#e92b19] my-3 shadow-md rounded border-x-4 border-[#e92b19] border-t p-3">
            About useRef hook.
          </h2>
          <p>
            The useRef is a hook that allows to directly create a reference to
            the DOM element in the functional component. The useRef returns a
            mutable ref object. This object has a property called .current. The
            value is persisted in the refContainer.current property. These
            values are accessed from the current property of the returned
            object. The .current property could be initialised to the passed
            argument initialValue useRef(initialValue). The object can persist a
            value for a full lifetime of the component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
