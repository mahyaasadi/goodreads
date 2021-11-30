import Category from "./Category";

const CategoriesList = ({ categories }) => {
  return (
    <div className="h-auto border border-gray-300 rounded-lg shadow-md p-2">
      <div>
        {categories.map((category) => (
          <Category key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
