import React from "react";
import "./Minimal.scss";
const Minimal = (props) => {
  const { children } = props;
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Minimal;
