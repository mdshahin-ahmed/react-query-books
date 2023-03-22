import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Button, Form, Input } from "semantic-ui-react";
import { addBook } from "../api";

const CreateBooks = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(addBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      book_name: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutateAsync({
      ...data,
      id: Math.ceil(Math.random() * 10000045261559549645840),
    });
  };

  return (
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
        <Button primary>{isLoading ? "Submiting..." : "Submit"}</Button>
      </Form.Group>
    </Form>
  );
};

export default CreateBooks;
