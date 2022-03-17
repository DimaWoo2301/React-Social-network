import React from "react";
import s from "./Users.module.css";
import { avatarFace1 } from "../../img/";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.usersData.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div>
        {this.props.usersData.map((users) => (
          <div className={s.wrapper} key={users.id}>
            <div className={s.userAvatar}>
              <img
                src={
                  users.photos.small != null ? users.photos.small : avatarFace1
                }
                alt=""
              />
              {users.followed ? (
                <button
                  className={s.button}
                  onClick={() => {
                    this.props.unFollow(users.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  className={s.button}
                  onClick={() => {
                    this.props.follow(users.id);
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
                <span>{"users.location.country"}</span>
                <span>{"users.location.city"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Users;
