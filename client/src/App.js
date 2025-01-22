import { useState } from "react";
import "./App.css";
import AddBooks from "./component/AddBooks";
import BookDetails from "./component/BookDetails";

import BookList from "./component/BookList";

function App() {
  const [selectedBook, setSelectedBook] = useState("");
  return (
    <div className="App">
      <h1>This is Book App</h1>
      <div className="main">
        <div className="left">
          <BookList setSelectedBook={setSelectedBook} />
          <AddBooks />
        </div>
        <div className="right">
          <BookDetails selectedBook={selectedBook} />
        </div>
      </div>
    </div>
  );
}

export default App;
