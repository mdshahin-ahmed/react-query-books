import { useQuery } from "react-query";
import { getAllBooks } from "../api";
import BookItem from "./BookItem";

const BookLists = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);
  // console.log(data);

  let content;

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (isError) {
    content = <h2>{error.message}</h2>;
  } else {
    content = data.map((book) => (
      <BookItem key={book.id} book={book}></BookItem>
    ));
  }

  return <div>{content}</div>;
};

export default BookLists;
