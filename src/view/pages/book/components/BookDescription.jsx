const BookDescription = ({ book }) => {
  return (
    <div class="h-auto border border-gray-300 rounded-lg shadow-md">
      <div class="flex p-2">
        <img
          class="w-1/4 h-1/3 bordrer rounded-sm"
          src={book.image}
          alt={book.alt}
        />
        {/* book info */}
        <div class="ml-4">
          <div class="text-2xl font-bold">{book.title}</div>
          <div class="text-sm italic font-light">By {book.author}</div>
          <div class="text-xs font-light flex">
            <p>{book.averageRating}</p>
            <p class="ml-1">. {book.wholeRatings} ratings</p>
            <p class="ml-1">. {book.wholeReviews} reviews</p>
          </div>
          <div class="border-b border-gray-300">
            <p class="mt-4 mb-6 font-light text-sm">{book.summary}</p>
          </div>
          <div class="mt-2 mb-4 text-sm font-extralight">
            <p>{book.pagesNum}</p>
            <p>{book.pubDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
