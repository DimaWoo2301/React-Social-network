import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsers, setUsersProfile } from "../../redax/profile-reducer";
// import { WithAuthRedirect } from "../../huc/WithAuthRedirect";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsers(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { setUsersProfile, getUsers }),
  withRouter
  // WithAuthRedirect
)(ProfileContainer);
