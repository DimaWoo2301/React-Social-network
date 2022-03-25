import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    friendData: state.navbarPage.friendData,
    linksData: state.navbarPage.linksData,
    isAuth: state.auth.isAuth,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {};
// };

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;
