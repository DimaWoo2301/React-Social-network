import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { loginExamination, loginOut } from "../../redax/auth-reducer";
import { Redirect } from "react-router-dom";

export class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.loginExamination();
  }

  render() {
    if (!this.props.isAuth) {
      return (
        <>
          <Redirect to={"/login"} />
          <Header {...this.props} />;
        </>
      );
    }
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

// let WitchUrlDataContainerComponent = withRouter(HeaderContainer);

export default connect(mapStateToProps, { loginExamination, loginOut })(
  HeaderContainer
);
