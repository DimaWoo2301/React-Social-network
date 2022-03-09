import React from 'react';
import s from "./ProfileInfo.module.css";
import {wallimg} from "../../../img";

const ProfileInfo = () => {
  return (
    <div>
      <img className={s.wall_img} src={wallimg} alt=""/>
      <div className={s.card}>
        <div className={s.avatar}/>
        <div className={s.card_info}>
          <h2>Dmitry V.</h2>
          <span>Date of Brith: 2 january</span>
          <span>City: Sankt-Peterburg</span>
          <span>Education: BSU'11</span>
          <a>Web site: https://Vk.com/Dima</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;