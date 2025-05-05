import { Book } from "../models/Book";

export default function BookDisplay({ book }) {
  const bookCoverUrl = Object.entries(book.formats).find(
    (x) => x[0] === "image/jpeg"
  )[1];
  return (
    <div className="flex flex-row justify-center items-center">
      <img src={bookCoverUrl}></img>
    </div>
  );
}
