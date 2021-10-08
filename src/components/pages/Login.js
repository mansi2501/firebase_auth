import React, { useState } from "react";
import Input from "../layout/Input";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const firebase = useFirebase();
  const history = useHistory();

  const onInputChange = (event) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    await firebase.login(userLogin);
    history.replace("/");
  };

  return (
    <div className="container text-center">
      <div className="py-5">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h1>Login</h1>
                <form onSubmit={submitForm}>
                  <div className="form-group mb-3">
                    <Input
                      name="email"
                      placeholder="Enter Your E-mail"
                      value={userLogin.email}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      value={userLogin.password}
                      onChange={onInputChange}
                    />
                  </div>
                  <button className="btn btn-primary btn-block">
                    Login to dashboard
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
