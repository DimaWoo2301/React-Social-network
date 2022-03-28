import React from "react";
import s from "./Post.module.css";
import { avatarFace1 } from "../../../../img";
import pen from "../../../../img/pen.jpg";

class Post extends React.Component {
  state = {
    editMode: true,
    text: this.props.messenge,
  };
  ActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  deActivateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  onStatusChange = (e) => {
    this.setState({ text: e.currentTarget.value });
  };
  render() {
    return (
      <div className={s.item}>
        <div className={s.text}>
          <img src={avatarFace1} alt="" />
          <span>{this.props.name + ":"}</span>
          {this.state.editMode && <span>{this.state.text}</span>}
          {!this.state.editMode && (
            <input
              onChange={this.onStatusChange}
              onBlur={this.deActivateEditMode}
              autoFocus={true}
              value={this.state.text}
            />
          )}
        </div>
        <div>
          {this.state.editMode && (
            <img
              onDoubleClick={this.ActivateEditMode}
              className={s.pen}
              src={pen}
              alt=""
            />
          )}
          <button>Like</button>
          <span>{this.props.likesQuantity}</span>
        </div>
      </div>
    );
  }
}

export default Post;
