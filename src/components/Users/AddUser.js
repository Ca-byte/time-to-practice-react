import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnterededUserName] = useState("");
  const [enteredUserAge, setEnterededUserAge] = useState("");
  const [error, setError] = useState({ title: null, message: null });

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (no-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (age  > 0 ).",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setEnterededUserName("");
    setEnterededUserAge("");
  };

  const userChangeNameHandler = (event) => {
    setEnterededUserName(event.target.value);
  };

  const userChangeAgeHandler = (event) => {
    setEnterededUserAge(event.target.value);
  };

  const closeHandler = () => {
    setError({ title: null, message: null });
  };

  return (
    <>
      {error.title && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={closeHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={userChangeNameHandler}
          />
          <label htmlFor="userAge"> Age (Years)</label>
          <input
            type="number"
            id="userAge"
            value={enteredUserAge}
            onChange={userChangeAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
