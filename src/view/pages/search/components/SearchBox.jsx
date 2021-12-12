const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <div className="w-3/5 h-12 border border-gray-300 rounded-lg shadow-md">
      <input
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
        type="text"
        placeholder="Search here..."
        className="font-light text-gray-700 p-2 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
