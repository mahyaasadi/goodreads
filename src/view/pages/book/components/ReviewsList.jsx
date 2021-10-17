import Review from "./Review";

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <div class="w-full h-32 flex items-center justify-center italic text-2xl font-light border border-gray-300 rounded-lg shadow-md">
        Ratings & Reviews
      </div>

      <div>
        {reviews.map((review) => (
          <Review key={review.id} data={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;
