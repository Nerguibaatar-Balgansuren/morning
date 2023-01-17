import React from "react";
const books = [
  { bid: 1, bookName: "Car" },
  { bid: 2, bookName: "Products" },
  { bid: 3, bookName: "Dog" },
];

export default function BookList() {
  return (
    <div>
      <h2>BookList</h2>
      <ul>
        {books.map(({ bid, bookName }) => {
          return (
            <li>
              <a href={`/books/${bid}`}>{bookName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
