import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { removeBook } from "../api";

const BookItem = ({ book }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  const useRemoveBook = async () => {
    await mutateAsync(book.id);
  };

  return (
    <div className="bookItem">
      <Link to={`/update-book/${book.id}`}>{book.book_name}</Link>
      <Button primary onClick={useRemoveBook}>
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
    </div>
  );
};

export default BookItem;
