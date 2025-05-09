import React, { useReducer } from "react";
import "./App.css";
import GuntendexApiDataFetcher from "./components/BookFetcher";
import storyReducer from "./app/storyReducer";
import CategorySelector from "./components/CategorySelector";
import BookFetcher from "./components/BookFetcher";
import { Book } from "./models/Book";
import BookDisplay from "./components/BookDisplay";
import { Category } from "./models/Category";

function App() {
  const [story, dispatch] = useReducer(storyReducer, initialStory);

  const caracters: Array<Category> = [
    { id: 0, label: "Girl" },
    { id: 1, label: "Boy" },
    { id: 2, label: "Princess" },
    { id: 3, label: "Prince" },
    { id: 4, label: "Witch" },
    { id: 5, label: "Cat" },
    { id: 6, label: "Dog" },
    { id: 7, label: "Animal" },
    { id: 8, label: "Pirate" },
  ];

  function handleChangeCaracter(caracter: string) {
    dispatch({
      type: "caracterSelected",
      selectedCaracter: caracter,
    });
  }

  function handleChangeBook(book: Book) {
    dispatch({
      type: "bookSelected",
      selectedBook: book,
    });
  }

  return (
    <div className="App">
      <h2 className="text-3xl font-bold p-8 text-shadow-lg/20">
        Story picker for picky bedtime readers
      </h2>

      {story?.selectedCaracter === undefined && (
        <CategorySelector
          onChangeCaracter={handleChangeCaracter}
          categories={caracters}
        />
      )}

      {story?.selectedCaracter !== undefined &&
        story?.selectedBook === undefined && (
          <BookFetcher
            selectedCaracter={story.selectedCaracter}
            onChangeBook={handleChangeBook}
          />
        )}

      {story?.selectedBook !== undefined && (
        <BookDisplay book={story.selectedBook} />
      )}
    </div>
  );
}

const initialStory = {
  selectedCaracter: undefined,
  selectedBook: undefined,
};

export default App;
