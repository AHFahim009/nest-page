import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import ShowBook from "../SHOW BOOK/ShowBook";

const Book = () => {
  const { books } = useLoaderData();
  //   console.log(books)
  return (
    <div className="my-container">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
        {books.map((book) => (
          <ShowBook book={book}></ShowBook>
        ))}
      </section>
    </div>
  );
};

export default Book;
