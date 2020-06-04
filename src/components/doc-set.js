import React from "react";
import styles from "./doc-set.module.scss";
import { Link, withPrefix } from "gatsby";

const DocSet = ({ icon, text, link }) => {
  return (
    <div className={styles.docContainer}>
      <Link to={link}>
        <div className={styles.image}>
          <img src={withPrefix(`/icons/${icon}.png`)} alt={text} />
        </div>
        <div className={styles.description}>{text}</div>
      </Link>
    </div>
  );
};

export default DocSet;
