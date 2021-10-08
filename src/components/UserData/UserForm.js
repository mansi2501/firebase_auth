import React, { useState, useEffect } from "react";
import { useFirestore } from "react-redux-firebase";
import { useHistory, useParams } from "react-router";
import Input from "../layout/Input";

const Userform = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    address1: "",
    address2: "",
  });
  const firestore = useFirestore();
  const docRef = id ? firestore.collection("user").doc(id) : null;
  const history = useHistory();

  const inputChangeHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (id) {
      loadUser();
    }
  }, [id]);

  const loadUser = async () => {
    try {
      const result = await docRef.get();

      if (result.exists) {
        setUserInfo(result.data());
      } else {
        console.log("No such User!");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (id) {
      await docRef.update({
        ...userInfo,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
    } else {
      firestore.collection("user").add({
        ...userInfo,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    }
    history.push("/");
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <form onSubmit={submitHandler}>
                <div className="form-row row form-group mb-4">
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter Name"
                      name="name"
                      value={userInfo.name}
                      onChange={inputChangeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      type="email"
                      placeholder="Enter E-mail"
                      name="email"
                      value={userInfo.email}
                      onChange={inputChangeHandler}
                    />
                  </div>
                </div>
                <div className="form-row row form-group mb-4">
                  <div className="col-md-6">
                    <Input
                      type="number"
                      placeholder="Enter Phone"
                      name="phone"
                      value={userInfo.phone}
                      onChange={inputChangeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter Website"
                      name="website"
                      value={userInfo.website}
                      onChange={inputChangeHandler}
                    />
                  </div>
                </div>
                <div className="form-row row form-group">
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter Address Line 1"
                      name="address1"
                      value={userInfo.address1}
                      onChange={inputChangeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter Address Line 2"
                      name="address2"
                      value={userInfo.address2}
                      onChange={inputChangeHandler}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  {id ? "Update User " : "Add User"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userform;
