import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import avatarFace3 from "./../../img/avatar_face3.jpg";

const NavbarItem = (props) => {
  return (
    <li className={s.settings_nav}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.item}
        to={props.path}
      >
        {props.text}
      </NavLink>
    </li>
  );
};
const FriendItem = (props) => {
  return (
    <div className={s.itemFriend}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={avatarFace3} alt="photo: avatar" />
      <span>{props.name}</span>
    </div>
  );
};

const Navbar = (props) => {
  let FriendElement = props.friendData.map((el) => (
    <FriendItem key={el.name} name={el.name} />
  ));
  return (
    <nav className={s.navbar}>
      <ul>
        {props.linksData.map((el) => (
          <NavbarItem key={el.path} path={el.path} text={el.text} />
        ))}
      </ul>
      <div className={s.line} />
      <span className={s.title}>Friends</span>
      <div className={s.friends}>{FriendElement}</div>
    </nav>
  );
};
export default Navbar;
