import StarRating from "./StarRating";

const Review = ({ data }) => {
  return (
    <div className="h-auto border border-gray-200 rounded-lg shadow-md">
      <div className="flex mt-8 mb-8 text-sm">
        <div className="flex flex-col items-center w-1/3">
          <img
            className="w-32 h-32 border border-gray-200 rounded-full"
            src={data.reviewerInfo.profileImg}
            alt={data.alt}
          />
          <div className="font-light text-gray-900 mt-2">
            {data.reviewerInfo.name}
          </div>
          <div>
            <StarRating rating={data.rating} />
          </div>
        </div>
        <div className="w-2/3 p-4">{data.reviewText}</div>
      </div>
    </div>
  );
};
export default Review;
