import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Search from "./Search";
import { getAll } from "../utils";
import AddNewUser from "./AddNewUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [usersWithPostsAndTodos, setUsersWithPostsAndTodos] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  useEffect(() => {
    try {
      console.log("fetching users");
      const fetchUsers = async () => {
        const response = await getAll(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.data;
        setUsers(data);
      };
      fetchUsers();
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  }, []);

  useEffect(() => {
    try {
      console.log("fetching posts");
      const fetchUsers = async () => {
        const response = await getAll(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.data;
        setPosts(data);
      };
      fetchUsers();
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  }, []);

  useEffect(() => {
    try {
      console.log("fetching todos");
      const fetchUsers = async () => {
        const response = await getAll(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.data;
        setTodos(data);
      };
      fetchUsers();
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  }, []);

  //combine users with posts and todos
  useEffect(() => {
    if (users.length === 0 || todos.length === 0 || posts.length === 0) {
      return;
    } else {
      const tmp = users.map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id);
        const userTodos = todos.filter((todo) => todo.userId === user.id);
        return { ...user, posts: userPosts, todos: userTodos };
      });
      setUsersWithPostsAndTodos(tmp);
    }
  }, [users, posts, todos]);

  //filter users based on search
  const filterUsers = (search) => {
    if (search !== "") {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
    const tmp = usersWithPostsAndTodos.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(tmp);
  };

  const addNewUser = () => {
    setShowAddUser(true);
  };

  return (
    <div
      style={{
        width: "100vh",
        maxHeight: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          border: "1px solid white",
        }}
      >
        <p></p>
        <Search filterUsers={filterUsers} />
        <button
          style={{
            backgroundColor: "orange",
            margin: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={addNewUser}
        >
          Add
        </button>
      </div>
      {showAddUser ? (
        <AddNewUser
          showForm={setShowAddUser}
          setUsers={setUsers}
          users={users}
        />
      ) : (
        <>
          {users.length === 0 ||
          todos.length === 0 ||
          posts.length === 0 ||
          usersWithPostsAndTodos.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {isSearch && filteredUsers.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    height: "500px",
                    maxHeight: "100%",
                    justifyContent: "center",
                    flexDirection: "column",
                    border: "1px solid white",
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                  <h1>No Results Found...</h1>
                </div>
              ) : (
                <>
                  {filteredUsers.length > 0
                    ? filteredUsers.map((user) => (
                        <UserCard
                          key={user.id}
                          user={user}
                          users={filteredUsers}
                          setUsers={setFilteredUsers}
                          filteredUsers={filteredUsers}
                          setFilteredUsers={setFilteredUsers}
                        />
                      ))
                    : usersWithPostsAndTodos.map((user) => (
                        <>
                          <UserCard
                            key={user.id}
                            user={user}
                            users={usersWithPostsAndTodos}
                            setUsers={setUsersWithPostsAndTodos}
                          />
                        </>
                      ))}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Users;
