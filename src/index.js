import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Hal2 from "./Hal2";
// import Hal3 from "./Hal3";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// root.render(
//   <React.StrictMode>
//     <Hal2 />
//   </React.StrictMode>
// );
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root.render(
//   <React.StrictMode>
//     <Hal3 />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
