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
    { id: 0, label: "Girl", icon: "caracters/girl.svg" },
    { id: 1, label: "Boy", icon: "caracters/boy.svg" },
    { id: 2, label: "Princess", icon: "caracters/princess.svg" },
    { id: 3, label: "Prince", icon: "caracters/prince.svg" },
    { id: 4, label: "Witch", icon: "caracters/witch.svg" },
    { id: 5, label: "Cat", icon: "caracters/cat.svg" },
    { id: 6, label: "Dog", icon: "caracters/dog.svg" },
    { id: 7, label: "Animal", icon: "caracters/animal.svg" },
    { id: 8, label: "Pirate", icon: "caracters/pirate.svg" },
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
