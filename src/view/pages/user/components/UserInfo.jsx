const UserInfo = ({ user }) => {
  return (
    <div className="text-sm h-60 border border-gray-300 rounded-lg flex shadow-md p-2">
      <div className="w-1/3 ml-2">
        <img
          className="w-32 h-32 border border-gray-300 rounded-full"
          src={user.profileImg}
          alt={user.imgAlt}
        />
      </div>

      <div className="mt-2 w-2/3">
        <div className="font-light text-semibold text-xl border-b border-gray-300 mb-2">
          <div className="mb-1">{user.name}</div>
        </div>

        {/* user's profile info */}
        <div className="flex">
          <div className="leading-6 w-1/4">
            <div className="font-medium">Details</div>
            <div className="font-medium">Activity</div>
            <div className="font-medium">About Me</div>
          </div>

          <div className="leading-6 w-3/4 ml-2">
            <div>
              {user.age}, {user.gender}, {user.location}
            </div>
            <div>{user.activity}</div>
            <div>{user.about}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
