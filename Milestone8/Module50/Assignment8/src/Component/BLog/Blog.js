import React from 'react';
import './BLog.css'
const Blog = () => {
    return (
      <div className="blog">
        <h2>How Does React Work?</h2>
        <p>
          While building client-side apps, a team of Facebook developers
          realized that the DOM is slow (The Document Object Model (DOM) is an
          application programming interface (API) for HTML and XML documents. It
          defines the logical structure of documents and the way a document is
          accessed and manipulated.). So, to make it faster, React implements a
          virtual DOM that is basically a DOM tree representation in JavaScript.
          So when it needs to read or write to the DOM, it will use the virtual
          representation of it. Then the virtual DOM will try to find the most
          efficient way to update the browser's DOM.
        </p>
        <h2>Props Vs State?</h2>
        <p>
          <strong>State:</strong> The state is an updatable structure that is
          used to contain data or information about the component and can change
          over time.The change in state can happen as a response to user action
          or system event
        </p>
        <p>
          <strong>Props:</strong> Props are read-only components. It is an
          object which stores the value of attributes of a tag and work similar
          to the HTML attributes. It allows passing data from one component to
          other components. It is similar to function arguments and can be
          passed to the component the same way as arguments passed in a
          function.
        </p>
        <h2>What Does useEffect do expect data load?</h2>
        <p>
          UseEffect Hook that allows us to tidy up our code before our component
          unmounts. When our code runs and reruns for every render, useEffect
          also cleans up after itself using the cleanup function. The useEffect
          Hook is built in a way that we can return a function inside it and
          this return function is where the cleanup happens. The cleanup
          function prevents memory leaks and removes some unnecessary and
          unwanted behaviors
        </p>
      </div>
    );
};

export default Blog;