import iconLoaded from "../../../img/Spinner-1s-204px.svg";
import React from "react";
import s from "./Preloader.module.css";
let Preloader = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.imgLoading} src={iconLoaded} alt="loading" />{" "}
    </div>
  );
};
export default Preloader;
