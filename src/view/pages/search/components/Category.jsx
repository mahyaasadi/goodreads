const Category = ({ data }) => {
  return (
    <div>
      <div className="text-gray-800 font-light border-b border-gray-200 mb-3 pb-1">
        {data.categoryType}
      </div>
    </div>
  );
};

export default Category;
