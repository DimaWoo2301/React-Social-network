import React from "react";
import s from "./ProfileStatus.module.css";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }
  deActivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div>
          <span>You status: </span>
          {!this.state.editMode && (
            <div className={s.statusText}>
              <span onDoubleClick={this.activateEditMode.bind(this)}>
                {this.props.status}
              </span>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                className={s.statusInput}
                autoFocus={true}
                onBlur={this.deActivateEditMode.bind(this)}
                value={this.props.status}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
