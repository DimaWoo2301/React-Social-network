import { addPostActionCreate } from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreate(text));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
