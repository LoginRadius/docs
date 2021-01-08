import React from "react";

const Pro = ({ children }) => {
  return (
    <div className={"pro-wrap"}>
      {children}
      <div className={"pro"}> Developer Premium </div>
    </div>
  );
};

export default Pro;
