import React, { useState, useEffect } from "react";
import axios from "axios";

type Format = { type: string; url: string };

interface Person {
  birth_year?: number;
  death_year?: number;
  name: string;
}
interface Book {
  id: number;
  title: string;
  subjects: Array<string>;
  authors: Array<Person>;
  summaries: Array<string>;
  translators: Array<Person>;
  bookshelves: Array<string>;
  languages: Array<string>;
  copyright?: boolean;
  media_type: string;
  formats: Array<Format>;
  download_count: number;
}

interface ApiItem {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Book>;
}

const GuntendexApiDataFetcher: React.FC = () => {
  const [data, setData] = useState<ApiItem>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiItem>(
          "http://127.0.0.1:8000/books"
        ); // Replace with your API endpoint
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error} </div>;
  }

  return (
    <div>
      <h1>Children's books</h1>
      <ul>
        {data?.results.map((item) => (
          <li key={item.id}>
            {" "}
            {item.title}
            <ul>
              {item.subjects.map((subject) => (
                <ul>{subject}</ul>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuntendexApiDataFetcher;
