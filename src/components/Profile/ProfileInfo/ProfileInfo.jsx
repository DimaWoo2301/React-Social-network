import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import avatar from "../../../img/imgmy.jpg";
import incognito from "../../../img/incognet.jpg";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        className={s.wall_img}
        src={
          !props.profile.photos.large != null
            ? props.profile.photos.large
            : incognito
        }
        alt=""
      />
      <div className={s.card}>
        <div className={s.avatar}>
          <img
            src={
              props.profile.photos.small != null
                ? props.profile.photos.small
                : avatar
            }
            alt=""
          />
        </div>
        <div className={s.card_info}>
          <h2>Меня зовут: {props.profile.fullName}</h2>
          <span>Ищу работу: {props.profile.lookingForAJobDescription}</span>
          <span>City: Sankt-Peterburg</span>
          <span>Обо мне: {props.profile.aboutMe}</span>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>Соц сети :{props.profile.contacts.vk}</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
