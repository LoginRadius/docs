import React from "react";
import { Link } from "gatsby";

const Pro = ({ children }) => {
  return (
    <div>
      {children}
      <Link className={"pro"}> Developer Permium </Link>
    </div>
  );
};

export default Pro;
