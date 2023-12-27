import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML like or XML like syntax
const Heading = <h1> Jsx Heading</h1>;

const HeadingComponent = () => {
  return <h1>Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
