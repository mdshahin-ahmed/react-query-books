import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Form, Button } from "semantic-ui-react";
import { getBooksById, updateBook } from "../api";

const UpdateBook = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data, error, isLoading, isError, isFetching } = useQuery(
    ["books", { id }],
    getBooksById
  );
  // console.log(data);

  const { mutateAsync, isLoading: isUpdation } = useMutation(updateBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
      navigate("/");
    },
  });

  const { control, handleSubmit } = useForm({
    defaultValues: data,
  });

  const onSubmit = (data) => {
    // console.log(data);
    mutateAsync(data);
  };

  let content;

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (isError) {
    content = error.message;
  } else if (isFetching) {
    content = <h2>Fetching...</h2>;
  } else {
    content = (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group style={{ justifyContent: "center", marginTop: "20px" }}>
          <Form.Field>
            <Controller
              control={control}
              name="book_name"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Enter book name"
                  value={value}
                  onChange={(e, { value }) => onChange(value)}
                />
              )}
            />
          </Form.Field>
          <Button primary>{isUpdation ? "Updating..." : "Update"}</Button>
          <>{content}</>
        </Form.Group>
      </Form>
    );
  }

  return (
    <>{content}</>
    // <Form onSubmit={handleSubmit(onSubmit)}>
    //   <Form.Group style={{ justifyContent: "center", marginTop: "20px" }}>
    //     <Form.Field>
    //       <Controller
    //         control={control}
    //         name="book_name"
    //         render={({ field: { value, onChange } }) => (
    //           <Input
    //             placeholder="Enter book name"
    //             value={value}
    //             onChange={(e, { value }) => onChange(value)}
    //           />
    //         )}
    //       />
    //     </Form.Field>
    //     <Button primary>{isLoading ? "Updating..." : "Update"}</Button>
    //     <>{content}</>
    //   </Form.Group>
    // </Form>
  );
};

export default UpdateBook;
