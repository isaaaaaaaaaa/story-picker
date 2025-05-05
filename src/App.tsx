import React, { useReducer } from "react";
import "./App.css";
import GuntendexApiDataFetcher from "./components/BookFetcher";
import storyReducer from "./app/storyReducer";
import CategorySelector from "./components/CategorySelector";
import BookFetcher from "./components/BookFetcher";
import { Book } from "./models/Book";
import BookDisplay from "./components/BookDisplay";

function App() {
  const [story, dispatch] = useReducer(storyReducer, initialStory);

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
      {/* <GuntendexApiDataFetcher /> */}

      {story?.selectedCaracter === undefined && (
        <CategorySelector
          onChangeCaracter={handleChangeCaracter}
          data={[
            "Girl",
            "Boy",
            "Princess",
            "Prince",
            "Witch",
            "Cat",
            "Dog",
            "Animal",
            "Pirate",
          ]}
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
