import BookOption from "./BookOption";

const BookOptions = ({ bookSuggestions }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center h-auto border border-gray-300 rounded-lg shadow-md p-4">
      {bookSuggestions.map((book) => (
        <div key={book.id}>
          <BookOption book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookOptions;
