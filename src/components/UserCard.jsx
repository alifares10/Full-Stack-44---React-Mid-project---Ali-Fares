import React, { useEffect, useState } from "react";
import { update, remove } from "../utils";
import UserTodosModal from "./UserTodosModal";

const UserCard = (props) => {
  const { user } = props;
  const [hasUnCompletedTodos, setHasUnCompletedTodos] = useState(false);
  const [moreData, setMoreData] = useState(false);
  const [isShowTodos, setIsShowTodos] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  //check if user has uncompleted todos
  useEffect(() => {
    const checkCompletedTodos = () => {
      const completed = user.todos.filter((todo) => todo.completed === false);
      if (completed.length > 0) {
        setHasUnCompletedTodos(true);
      } else {
        setHasUnCompletedTodos(false);
      }
    };
    checkCompletedTodos();
  }, [props.users]);

  const closeMoreData = () => {
    setMoreData(false);
  };

  const showTodos = () => {
    setBgColor(true);
    setIsShowTodos(true);
  };

  const closeTodos = () => {
    setBgColor(false);
    setIsShowTodos(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const id = user.id;
    const data = {
      name,
      email,
    };
    // const response = await update(
    //   "https://jsonplaceholder.typicode.com/users",
    //   id,
    //   data
    // );
    // alert(
    //   "User Updated ," +
    //     "Name: " +
    //     response.data.name +
    //     " ," +
    //     "Email: " +
    //     response.data.email
    // );
    const updatedUsers = props.users.map((user) => {
      if (user.id === id) {
        return { ...user, name, email };
      }
      return user;
    });
    props.setUsers(updatedUsers);
    alert("User Updated ");
  };

  const deleteUserData = async () => {
    const id = user.id;
    //if im trying to delete user from filtered users
    if (props.filteredUsers) {
      props.setFilteredUsers(
        props.filteredUsers.filter((user) => user.id !== id)
      );
      props.setUsers(props.users.filter((user) => user.id !== id));
    } else {
      props.setUsers(props.users.filter((user) => user.id !== id));
    }
    alert("User Deleted ");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${hasUnCompletedTodos ? "red" : "green"}`,
        margin: "10px",
        padding: "10px",
        alignItems: "start",
        backgroundColor: bgColor ? "orange" : "",
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
            margin: "1px",
            padding: "1px",
          }}
        >
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={showTodos}
          >
            {" "}
            ID : {props.user.id}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              margin: "1px",
              padding: "1px",
            }}
          >
            Name :
            <input
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                margin: "5px",
                padding: "5px",
              }}
              id="name"
              type="text"
              defaultValue={props.user.name}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              margin: "1px",
              padding: "1px",
            }}
          >
            Email :{" "}
            <input
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                margin: "5px",
                padding: "5px",
              }}
              id="email"
              type="email"
              defaultValue={props.user.email}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <button
            onMouseEnter={() => setMoreData(true)}
            style={{
              backgroundColor: "GrayText",
            }}
            type="button"
          >
            Other Data
          </button>
          <div>
            <button type="submit">Update</button>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
              }}
              type="button"
              onClick={deleteUserData}
            >
              Delete
            </button>
          </div>
        </div>
        <div
          style={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
            margin: "1px",
            padding: "1px",
          }}
        >
          {moreData && (
            <div
              onClick={closeMoreData}
              style={{
                backgroundColor: "GrayText",
                borderRadius: "5px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  margin: "1px",
                  padding: "1px",
                }}
              >
                City :{" "}
                <p
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    margin: "5px",
                    padding: "5px",
                    border: "1px solid white",
                  }}
                >
                  {props.user.address ? props.user.address.city : ""}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  margin: "1px",
                  padding: "1px",
                }}
              >
                Street :{" "}
                <p
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    margin: "5px",
                    padding: "5px",
                    border: "1px solid white",
                  }}
                >
                  {props.user.address ? props.user.address.street : ""}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  margin: "1px",
                  padding: "1px",
                }}
              >
                Zip Code :{" "}
                <p
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    margin: "5px",
                    padding: "5px",
                    border: "1px solid white",
                  }}
                >
                  {props.user.address ? props.user.address.zipcode : ""}
                </p>
              </div>
            </div>
          )}
        </div>
      </form>
      <UserTodosModal
        user={user}
        isOpen={isShowTodos}
        onClose={closeTodos}
        setUsers={props.setUsers}
        users={props.users}
      />
    </div>
  );
};

export default UserCard;
