import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPostRequest } from "../../modules/posts/reducer";
const AddAndupdate = () => {
  const initialSate = {
    name: "",
    email: "",
    number: "",
    file: {},
  };
  const [post, setPost] = useState({ ...initialSate });
  const dispatch = useDispatch();
  const onChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", post.name);
    formData.append("email", post.email);
    formData.append("number", post.number);
    formData.append("file", post.file);
    dispatch(addPostRequest(formData));
  };
  console.log("posts", post.file);
  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="name"
          type="text"
          value={post.name}
          onChange={(e) => onChange(e)}
        />
        <br />
        <input
          name="email"
          type="email"
          value={post.email}
          onChange={(e) => onChange(e)}
        />
        <br />

        <input
          name="number"
          type="number"
          value={post.number}
          onChange={(e) => onChange(e)}
        />
        <br />

        <input
          name="file"
          type="file"
          onChange={(e) => setPost({ ...post, file: e.currentTarget.files[0] })}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAndupdate;
