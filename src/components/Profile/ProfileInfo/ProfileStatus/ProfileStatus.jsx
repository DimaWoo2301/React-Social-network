import React from "react";
import s from "./ProfileStatus.module.css";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <div>
          <span>You status: </span>
          {!this.state.editMode && (
            <div className={s.statusText}>
              <span onDoubleClick={this.activateEditMode}>
                {this.props.status}
              </span>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                onChange={this.onStatusChange}
                className={s.statusInput}
                autoFocus={true}
                onBlur={this.deActivateEditMode}
                value={this.state.status}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
