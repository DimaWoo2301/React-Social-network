import React from "react";
import { bmwlogo } from "../../img";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className="container">
        <img className={s.imgBmw} src={bmwlogo} alt="" />
        <div className={s.loginBlock}>
          {props.isAuth ? (
            <div>
              {props.login} -{" "}
              <button onClick={props.loginOut}>Out login</button>
            </div>
          ) : (
            <NavLink to={"/login"}>login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
