import React from "react";
import ReactDOM from "react-dom/client";

// React element

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

console.log(heading)

// JSX - HTML like or XML like syntax
const jsxHeading = <h1> Jsx Heading</h1>



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
