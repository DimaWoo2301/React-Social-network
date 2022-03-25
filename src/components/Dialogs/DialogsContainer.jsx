import {
  addMessageActionCreate,
  updateNewMassagePostTextActionCreate,
} from "../../redax/dialogs-reducer";
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
    updateNewMassagePostText: (text) => {
      dispatch(updateNewMassagePostTextActionCreate(text));
    },

    addMessageActionCreate: () => {
      dispatch(addMessageActionCreate());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
