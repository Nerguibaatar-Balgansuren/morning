import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Book from "./pages/Book";
import BookLayout from "./pages/BookLayout";
import BookNew from "./pages/BookNew";
import { Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route path="books" element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/books/new" element={<BookNew />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
