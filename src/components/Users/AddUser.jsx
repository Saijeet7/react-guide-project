import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredUserage);
  };

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const userageChangedHandler = (event) => {
    setEnteredUserage(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" onChange={usernameChangedHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={userageChangedHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
