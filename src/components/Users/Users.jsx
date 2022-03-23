import React from "react";
import s from "./Users.module.css";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div>
        <div className={s.wrapperNumberPage}>
          {pages.map((p, index) => {
            return (
              <button
                key={index}
                className={cn(s.pageNumber, {
                  [s.activePage]: props.currentPage === p,
                })}
                onClick={() => {
                  props.onPageChange(p);
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
        {props.usersData.map((users) => (
          <div className={s.wrapper} key={users.id}>
            <div className={s.userAvatar}>
              <NavLink to={"/profile/" + users.id}>
                <Avatar name={users.name} photo={users.photos.small} />
              </NavLink>
              {users.followed ? (
                <button
                  disabled={props.followInProgress.some(
                    (id) => id === users.id
                  )}
                  className={s.button}
                  onClick={() => {
                    props.unFollow(users.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  disabled={props.followInProgress.some(
                    (id) => id === users.id
                  )}
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
                <span>{users.status || "Не указан статус"}</span>
              </div>
              <div className={s.avatarGlobalInfo}>
                <span>{users?.location?.country || "Не указана страна"}</span>
                <span>{users?.location?.city || "Не указана город"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Users;
