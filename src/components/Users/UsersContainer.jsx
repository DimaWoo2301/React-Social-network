import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsersAC, UnFollowAC } from "../../Redax/users-reducer";

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
