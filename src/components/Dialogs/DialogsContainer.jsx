import {
  addMessageActionCreate,
  updateNewMassagePostTextActionCreate,
} from "../../Redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
