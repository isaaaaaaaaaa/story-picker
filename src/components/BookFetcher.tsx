import React, { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "../models/Book";

interface ApiItem {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Book>;
}

const BookFetcher = ({ selectedCaracter, onChangeBook }) => {
  const [data, setData] = useState<ApiItem>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // const [selectedCaracter, setSelectedCaracter] = useState<string | null>(null);
  // const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  let bookCoverUrl: string | undefined = "";
  const [url, setUrl] = useState<string>(
    `http://127.0.0.1:8000/books?languages=en&search=${selectedCaracter}`
  );

  const caracters: Array<string> = [
    "Girl",
    "Boy",
    "Princess",
    "Prince",
    "Witch",
    "Cat",
    "Dog",
    "Animal",
    "Pirate",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiItem>(url);
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  // function handleClick(caracter: string) {
  //   fetchData(`${url}&search=${caracter}`);
  //   setSelectedCaracter(caracter);
  // }

  // function handleBookClick(book: Book) {
  //   setSelectedBook(book);
  //   alert(Object.entries(book.formats).find((x) => x[0] === "image/jpeg")[1]);
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error} </div>;
  }
  return (
    <section>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        {data?.results.map((item) => (
          <div
            className="cursor-pointer rounded-xl border-2 border-solid border-indigo-500 shadow-lg m-8"
            key={item.id}
            onClick={() => onChangeBook(item)}
          >
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );

  // if (selectedBook !== null) {
  //   return (
  //     <section>
  //       <p>{bookCoverUrl}</p>
  //       <img src={bookCoverUrl}></img>
  //     </section>
  //   );
  // }
  return <section></section>;
};

export default BookFetcher;
