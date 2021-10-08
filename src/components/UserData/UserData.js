import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "../layout/Avatar";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loading from "../layout/Loading";

const Userdata = () => {
  const users = useSelector((state) => state.firestore.ordered.user);
  const firestore = useFirestore();

  useFirestoreConnect([
    {
      collection: "user",
      orderBy: ["createdAt", "desc"],
    },
  ]);

  if (!users) {
    return <Loading />;
  }

  const deleteUser = async (id) => {
    try {
      await firestore.collection("user").doc(id).delete();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          {users.map((user, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={user.id}>
              <div className="card shadow text-center py-4">
                <Avatar url={`https://i.pravatar.cc/150?img=${user.id}`} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{user.name}</h5>
                  <p className="text-muted small">{user.email}</p>
                  <Link
                    className="btn btn-primary btn-profile"
                    to={`/userdetail/${user.id}`}
                  >
                    View Profile
                  </Link>
                  <button className="btn btn-edit">
                    <span className="material-icon">
                      <button
                        className="btn btn-outline-none"
                        onClick={() => deleteUser(user.id)}
                      >
                        <FaTrash />
                      </button>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userdata;
