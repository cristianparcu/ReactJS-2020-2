import React from "react";
import styles from "./News.module.css";

const News = (props) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.body}>{props.body}</p>
            <h3 className={styles.author}>{props.author}</h3>
        </div>
    );
};

export default News;
