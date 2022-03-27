import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div className={s.item}>
        <Field
          component={"input"}
          name={"login"}
          className={s.input}
          type="text"
          placeholder={"Login: ivanov0000@gmail.com"}
        />
      </div>
      <div className={s.item}>
        <Field
          component={"input"}
          name={"password"}
          className={s.input}
          type="text"
          placeholder={"Password: ivanov0000"}
        />
      </div>
      <div className={s.item}>
        <Field component={"input"} name={"rememberMe"} type="checkbox" />
        <span className={s.remember}>Remember me</span>
      </div>
      <div className={s.processLogin}>
        <button className={s.button}>Enter</button>
        <span>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={s.link} href="#">
            Forgot your password?
          </a>
        </span>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const onSubmit = () => {};
  return (
    <div className={s.wrapper}>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
