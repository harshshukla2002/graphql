import React from "react";

import "./style.css";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_BOOK } from "../../queries/queries";

const BookDetails = ({ selectedBook }) => {
  const { loading, data } = useQuery(GET_SINGLE_BOOK, {
    variables: { id: selectedBook },
  });

  return (
    <div className="book-details-container">
      <h2>Book Details</h2>
      <hr />
      {loading && (
        <h3
          style={{
            marginTop: "10%",
            marginLeft: "20%",
            backgroundColor: "#dee2e6",
          }}
        >
          Loading Details.....
        </h3>
      )}
      {!loading && (
        <div className="book-wrapper">
          <h3>{data?.book.name}</h3>
          <ul
            style={{
              padding: "5px",
              paddingLeft: "30px",
              backgroundColor: "#dee2e6",
            }}
          >
            <li>Genre: {data?.book.genre}</li>
            <li>Author: {data?.book.author.name}</li>
            <li>Author Books- </li>
            <ul style={{ marginLeft: "5px" }}>
              {data?.book.author.books.map((book) => {
                return <li>{book.name}</li>;
              })}
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
