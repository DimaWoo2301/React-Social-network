import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import avatar_face2 from "./../../../img/avatar_face2.jpg";
const DialogsItem = (props) => {
  return (
    <li className={s.avatar}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={avatar_face2} alt="photo: avatar" />
      <NavLink
        to={"/messages/" + props.id}
        className={s.dialog}
        activeClassName={s.activeLink}
      >
        {props.name}
      </NavLink>
    </li>
  );
};
const DialogItem = (props) => {
  let dialogsElement = props.dialogsData.map((el) => (
    <DialogsItem key={el.index} name={el.name} id={el.id} />
  ));
  return (
    <div className={s.item}>
      <ul>{dialogsElement}</ul>
    </div>
  );
};
export default DialogItem;
