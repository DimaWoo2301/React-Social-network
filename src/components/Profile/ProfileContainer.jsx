import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsers, setUsersProfile } from "../../Redax/profile-reducer";
import { withRouter } from "react-router-dom";

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

let WitchUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile, getUsers })(
  WitchUrlDataContainerComponent
);
