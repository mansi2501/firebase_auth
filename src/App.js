import Navbar from "./components/layout/Navbar";
import { Switch, Route } from "react-router";
import Userdata from "./components/UserData/UserData";
import Userdetail from "./components/UserData/UserDetail";
import Userform from "./components/UserData/UserForm";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/routes/PrivateRoute";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <PrivateRoute component={Navbar} />
      <Switch>
        <PrivateRoute exact path="/" component={Userdata} />
        <PrivateRoute exact path="/userdetail/:id" component={Userdetail} />
        <PrivateRoute exact path="/userform/:id?" component={Userform} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
