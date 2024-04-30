import "./Card.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Loginform from "./Loginform";
import Bodyweb from "./Bodyweb";
import Folter from "./Folter";

const Main = () => {
  return (
    <>
      <div id="seleall">
        <Navbar />

        <Bodyweb />
        <Folter />
      </div>
    </>
  );
};

export default Main;
