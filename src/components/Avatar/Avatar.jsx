import React from "react";
import s from "./Avatar.module.css";

const Avatar = ({ name, photo }) => {
  return !photo ? (
    <div className={s.nameAvatar}>
      {name &&
        name
          .toUpperCase()
          .split(" ")
          .map((el) => el[0])
          .join(".") + "."}
    </div>
  ) : (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img src={photo} alt="Photo: avatar" />
  );
};

export default Avatar;
