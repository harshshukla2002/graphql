import { gql } from "@apollo/client";

export const BOOK_QUERY = gql`
  query GetBooks {
    books {
      id
      name
    }
  }
`;

export const AUTHOR_QUERY = gql`
  query GetAuthor {
    authors {
      name
      age
      id
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export const GET_SINGLE_BOOK = gql`
  query GetSingleBook($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
