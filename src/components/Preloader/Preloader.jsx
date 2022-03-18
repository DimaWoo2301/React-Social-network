import iconLoaded from "../../img/Spinner-1s-204px.svg";
import React from "react";
import s from "./Preloader.module.css";
let Preloader = (props) => {
  return <img className={s.imgLoading} src={iconLoaded} alt="loading" />;
};
export default Preloader;
