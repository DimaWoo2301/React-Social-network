import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  minLengthCreator,
  requiredField,
} from "../../validator/Validator";
import Input from "../Common/FormsControl/FormsControl";

const maxLength = maxLengthCreator(100);
const minLength = minLengthCreator(1);

let DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div>
        <Field
          validate={[requiredField, maxLength, minLength]}
          component={Input}
          name={"text"}
          className={s.addText}
          placeholder="You text"
        />
        <button>Send</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "Dialogs" })(DialogsForm);

const Dialogs = (props) => {
  const onSubmit = (values) => {
    props.addMessageActionCreate(values.text);
  };
  return (
    <div>
      <h1 className={s.title}>DIALOGS</h1>
      <div className={s.wrapper}>
        <div className={s.name}>
          <ul>
            <DialogItem dialogsData={props.dialogsData} />
          </ul>
        </div>
        <div className={s.dialogsContainer}>
          <Message messageData={props.messageData} />
          <LoginReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
