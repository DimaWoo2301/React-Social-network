import Users from "./Users";
import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  UnFollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../Redax/users-reducer";

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(UnFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
