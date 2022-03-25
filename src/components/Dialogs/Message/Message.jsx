import React from "react";
import s from "./Message.module.css";

const MessageItem = (props) => {
  return (
    <div className={s.message}>
      <span>{props.name + ": "}</span>
      {props.text}
    </div>
  );
};
const Message = (props) => {
  let messageElement = props.messageData.map((el) => (
    <MessageItem key={el.index} name={el.name} text={el.text} />
  ));
  return <div>{messageElement}</div>;
};
export default Message;
