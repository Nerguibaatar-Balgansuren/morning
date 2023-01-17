import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const books = [
  { bid: 1, bookName: "Car" },
  { bid: 2, bookName: "Products" },
  { bid: 3, bookName: "Dog" },
];


export default function Book() {
    const { id } = useParams();
    const [data, setData] = useState(books);
    

    const arr = data.filter((e) => e.bid == id);
    

    if (arr.length == 0) {
      return <em>Book not found</em>;
    }

    const { bid, bookName } = data[0];
  return (
    <div>
        <h2>books {arr[0].bid}</h2>
        <p>Name {arr[0].bookName}</p>
        <p>Author {}</p>
        <p>Published year {}</p>
    </div>
  );
}
