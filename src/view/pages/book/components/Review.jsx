import StarRating from "./StarRating";

const Review = ({ data }) => {
  return (
    <div class="h-auto border border-gray-200 rounded-lg shadow-md">
      <div class="flex mt-8 mb-8 text-sm">
        <div class="flex flex-col items-center w-1/3">
          <img
            class="w-32 h-32 border border-gray-200 rounded-full"
            src={data.reviewerInfo.profileImg}
            alt={data.alt}
          />
          <div class="font-light text-gray-900 mt-2">
            {data.reviewerInfo.name}
          </div>
          <div>
            <StarRating rating={data.rating} />
          </div>
        </div>
        <div class="w-2/3 p-4">{data.reviewText}</div>
      </div>
    </div>
  );
};
export default Review;
