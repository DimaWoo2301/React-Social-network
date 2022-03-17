import React from "react";
import s from "./Users.module.css";
import { avatarFace1 } from "../../img/";
import axios from "axios";
import cn from "classnames";
class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        debugger;
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <>
        <div>
          <div className={s.wrapperNumberPage}>
            {pages.map((p) => {
              return (
                <button
                  className={cn(s.pageNumber, {
                    [s.activePage]: this.props.currentPage === p,
                  })}
                  onClick={() => {
                    this.onPageChange(p);
                  }}
                >
                  {p}
                </button>
              );
            })}
          </div>
          {this.props.usersData.map((users) => (
            <div className={s.wrapper} key={users.id}>
              <div className={s.userAvatar}>
                <img
                  src={
                    users.photos.small != null
                      ? users.photos.small
                      : avatarFace1
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
      </>
    );
  }
}
export default Users;
