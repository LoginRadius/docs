import React from "react";
import { Link } from "gatsby";

const developer = ({ children }) => {
    return (
        <div>
            {children}
            <Link className={"pro"}> Developer </Link>
        </div>
    );
}

export default developer
