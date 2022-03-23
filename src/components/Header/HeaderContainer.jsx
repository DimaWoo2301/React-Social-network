import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { loginExamination } from "../../Redax/auth-reducer";

export class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.loginExamination();
  }

  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

// let WitchUrlDataContainerComponent = withRouter(HeaderContainer);

export default connect(mapStateToProps, { loginExamination })(HeaderContainer);
