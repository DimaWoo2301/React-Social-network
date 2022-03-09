import React from 'react';
import {bmwlogo} from "../../img";
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <img className={s.imgBmw} src={bmwlogo} alt=""/>
      </div>
    </header>
  );
};

export default Header;