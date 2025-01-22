import React from "react";
import { useQuery } from "@apollo/client";

import "./style.css";
import { BOOK_QUERY } from "../../queries/queries";

const BookList = ({ setSelectedBook }) => {
  const { loading, data } = useQuery(BOOK_QUERY);

  return (
    <div>
      {loading && (
        <h3 style={{ marginTop: "10%", marginLeft: "25%" }}>
          Loading Books.....
        </h3>
      )}
      {!loading && (
        <div className="book-list">
          <h3>Books</h3>
          <ul>
            {data?.books.map((book) => {
              return (
                <li key={book.id} onClick={() => setSelectedBook(book.id)}>
                  {book.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookList;
