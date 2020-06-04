import React from "react";
import { Link } from "gatsby";

const Pro = ({ children }) => {
  return (
    <div>
      {children}
      <Link className={"pro"}> Developer Plan </Link>
    </div>
  );
};

export default Pro;
