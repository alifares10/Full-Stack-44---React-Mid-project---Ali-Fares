import React, { useEffect, useState } from "react";

const UserCard = (props) => {
  const { user } = props;
  const [hasUnCompletedTodos, setHasUnCompletedTodos] = useState(false);
  const [moreData, setMoreData] = useState(false);

  //check if user has uncompleted todos
  useEffect(() => {
    const checkCompletedTodos = () => {
      const completed = user.todos.filter((todo) => todo.completed === false);
      if (completed.length > 0) {
        setHasUnCompletedTodos(true);
      }
    };
    checkCompletedTodos();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${hasUnCompletedTodos ? "red" : "green"}`,
        margin: "10px",
        padding: "10px",
        alignItems: "start",
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
        <p> ID : {props.user.id}</p>
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
            {props.user.name}
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
          Email :{" "}
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
            {props.user.email}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          onMouseEnter={() => setMoreData(true)}
          onMouseLeave={() => setMoreData(false)}
        >
          <button>Other Data</button>
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
              <>
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
                    {props.user.address.city}
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
                    {props.user.address.street}
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
                    {props.user.address.zipcode}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          <button>Update</button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
