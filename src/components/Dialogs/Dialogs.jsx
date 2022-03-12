import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let addMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessageActionCreate();
  };

  let onPostChange = () => {
    let text = addMessageElement.current.value;
    props.updateNewMassagePostText(text);
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
          <input
            onChange={onPostChange}
            ref={addMessageElement}
            className={s.addText}
            placeholder="You text"
            value={props.newMessagePostText}
          />
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
