import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="userAge">Age (Years)</label>
        <input type="number" id="userAge" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;