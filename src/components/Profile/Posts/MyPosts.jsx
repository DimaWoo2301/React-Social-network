import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postsData.map((el) => (
    <Post
      key={el.text}
      messenge={el.text}
      name={el.name}
      likesQuantity={el.like}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <h2>My post</h2>
      <div className={s.wrapper}>
        <input
          onChange={onPostChange}
          ref={newPostElement}
          placeholder="You text"
          className={s.message}
          value={props.newPostText}
        />
        <button className={s.button} onClick={addPost}>
          Send
        </button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
