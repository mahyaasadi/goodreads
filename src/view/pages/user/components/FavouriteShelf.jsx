import { Link } from "react-router-dom";

const FavoutiteShelf = ({ user, favourites }) => {
  return (
    <div className="h-36 border border-gray-300 rounded-lg shadow-md p-2 mt-8">
      <div className="text-sm text-semibold border-b border-gray-300 mb-2">
        <p className="mb-2 uppercase">{user.name}'s favourite books</p>
      </div>
      <div className="flex">
        {favourites.map((favouriteBook) => (
          <div key={favouriteBook.id}>
            <Link to={`/book/${favouriteBook.id}`}>
              <img
                className="w-16 h-20 p-1"
                src={favouriteBook.image}
                alt={favouriteBook.alt}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FavoutiteShelf;
