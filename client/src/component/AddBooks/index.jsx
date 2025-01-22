import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import "./style.css";
import {
  ADD_BOOK_MUTATION,
  AUTHOR_QUERY,
  BOOK_QUERY,
} from "../../queries/queries";

const intialState = {
  name: "",
  genre: "",
  authorId: "",
};

const AddBooks = () => {
  const { loading, data } = useQuery(AUTHOR_QUERY);
  const [formData, setFormData] = useState(intialState);
  const [addBook, { data: bookData }] = useMutation(ADD_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOK_QUERY }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name: formData.name,
        genre: formData.genre,
        authorId: formData.authorId,
      },
    });
    setFormData(intialState);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>ADD Book</h3>
      <div className="input-container">
        <p>Book Name: </p>
        <input
          type="text"
          placeholder="enter book name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-container">
        <p>Genre: </p>
        <input
          type="text"
          placeholder="enter genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-container">
        <p>Author: </p>
        <select
          name="authorId"
          value={formData.authorId}
          onChange={handleChange}
          required
        >
          <option value="select author">Select Author</option>
          {!loading &&
            data?.authors.map((author) => {
              return (
                <option value={author.id} key={author.id}>
                  {author.name}
                </option>
              );
            })}
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  );
};

export default AddBooks;
