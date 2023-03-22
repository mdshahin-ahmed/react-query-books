import "./App.css";
import { Route, Routes } from "react-router-dom";
import BookLists from "./Components/BookLists";
import CreateBooks from "./Components/CreateBooks";
import UpdateBook from "./Components/UpdateBook";
import NavBar from "./shared/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<BookLists />}></Route>
        <Route path="/create-book" element={<CreateBooks />}></Route>
        <Route path="/update-book/:id" element={<UpdateBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
