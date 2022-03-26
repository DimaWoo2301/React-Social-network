import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUsers,
  setUsersProfile,
  updateStatus,
} from "../../redax/profile-reducer";
// import { WithAuthRedirect } from "../../huc/WithAuthRedirect";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11937;
    }
    this.props.getUsers(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    setUsersProfile,
    getUsers,
    getStatus,
    updateStatus,
  }),
  withRouter
  // WithAuthRedirect
)(ProfileContainer);
