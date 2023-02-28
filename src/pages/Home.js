import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/homeBG.jpg"
import logo from "../images/rentr.png"

const Home = () => {

  return (
    <>
      <div className="container" style={{backgroundImage:`url(${bg})`}}>
        <div className="containerGradient"></div>

      </div>
    </>
  );
};

export default Home;
