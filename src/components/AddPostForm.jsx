import React from "react";
import { create } from "../utils";

const AddPostForm = (props) => {
  const addPost = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const data = {
      title,
      body,
      userId: props.user.id,
    };
    try {
      const response = await create(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log(response.data);
      props.showForm(false);
      alert("Post Added");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  return (
    <div>
      <form
        onSubmit={addPost}
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4>Add New Post</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
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
          <label
            style={{
              display: "flex",
              margin: "5px",
            }}
            htmlFor="body"
          >
            Body :{" "}
          </label>
          <textarea name="txtbody" id="body" cols="30" rows="10" required />
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

export default AddPostForm;
