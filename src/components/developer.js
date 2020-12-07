import React from "react";

const developer = ({ children }) => {
    return (
        <div className={"pro-wrap"}>
            {children}
            <div className={"pro"}> Developer </div>
        </div>
    );
}

export default developer
