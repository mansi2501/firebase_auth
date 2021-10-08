import React, { useState, useEffect } from "react";
import { useFirestore } from "react-redux-firebase";
import { Link, useParams } from "react-router-dom";
import Avatar from "../layout/Avatar";
import Loading from "../layout/Loading";

const Userdetail = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const firestore = useFirestore();

  const loadUser = async () => {
    try {
      const docRef = firestore.collection("user").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setUserInfo(result.data());
      } else {
        console.log("No Such User!");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  if (!userInfo) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <div className="row">
                <div className="col-md-4">
                  <Avatar url={`https://i.pravatar.cc/150?img=${id}`} />
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
                      <h3 className="m-0">{userInfo.name}</h3>
                      <Link className="btn btn-primary" to={`/userform/${id}`}>
                        edit profile
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <p>
                        <b>Email:</b> {userInfo.email}
                      </p>
                      <p>
                        <b>Phone:</b> {userInfo.phone}
                      </p>
                      <p>
                        <b>Website:</b> {userInfo.website}
                      </p>
                      <p>
                        <b>Address 1:</b> {userInfo.address1}
                      </p>
                      <p>
                        <b>Address 2:</b> {userInfo.address2}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdetail;
