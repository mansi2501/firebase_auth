import React from "react";

const Avatar = (props) => {
  const { url, height = "100px", width = "100px" } = props;
  return (
    <div style={{ width, height, margin: "auto" }}>
      <img src={url} alt="profile" className="card-img-top rounded-circle" />
    </div>
  );
};

export default Avatar;
