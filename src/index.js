import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Newsmania from "./Components/Newsmania";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Navbar/>
    <Newsmania />
    <Footer/>
    
  </React.StrictMode>
);

reportWebVitals();
