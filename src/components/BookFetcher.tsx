import React, { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "../models/Book";

interface ApiItem {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Book>;
}

const BookFetcher = ({
  selectedCaracter,
  onChangeBook,
}: {
  selectedCaracter: string;
  onChangeBook: any;
}) => {
  const [data, setData] = useState<ApiItem>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const url = `http://127.0.0.1:8000/books?languages=en&search=${selectedCaracter}`;

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
  }, []);
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
            key={item.title}
            onClick={() => onChangeBook(item)}
          >
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookFetcher;
