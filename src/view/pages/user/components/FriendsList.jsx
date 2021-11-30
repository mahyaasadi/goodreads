import { Link } from "react-router-dom";

const FriendsList = ({ user, friends }) => {
  return (
    <div className="h-auto border border-gray-300 rounded-lg shadow-md p-2">
      <div className="border-b border-gray-300">
        <p className="text-sm text-semibold mb-2 uppercase">
          {user.name}'s friends
        </p>
      </div>

      {friends.map((friend) => (
        <div key={friend.id} className="flex mt-3">
          <Link to={`/user/${friend.id}`}>
            <div className="text-xs font-light flex">
              <img
                className="w-14 h-14"
                src={friend.friendInfo.profileImg}
                alt="friends"
              />
              <div className="ml-2">
                <div className="border-b border-gray-200 w-1/2 mb-1">
                  <p className="mb-1">{friend.friendInfo.name}</p>
                </div>
                <div className="flex">
                  <p>{friend.booksNum} books</p>
                  <p> . {friend.friendsNum} friends</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default FriendsList;
