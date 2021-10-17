import { Link } from "react-router-dom";

const FriendsList = ({ user, friends }) => {
  return (
    <div class="h-auto border border-gray-300 rounded-lg shadow-md p-2">
      <div class="border-b border-gray-300">
        <p class="text-sm text-semibold mb-2 uppercase">
          {user.name}'s friends
        </p>
      </div>

      {friends.map((friend) => (
        <div key={friend.id} class="flex mt-3">
          <Link to={`/user/${friend.id}`}>
            <div class="text-xs font-light flex">
              <img
                class="w-14 h-14"
                src={friend.friendInfo.profileImg}
                alt="friends"
              />
              <div class="ml-2">
                <div class="border-b border-gray-200 w-1/2 mb-1">
                  <p class="mb-1">{friend.friendInfo.name}</p>
                </div>
                <div class="flex">
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
