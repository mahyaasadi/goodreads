import { Link } from "react-router-dom";

const BookUpdates = ({ user, updates }) => {
  return (
    <div className="h-auto border border-gray-300 rounded-lg shadow-md p-2 mt-8">
      <div className="mb-3 border-b border-gray-300">
        <p className="mb-2">{user.name}'s updates</p>
      </div>
      {updates.map((bookUpdate) => (
        <div
          key={bookUpdate.id}
          className="flex mt-2 border-b border-gray-200 mb-2"
        >
          <div className="uppercase text-sm text-semibold mr-3 mb-2 pl-1">
            <Link to={`/book/${bookUpdate.id}`}>
              <img
                className="w-18 h-20 mb-2"
                src={bookUpdate.book.image}
                alt="bookPic"
              />
            </Link>
          </div>

          <div className="text-sm leading-6">
            <p>
              <span className="font-medium">{user.name}</span> is currently
              reading
            </p>
            <p>{bookUpdate.book.title}</p>
            <p className="text-xs italic">by {bookUpdate.book.author}</p>
            <p className="text-xs text-gray-800">
              You are on page {bookUpdate.progress.currentPage} out of{" "}
              {bookUpdate.progress.totalPages}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BookUpdates;
