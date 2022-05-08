import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [initialRender, setInitialRender] = useState(true);

  // to dispatch actions in or to redux
  const dispatch = useDispatch();
  // to get the state from redux
  const { isFetching, error } = useSelector((state) => state.user);

  const loginHandler = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    setInitialRender(false);
  };

  let hasError = !initialRender && !isFetching && error;

  return (
    <div className={classes.container}>
      <div className={classes["container__image"]}>
        <div className={classes["text-box"]}>
          <h1 className={classes["heading-primary"]}>
            <span className={classes["heading-primary--main"]}>HELLOTALK</span>
            <span className={classes["heading-primary--sub"]}>
              is where life happens
            </span>
          </h1>
        </div>
      </div>
      <div className={classes["container__login"]}>
        <div className={classes.login}>
          <div className={classes["login__logo"]}></div>
          <div className={classes["login__title"]}>
            <h1>Hello Again!</h1>
            <p>
              Login to get practice languages with 30 million native speakers
              across the planet
            </p>
          </div>

          <div className={classes["login__form"]}>
            {hasError && (
              <p className={classes["error-message"]}>Login attempt failed</p>
            )}
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={classes["login__form__forgotten-password"]}>
                <Link to="/forgotten-password">Forgotten Password</Link>
              </div>
              <br />
              <button onClick={loginHandler} disabled={isFetching}>
                Login
              </button>
              <div className={classes["login__form__register-instead"]}>
                <Link to="/register">
                  Don't have an account? <span>Register Instead</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
