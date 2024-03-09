import React from "react";
import { create } from "../utils";

const AddTodoForm = (props) => {
  const addTodo = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const data = {
      title,
      completed: false,
      userId: props.user.id,
    };
    // try {
    //   const response = await create(
    //     "https://jsonplaceholder.typicode.com/todos",
    //     data
    //   );
    //   console.log(response.data);
    //   props.showForm(false);
    //   alert("Todo Added");
    // } catch (error) {
    //   console.log(error);
    //   alert("Error");
    // }
    const updatedTodos = [...props.user.todos, data];
    const updatedUser = { ...props.user, todos: updatedTodos };
    const updatedUsers = props.users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    props.setUsers(updatedUsers);
    props.showForm(false);
  };

  return (
    <div>
      <form
        onSubmit={addTodo}
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4>Add New Todo</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              display: "flex",
              margin: "5px",
            }}
            htmlFor="title"
          >
            Title :{" "}
          </label>
          <input
            style={{
              display: "flex",
              margin: "5px",
            }}
            id="title"
            type="text"
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5px",
          }}
        >
          <button
            style={{
              backgroundColor: "orange",
              margin: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Add
          </button>
          <button
            style={{
              backgroundColor: "orange",
              margin: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="button"
            onClick={() => props.showForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
