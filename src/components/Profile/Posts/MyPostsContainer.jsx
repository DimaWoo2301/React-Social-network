import React from "react";
import {
  addPostActionCreate,
  updateNewPostTextActionCreate,
} from "../../../Redax/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreate());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreate(text));
        };

        return (
          <MyPosts
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
            addPostActionCreate={addPost}
            updateNewPostTextActionCreate={onPostChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = () => {
  return {};
};
const MyPostsContainers = connect()(MyPosts);

export default MyPostsContainer;
