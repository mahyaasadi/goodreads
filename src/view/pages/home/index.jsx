import "./style/homeStyle.scss";

const Home = () => {
  return (
    <div>
      {/* banner and profile section*/}
      <div className="h-96">
        <div className="banner h-56 flex justify-center">
          <div className="pt-40">
            <div className="flex flex-col items-center">
              <img
                src="./images/unnamed.png"
                alt="profilePic"
                className="h-32 w-32 rounded-full border-2 border-white"
              ></img>

              <div className="text-gray-400 flex flex-col items-center">
                <p className="text-gray-700 font-bold text-3xl">gugbot</p>
                <p className="mt-2">gugbot.eth 0xbafa...1b76</p>
                <p>Joined March 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* options section */}
      <div className="md:w-full overflow-x-auto flex text-gray-500 font-semibold gap-14 text-lg pt-12 pb-4 pl-8 border-b border-gray-300">
        <div className="flex items-center">
          <img src="./images/packet.png" alt="icon" className="w-9 h-9"></img>
          <p className="hover:text-gray-700 pl-3">Collected</p>
        </div>
        <div className="flex items-center">
          <img src="./images/paint.png" alt="icon" className="w-7 h-7"></img>
          <p className="hover:text-gray-700 pl-3">Created</p>
        </div>
        <div className="flex items-center">
          <img src="./images/heart.png" alt="icon" className="w-7 h-7"></img>
          <p className="hover:text-gray-700 pl-3">Favorited</p>
        </div>
        <div className="flex items-center">
          <img src="./images/history.png" alt="icon" className="w-7 h-7"></img>
          <p className="hover:text-gray-700 pl-3">Activity</p>
        </div>
        <div className="flex items-center">
          <img
            src="./images/black-shop-tag.png"
            alt="icon"
            className="w-7 h-7"
          ></img>
          <p className="hover:text-gray-700 pl-3">Offers</p>
        </div>
      </div>

      {/* cards */}
      <div className="h-full w-full flex flex-wrap gap-5 md:flex justify-center pt-8 px-4">
        <div className="w-full h-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 border border-gray-200 rounded-lg hover:shadow-xl">
          <img
            src="./images/card1.png"
            alt="cardPic"
            className="w-full rounded-lg"
          ></img>
          <div className="w-full text-xs">
            <div className="p-4">
              <p className="text-gray-500">Ape Kids Club</p>
              <div>
                <p>Ape Kids Club #5644</p>
              </div>
            </div>

            <div className="border-t-4 border-gray-100 mt-8">
              <div className="my-3 flex justify-end items-center">
                <img
                  src="./images/heart.png"
                  alt="heartIcon"
                  className="w-5 h-5"
                ></img>
                <p className="text-gray-700 px-2">4</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 border border-gray-200 rounded-lg hover:shadow-xl">
          <img
            src="./images/card2.png"
            alt="cardPic"
            className="w-full rounded-lg"
          ></img>
          <div className="w-full text-xs">
            <div className="p-4">
              <p className="text-gray-500">Ape Kids Club</p>
              <div>
                <p>Ape Kids Club #5644</p>
              </div>
            </div>

            <div className="border-t-4 border-gray-100 mt-8">
              <div className="my-3 flex justify-end items-center">
                <img
                  src="./images/heart.png"
                  alt="heartIcon"
                  className="w-5 h-5"
                ></img>
                <p className="text-gray-700 px-2">2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 border border-gray-200 rounded-lg hover:shadow-xl">
          <img
            src="./images/card3.jpg"
            alt="cardPic"
            className="w-full rounded-lg"
          ></img>
          <div className="w-full text-xs">
            <div className="p-4">
              <p className="text-gray-500">Ape Kids Club</p>
              <div>
                <p>Ape Kids Club #5644</p>
              </div>
            </div>

            <div className="border-t-4 border-gray-100 mt-8">
              <div className="my-3 flex justify-end items-center">
                <img
                  src="./images/heart.png"
                  alt="heartIcon"
                  className="w-5 h-5"
                ></img>
                <p className="text-gray-700 px-2">1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 border border-gray-200 rounded-lg hover:shadow-xl">
          <img
            src="./images/card4.png"
            alt="cardPic"
            className="w-full rounded-lg"
          ></img>
          <div className="w-full text-xs">
            <div className="p-4">
              <p className="text-gray-500">Ape Kids Club</p>
              <div>
                <p>Ape Kids Club #5644</p>
              </div>
            </div>

            <div className="border-t-4 border-gray-100 mt-8">
              <div className="my-3 flex justify-end items-center">
                <img
                  src="./images/heart.png"
                  alt="heartIcon"
                  className="w-5 h-5"
                ></img>
                <p className="text-gray-700 px-2">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
