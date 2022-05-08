import React, { useState } from "react";
import classes from "./Register.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/apiCalls";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [initialRender, setInitialRender] = useState(true);

  // to dispatch actions in or to redux
  const dispatch = useDispatch();
  // to get the state from redux
  const { isFetching, error } = useSelector((state) => state.user);

  const registerHandler = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
    setInitialRender(false);
  };

  let hasError = !initialRender && !isFetching && error;

  return (
    <div className={classes.container}>
      {/* login container */}
      <div className={classes["container__login"]}>
        <div className={classes.login}>
          <div className={classes["login__logo"]}></div>
          <div className={classes["login__title"]}>
            <h1>Create a new account</h1>
          </div>

          <div className={classes["login__form"]}>
            {hasError && (
              <p className={classes["error-message"]}>
                Register failed, make sure to fill in all fields
              </p>
            )}
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button onClick={registerHandler} disabled={isFetching}>
                Register
              </button>
              <div className={classes["login__form__register-instead"]}>
                <Link to="/login">
                  Already a member? <span>Login Here</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* image container */}
      <div className={classes["container__image"]}>
        <div className={classes["text-box"]}>
          <h1 className={classes["heading-primary"]}>
            <span className={classes["heading-primary--main"]}>POPULARITY</span>
            <span className={classes["heading-primary--sub"]}>
              OVER 30+ MILLION
              <br />
              AND COUNTING
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
