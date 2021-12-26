const GasFree = () => {
  return (
    <div className="pt-32">
      {/* banner */}
      <div className="flex flex-col justify-around py-20 lg:flex-row">
        <div className="pl-8 order-2 lg:w-2/5 lg:order-1 flex flex-col w-full pt-8 px-3">
          <p className="font-bold text-4xl text-center lg:flex lg:text-left">
            Imagine an NFT marketplace that's gas-free.
          </p>
          <div className="text-gray-500 leading-7 mt-10 text-center lg:text-left">
            <p>
              While we're proud to be the first and largest NFT marketplace,
              we're even prouder to be the first to provide cross-blockchain
              support, starting with a gas-free marketplace on the Polygon
              blockchain.
            </p>
            <p className="pt-5">
              That's right! Buyers no longer have to pay blockchain fees when
              making trades on OpenSea, and creators can fully earn their way
              into crypto for the first time.
            </p>
            <div className="pt-6">
              <button className="bg-blue-500 text-white font-medium py-3 px-5 rounded-lg hover:shadow-xl hover:bg-blue-600">
                Start creating
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 w-full flex justify-center pl-8 order-1 lg:order-2 px-2">
          <img
            src="https://static.opensea.io/gas-free/gas-pump.svg"
            alt="bannerPic"
          ></img>
        </div>
      </div>

      {/* video section */}
      <div className="bg-blue-50 pb-12 flex flex-col items-center">
        <div className="flex flex-col items-center py-14">
          <p className="font-bold text-4xl">Goodbye gas fees. Hello gas-free</p>
          <p className="text-gray-500 pt-6">
            From creating, selling, and selling — it’s all gas-free
          </p>
        </div>
        <div className="w-4/5 p-5 flex justify-center">
          <iframe
            // width="950"
            height="550"
            className="w-full"
            src="https://www.youtube.com/embed/rHPaG-cflBw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* resource cards */}
      <div className="flex flex-col justify-center items-center py-12 border-b border-gray-200">
        <p className="font-semibold text-4xl text-center">
          Cross-blockchain resources
        </p>
        <p className="text-gray-500 pt-4">
          Learn more about the different blockchains to start creating and
          selling
        </p>

        <div className="w-full flex flex-wrap justify-center gap-5 py-14">
          <div className="w-80 border border-gray-200 rounded-lg hover:shadow-xl">
            <img
              src="https://static.opensea.io/gas-free/article-supported-blockchain.png"
              alt="cardPic"
              className="w-full rounded-t-lg h-56"
            ></img>
            <div className="w-full text-xs">
              <div className="p-8">
                <p className="text-gray-800 text-center text-lg font-medium">
                  blah blah blah blah blah blah blah blah blah
                </p>
              </div>
            </div>
          </div>

          <div className="w-80 border border-gray-200 rounded-lg hover:shadow-xl">
            <img
              src="https://static.opensea.io/gas-free/article-create-sell-nfts-on-polygon.png"
              alt="cardPic"
              className="w-full rounded-t-lg h-56"
            ></img>
            <div className="w-full text-xs">
              <div className="p-8">
                <p className="text-gray-800 text-center text-lg font-medium">
                  blah blah blah blah blah
                </p>
              </div>
            </div>
          </div>

          <div className="w-80 border border-gray-200 rounded-lg hover:shadow-xl">
            <img
              src="https://static.opensea.io/gas-free/article-purchasing-on-polygon.png"
              alt="cardPic"
              className="w-full rounded-t-lg h-56"
            ></img>
            <div className="w-full text-xs">
              <div className="p-8">
                <p className="text-gray-800 text-center text-lg font-medium">
                  blah blah blah blah blah blah blah blah blah
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <button className="bg-blue-500 text-white font-medium py-4 px-10 rounded-lg hover:shadow-xl hover:bg-blue-600">
            Learn more on our Help Center
          </button>
        </div>
      </div>

      {/* footer */}
      <div className="bg-blue-600 text-white pt-12 px-28">
        <div className="border-b border-gray-400 pb-8 xl:flex justify-between">
          <div className="text-center w-full xl:text-left xl:w-2/4 pb-4">
            <p className="font-semibold text-xl pb-3">Stay in the loop</p>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>

            {/* email button */}
            <div className="pt-6 flex xl:justify-start sm:justify-center">
              <div className="mr-3">
                <input
                  className="border rounded-lg text-gray-800"
                  placeholder="Your email adress"
                ></input>
              </div>

              <button className="w-1/3 rounded-lg bg-blue-500 font-medium hover:shadow-xl">
                Sign up
              </button>
            </div>
          </div>

          {/* social media icons */}
          <div className="w-full flex flex-col pt-2 xl:w-1/3">
            <p className="text-center xl:text-left font-semibold text-xl pb-3">
              Join the community
            </p>
            <div className="flex gap-2 items-center sm:justify-center">
              <div className="flex items-center justify-center rounded-lg bg-blue-500 hover:shadow-lg w-16 h-14">
                <img
                  src="https://img.icons8.com/windows/32/ffffff/twitter.png"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-blue-500 hover:shadow-lg w-16 h-14">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-blue-500 hover:shadow-lg w-16 h-14">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/discord-logo.png"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-blue-500 hover:shadow-lg w-16 h-14">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/reddit.png"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-blue-500 hover:shadow-lg w-16 h-14">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube-play.png"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-blue-500 hover:shadow-lg w-16 h-14">
                <img
                  src="https://img.icons8.com/ios-filled/30/ffffff/message-group.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* footer-middlePart */}
        <div className="xl:flex xl:justify-between border-b border-gray-400 py-12">
          <div className="flex flex-col items-center text-center w-full pb-8 xl:text-left xl:w-1/5 xl:items-start">
            <img
              src="https://opensea.io/static/images/logos/opensea-white.svg"
              alt="logo"
              className="w-14 h-14"
            ></img>
            <p className="font-semibold text-xl py-3">OpenSea</p>
            <p className="leading-7">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>

          <div className="flex flex-wrap pt-8 w-full justify-center xl:w-3/5 gap-12">
            <div>
              <p className="text-xl font-medium pb-2">Marketplace</p>
              <div className="font-light text-sm leading-9">
                <p>All NFTs</p>
                <p>New</p>
                <p>Art</p>
                <p>Collectibles</p>
                <p>Domain Names</p>
                <p>Music</p>
                <p>Photography</p>
                <p>Sports</p>
                <p>Trading Cards</p>
                <p>Utility</p>
                <p>Virtual Worlds</p>
              </div>
            </div>

            <div>
              <p className="text-xl font-medium pb-1">My Account</p>
              <div className="font-light text-sm leading-9">
                <p>Profile</p>
                <p>Favorites</p>
                <p>My Collections</p>
                <p>Settings</p>
              </div>
              <p className="text-xl font-medium pt-10 pb-1">Stats</p>
              <div className="font-light text-sm leading-9">
                <p>Rankings</p>
                <p>Activity</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-xl font-medium pb-1">Resources</p>
                <div className="font-light text-sm leading-9">
                  <p>Help Center</p>
                  <p>Platform Status</p>
                  <p>Partners</p>
                  <p>Gas-Free Marketplace</p>
                  <p>Blog</p>
                  <p>Docs</p>
                  <p>Newsletter</p>
                </div>
              </div>

              <div>
                <p className="text-xl font-medium pb-1">Company</p>
                <div className="font-light text-sm leading-9">
                  <p>About</p>
                  <p>Careers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer-lastSection */}
        <div className="flex justify-between text-xs font-light py-5">
          <div className="w-1/3">© 2018 - 2021 Ozone Networks, Inc</div>
          <div className="flex justify-end gap-2 text-center w-1/3">
            <p className="">Privacy Policy</p>
            <p className="">Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasFree;
