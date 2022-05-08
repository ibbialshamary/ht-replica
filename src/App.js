import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Welcome from "./pages/Welcome/Welcome";
import "./App.scss";
import { useSelector } from "react-redux";
import Register from "./pages/Register/Register";

function App() {
  // get user
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/welcome" /> : <Login />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/welcome" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/welcome" /> : <Register />}
        </Route>
        <Route path="/forgotten-password">Forgotten Password</Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
