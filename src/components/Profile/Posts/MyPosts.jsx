import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLength30,
  minLength2,
  requiredField,
} from "../../../validator/Validator";

let MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div className={s.item}>
        <Field
          validate={[requiredField, maxLength30, minLength2]}
          component={"input"}
          name={"text"}
          placeholder="You text"
          className={s.message}
        />
        <button className={s.button}>Send</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "MyPosts" })(MyPostForm);

const MyPosts = (props) => {
  let postElements = props.postsData.map((el) => (
    <Post
      key={el.text}
      messenge={el.text}
      name={el.name}
      likesQuantity={el.like}
    />
  ));

  const onSubmit = (values) => {
    props.addPost(values.text);
  };

  return (
    <div>
      <h2>My post</h2>
      <div className={s.wrapper}>
        <LoginReduxForm onSubmit={onSubmit} newPostText={props.newPostText} />
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
