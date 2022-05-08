import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

const Welcome = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };
  return (
    <div>
      Welcome, user <Link to="/product">Click me to go to product</Link>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Welcome;
