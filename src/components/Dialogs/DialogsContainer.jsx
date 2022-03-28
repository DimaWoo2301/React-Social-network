import { addMessageActionCreate } from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../huc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageActionCreate: (text) => {
      dispatch(addMessageActionCreate(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
