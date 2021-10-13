import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const Overlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>{props.message}</div>
      <footer className={styles.actions}>
        <Button onClick={props.onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
