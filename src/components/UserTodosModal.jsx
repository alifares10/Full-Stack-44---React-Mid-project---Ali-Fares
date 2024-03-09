import React, { useState } from "react";
import { update } from "../utils";
import "../css/UserTodosModal.css";
import AddTodoForm from "./AddTodoForm";
import AddPostForm from "./AddPostForm";

const UserTodosModal = (props) => {
  const { user } = props;
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);

  if (!props.isOpen) return null;

  const addNewTodo = () => {
    setShowAddTodo(true);
  };

  const handleTodoUpdate = async (id) => {
    // try {
    //   const response = await update(
    //     `https://jsonplaceholder.typicode.com/todos/`,
    //     id,
    //     {
    //       completed: true,
    //     }
    //   );
    //   console.log(response.data);
    //   alert("Todo Completed");
    // } catch (error) {
    //   console.log(error);
    //   alert("Error");
    // }

    //update user todos
    const updatedTodos = user.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    //update the user
    const updatedUser = { ...user, todos: updatedTodos };
    //update all the users
    const updatedUsers = props.users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    props.setUsers(updatedUsers);
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={() => props.onClose()}>
          &times;
        </span>
        <div className="modal-content">
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>Todos: {user.name}</h3>
            <button
              style={{
                backgroundColor: "orange",
                margin: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={addNewTodo}
            >
              Add
            </button>
          </div>
          {showAddTodo ? (
            <AddTodoForm
              showForm={setShowAddTodo}
              user={user}
              setUsers={props.setUsers}
              users={props.users}
            />
          ) : (
            <>
              {user.todos.map((todo) => (
                <div key={todo.id} className="todos">
                  <div className="todo">
                    <p>Title: {todo.title}</p>
                    <div
                      style={{
                        justifyContent: "space-between",
                        display: "flex",
                        alignItems: "center",

                        width: "450px",
                      }}
                    >
                      <p>Completed: {todo.completed.toString()}</p>
                      {!todo.completed && (
                        <button
                          style={{
                            margin: "5px",
                            padding: "5px",
                            backgroundColor: "orange",
                          }}
                          onClick={() => handleTodoUpdate(todo.id)}
                        >
                          Mark Completed
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>Posts : {user.name}</h3>
            <button
              style={{
                backgroundColor: "orange",
                margin: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setShowAddPost(true)}
            >
              Add
            </button>
          </div>
          {showAddPost ? (
            <AddPostForm
              showForm={setShowAddPost}
              user={user}
              setUsers={props.setUsers}
              users={props.users}
            />
          ) : (
            <>
              {user.posts.map((post) => (
                <div key={post.id} className="posts">
                  <div className="post">
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserTodosModal;
