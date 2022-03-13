import React from "react";
import s from "./Users.module.css";
import { avatarFace1 } from "../../img";
// import axios from "axios";

let Users = (props) => {
  if (props.usersData.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoAvatar: avatarFace1,
        name: "Dmitry",
        status: "I am not friend",
        followed: true,
        location: { country: "Russin", city: "Sankt-Peterburg" },
      },
      {
        id: 2,
        photoAvatar: avatarFace1,
        name: "Ivan",
        status: "I am friend too",
        followed: false,
        location: { country: "Gruzia", city: "Humbah" },
      },
      {
        id: 3,
        photoAvatar: avatarFace1,
        name: "Gleb",
        status: "I am not friend",
        followed: false,
        location: { country: "Russin", city: "Moskov" },
      },
      {
        id: 4,
        photoAvatar: avatarFace1,
        name: "Nikita",
        status: "I am friend too",
        followed: true,
        location: { country: "Russin", city: "Sankt-Peterburg" },
      },
    ]);
  }
  // axios
  //   .get("https://social-network.samuraijs.com/api/1.0/users")
  //   .then((response) => {
  //     props.setUsers();
  //   });
  return (
    <div>
      {props.usersData.map((users) => (
        <div className={s.wrapper} key={users.id}>
          <div className={s.userAvatar}>
            <img src={users.photoAvatar} alt="" />
            {users.followed ? (
              <button
                className={s.button}
                onClick={() => {
                  props.unFollow(users.id);
                }}
              >
                UnFollow
              </button>
            ) : (
              <button
                className={s.button}
                onClick={() => {
                  props.follow(users.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={s.itemWrapper}>
            <div className={s.avatarLocalInfo}>
              <h2>{users.name}</h2>
              <span>{users.status}</span>
            </div>
            <div className={s.avatarGlobalInfo}>
              <span>{users?.location?.country || "Текста нет"}</span>
              <span>{users.location.city}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
