import { Link } from "react-router-dom";

const BookUpdates = ({ user, updates }) => {
  return (
    <div class="h-auto border border-gray-300 rounded-lg shadow-md p-2 mt-8">
      <div class="mb-3 border-b border-gray-300">
        <p class="mb-2">{user.name}'s updates</p>
      </div>
      {updates.map((bookUpdate) => (
        <div
          key={bookUpdate.id}
          class="flex mt-2 border-b border-gray-200 mb-2"
        >
          <div class="uppercase text-sm text-semibold mr-3 mb-2 pl-1">
            <Link to={`/book/${bookUpdate.id}`}>
              <img
                class="w-18 h-20 mb-2"
                src={bookUpdate.book.image}
                alt="bookPic"
              />
            </Link>
          </div>

          <div class="text-sm leading-6">
            <p>
              <span class="font-medium">{user.name}</span> is currently reading
            </p>
            <p>{bookUpdate.book.title}</p>
            <p class="text-xs italic">by {bookUpdate.book.author}</p>
            <p class="text-xs text-gray-800">
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
