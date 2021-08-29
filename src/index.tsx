import "./style.css";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <div className="flex flex-col p-6 items-center justify-center h-full">
      <h1 className="text-green-400 font-extrabold text-7xl">Hello World!</h1>
      <p className="tracking-widest text-4xl">
        This is a functional component and a template!
      </p>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
