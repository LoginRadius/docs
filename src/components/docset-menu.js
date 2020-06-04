import React from "react";

import styles from "./doc-set.module.scss";

const DocSetMenu = ({ children }) => {
  return <div className={styles.container}> {children}</div>;
};

export default DocSetMenu;
