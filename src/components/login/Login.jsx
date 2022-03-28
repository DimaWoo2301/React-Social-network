import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import Input from "../Common/FormsControl/FormsControl";
import { requiredField } from "../../validator/Validator";
import { connect } from "react-redux";
import { login } from "../../redax/auth-reducer";
import { Redirect } from "react-router-dom";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div className={s.item}>
        <Field
          validate={[requiredField]}
          component={Input}
          name={"login"}
          className={s.input}
          type="text"
          placeholder={"Login: ivanov0000@gmail.com"}
        />
      </div>
      <div className={s.item}>
        <Field
          validate={[requiredField]}
          component={Input}
          name={"password"}
          className={s.input}
          type="password"
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

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={s.wrapper}>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
