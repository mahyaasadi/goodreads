const BookDescription = ({ book }) => {
  return (
    <div className="h-auto border border-gray-300 rounded-lg shadow-md">
      <div className="flex p-2">
        <img
          className="w-1/4 h-1/3 bordrer rounded-sm"
          src={book.image}
          alt={book.alt}
        />
        {/* book info */}
        <div className="ml-4">
          <div className="text-2xl font-bold">{book.title}</div>
          <div className="text-sm italic font-light">By {book.author}</div>
          <div className="text-xs font-light flex">
            <p>{book.averageRating}</p>
            <p className="ml-1">. {book.wholeRatings} ratings</p>
            <p className="ml-1">. {book.wholeReviews} reviews</p>
          </div>
          <div className="border-b border-gray-300">
            <p className="mt-4 mb-6 font-light text-sm">{book.summary}</p>
          </div>
          <div className="mt-2 mb-4 text-sm font-extralight">
            <p>{book.pagesNum}</p>
            <p>{book.pubDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
