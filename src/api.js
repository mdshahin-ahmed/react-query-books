import axios from "axios";

const booksApi = axios.create({ baseURL: "http://localhost:4000" });

export const getAllBooks = async () => {
  const response = await booksApi.get("/books");
  return response.data;
};

export const removeBook = async (id) => {
  return await booksApi.delete(`/books/${id}`);
};

export const addBook = async (book) => {
  return await booksApi.post("/books", book);
};
export const updateBook = async (data) => {
  //   console.log(data);
  return await booksApi.patch(`/books/${data.id}`, data);
};

export const getBooksById = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await booksApi.get(`/books/${id}`);
  //   console.log(response.data);
  return response.data;
};
