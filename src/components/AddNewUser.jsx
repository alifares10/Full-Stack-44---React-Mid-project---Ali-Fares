import React from "react";

const AddNewUser = (props) => {
  const addUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = {
      name,
      email,
      id: props.users.length + 1,
    };
    const updatedUsers = [...props.users, newUser];
    props.setUsers(updatedUsers);
    props.showForm(false);
    alert("User added successfully");
  };
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",

          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={addUser}
      >
        <h2> Add New User</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />

          <label htmlFor="">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "10px",
            padding: "10px",
          }}
        >
          <button
            style={{
              margin: "10px",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
            }}
          >
            {" "}
            Add{" "}
          </button>
          <button
            style={{
              backgroundColor: "red",
              margin: "10px",
              width: "100px",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="button"
            onClick={() => props.showForm(false)}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewUser;
