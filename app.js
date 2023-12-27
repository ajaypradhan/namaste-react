import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Title functional Component</h1>;

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
