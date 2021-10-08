import React from "react";

const Input = (props) => {
  const { type = "text", placeholder, name, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
