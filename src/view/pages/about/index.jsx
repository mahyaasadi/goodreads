const About = () => {
  return (
    <div className="pt-32">
      {/* banner */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="pl-8 order-2 lg:order-1 flex flex-col w-full pt-8 px-3">
          <p className="font-semibold text-4xl lg:flex text-center">
            Building an open digital economy
          </p>
          <div className="text-gray-500 leading-7 mt-10">
            <p>
              At OpenSea, we're excited about a brand new type of digital good
              called a non-fungible token, or NFT. NFTs have exciting new
              properties: they’re unique, provably scarce, tradeable, and usable
              across multiple applications. Just like physical goods, you can do
              whatever you want with them! You could throw them in the trash,
              gift them to a friend across the world, or go sell them on an open
              marketplace. But unlike physical goods, they're armed with all the
              programmability of digital goods.
            </p>
            <p className="pt-5">
              A core part of our vision is that open protocols like Ethereum and
              interoperable standards like ERC-721 and ERC-1155 will enable
              vibrant new economies. We're building tools that allow consumers
              to trade their items freely, creators to launch new digital works,
              and developers to build rich, integrated marketplaces for their
              digital items.
            </p>
            <p className="pt-5">
              We’re proud to be the first and largest marketplace for NFTs.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center pl-8 order-1 lg:order-2 px-2">
          <img
            src="https://static.opensea.io/about/All-NFT-Categories-Illustration.svg"
            alt="bannerPic"
          ></img>
        </div>
      </div>

      {/* stats and numbers */}
      <div className="sm:2/5 md:w-3/5 mx-auto flex-wrap lg:w-full py-32 flex justify-center gap-24">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://static.opensea.io/about/icon-timeline.svg"
            alt="icon"
            className="w-14 h-14"
          ></img>
          <div className="pt-6 flex flex-col items-center">
            <p className="font-semibold text-2xl pb-1">2017</p>
            <p className="text-gray-500">Founder</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src="https://static.opensea.io/about/icon-employees.svg"
            alt="icon"
            className="w-14 h-14"
          ></img>
          <div className="pt-6 flex flex-col items-center">
            <p className="font-semibold text-2xl pb-1">70</p>
            <p className="text-gray-500">Employees</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src="https://static.opensea.io/about/icon-users.svg"
            alt="icon"
            className="w-14 h-14"
          ></img>
          <div className="pt-6 flex flex-col items-center">
            <p className="font-semibold text-2xl pb-1">600k+</p>
            <p className="text-gray-500">Users</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src="https://static.opensea.io/about/icon-collections.svg"
            alt="icon"
            className="w-14 h-14"
          ></img>
          <div className="pt-6 flex flex-col items-center">
            <p className="font-semibold text-2xl pb-1">2M+</p>
            <p className="text-gray-500">Collections</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src="https://static.opensea.io/about/nfts.svg"
            alt="icon"
            className="w-14 h-14"
          ></img>
          <div className="pt-6 flex flex-col items-center">
            <p className="font-semibold text-2xl pb-1">80M+</p>
            <p className="text-gray-500">NFTs</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src="https://static.opensea.io/about/icon-money.svg"
            alt="icon"
            className="w-14 h-14"
          ></img>
          <div className="pt-6 flex flex-col items-center">
            <p className="font-semibold text-2xl pb-1">$10BM+</p>
            <p className="text-gray-500">Volume</p>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="bg-blue-50 flex flex-col items-center">
        <div className="flex flex-col items-center py-14">
          <p className="font-bold text-4xl">Meet OpenSea</p>
          <p className="text-gray-500 pt-5">
            The NFT marketplace with everything for everyone
          </p>
        </div>
        <div className="w-4/5 p-5 flex justify-center">
          <iframe
            // width="950"
            height="550"
            className="w-full"
            src="https://www.youtube.com/embed/gfGuPd1CELo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p className="text-gray-500 text-sm pt-2 pb-24">
          Fiat on-ramp and profile customization is coming soon.
        </p>
      </div>

      {/* founders story */}
      <div className="pt-14">
        <div className="flex flex-col items-center pt-10">
          <p className="font-bold text-4xl">Our Story</p>
          <p className="text-gray-500 pt-4">
            Navigating the uncharted waters of non-fungible tokens
          </p>
        </div>

        <div className="justify-center gap-10 pt-20 lg:flex flex-col xl:flex-row">
          <div className="sm:flex justify-center">
            <img
              src="https://static.opensea.io/about/founders.png"
              alt="foundersPic"
            ></img>
          </div>
          <div className="text-gray-500 px-8 pt-4 leading-7 md:w-full lg:w-1/2">
            <p>
              In 2017 the world witnessed the birth of CryptoKitties. For the
              first time, the world experienced a decentralized application
              built on blockchains but targetted towards a mainstream audience.
            </p>
            <p className="pt-5">
              While CryptoKitties felt like a toy to many, it represented a
              dramatic shift in how we interact with items in the digital world.
              While previous digital items lived on company servers,
              blockchain-native items lived on shared, public blockchains owned
              by no single party. They could be viewed anywhere, exchanged
              openly, and truly owned in a way that was never before possible in
              the digital world.
            </p>
            <p className="pt-5">
              Fascinated by the movement that was forming, Devin Finzer and Alex
              Atallah joined early adopter communities in Discord and started
              talking to users. With the OpenSea beta launch in December 2017,
              the first open marketplace for any non-fungible token on the
              Ethereum blockchain was born.
            </p>
            <p className="pt-5">
              Today, we’re proud to remain the largest general marketplace for
              user-owned digital items, supporting multiple blockchains, with
              the broadest set of categories and the best prices for new
              emerging digital item classes. As a company, we’re thrilled to be
              at the center of this growing industry, and will continue to
              invest in our core infrastructure as we build the most accessible
              marketplace for buyers, sellers, and creators.
            </p>
          </div>
        </div>
      </div>

      {/* industry leaders */}
      <div className="py-32">
        <div className="flex flex-col text-center justify-center items-center pb-16">
          <p className="font-bold text-4xl">
            Backed by top firms & industry leaders
          </p>
          <p className="text-gray-500 pt-2">
            who are helping us pave the way towards a brand new digital economy
          </p>
        </div>
        <div className="flex flex-wrap px-3 justify-center gap-10">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://static.opensea.io/about/vc-andressen-horowitz.svg"
              alt="icon"
              className="w-40 h-40"
            ></img>
            <img
              src="https://static.opensea.io/about/vc-blockstack.svg"
              alt="icon"
              className="w-40 h-10"
            ></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://static.opensea.io/about/vc-coinbase.svg"
              alt="icon"
              className="w-40 h-40"
            ></img>
            <img
              src="https://static.opensea.io/about/vc-ycombinator.svg"
              alt="icon"
              className="w-40 h-10"
            ></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://static.opensea.io/about/vc-trust-wallet.svg"
              alt="icon"
              className="w-40 h-40"
            ></img>
            <img
              src="https://static.opensea.io/about/vc-dapper.svg"
              alt="icon"
              className="w-40 h-10"
            ></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://static.opensea.io/about/vc-quantstamp.svg"
              alt="icon"
              className="w-40 h-40"
            ></img>
            <img
              src="https://static.opensea.io/about/vc-NFTKred.svg"
              alt="icon"
              className="w-40 h-10"
            ></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://static.opensea.io/about/vc-founders-fund.svg"
              alt="icon"
              className="w-40 h-40"
            ></img>
            <img
              src="https://static.opensea.io/about/vc-blockchain-capital.svg"
              alt="icon"
              className="w-40 h-10"
            ></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://static.opensea.io/about/vc-pascal-capital.svg"
              alt="icon"
              className="w-40 h-40"
            ></img>
            <img
              src="https://static.opensea.io/about/vc-1c.svg"
              alt="icon"
              className="w-40 h-10"
            ></img>
          </div>
        </div>
      </div>

      {/* inspired people */}
      <div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-2xl">
            with some of the most forward-thinking angels
          </p>
          <p className="text-gray-500 pt-2">
            who are just as passionate about this space as we are.
          </p>
        </div>

        <div className="py-16 flex items-center justify-center">
          <div className="w-3/4 flex flex-wrap justify-center gap-5">
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-mark.cuban.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Mark Cuban</p>
                <p className="text-gray-500">Entrepreneur & Investor</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-3lau.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">3LAU</p>
                <p className="text-gray-500">American DJ & Producer</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-tim.ferris.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Tim Ferriss</p>
                <p className="text-gray-500">Entrepreneur & Author</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-dylan.field.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Dylan Field</p>
                <p className="text-gray-500">CEO & Co-founder of Figma</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-ben.silberman.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Ben Silberman</p>
                <p className="text-gray-500 pt-1">
                  CEO & Co-founder of Pinterest
                </p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-alex.ohanian.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Mark Cuban</p>
                <p className="text-gray-500">Entrepreneur & Investor</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-balaji.srinivisan.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">3LAU</p>
                <p className="text-gray-500">American DJ & Producer</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-belinda.johnson.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Tim Ferriss</p>
                <p className="text-gray-500">Entrepreneur & Author</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-naval.ravikant.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Dylan Field</p>
                <p className="text-gray-500">CEO & Co-founder of Figma</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-justin.kan.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Ben Silberman</p>
                <p className="text-gray-500 pt-1">
                  CEO & Co-founder of Pinterest
                </p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-avichal.garg.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Mark Cuban</p>
                <p className="text-gray-500">Entrepreneur & Investor</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-linda.xie.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">3LAU</p>
                <p className="text-gray-500">American DJ & Producer</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-kevin.durant.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Tim Ferriss</p>
                <p className="text-gray-500">Entrepreneur & Author</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-ashton.kutcher.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Dylan Field</p>
                <p className="text-gray-500">CEO & Co-founder of Figma</p>
              </div>
            </div>
            <div className="w-40 flex flex-col items-center">
              <img
                src="https://static.opensea.io/about/investor-tobie.lutke%20.png"
                alt="proPics"
              ></img>
              <div className="w-2/3 flex flex-col text-center pt-3">
                <p className="font-semibold text-lg">Ben Silberman</p>
                <p className="text-gray-500 pt-1">
                  CEO & Co-founder of Pinterest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* story cards */}
      <div className="flex flex-col justify-center items-center py-12 border-b border-gray-200">
        <p className="font-medium text-5xl text-center">
          You might have read about us in the news
        </p>
        <p className="text-gray-500 pt-2">
          If not, here are just a few stories about OpenSea
        </p>

        <div className="flex flex-wrap justify-center gap-5 py-14">
          <div className="w-96 border border-gray-200 rounded-lg hover:shadow-xl">
            <img
              src="https://opensea.io/static/images/news/forbes.png"
              alt="cardPic"
              className="w-full rounded-t-lg h-56"
            ></img>
            <div className="w-full text-xs">
              <div className="p-4">
                <p className="text-gray-400 text-xl font-semibold">Forbes</p>
                <div>
                  <p className="text-gray-500 text-lg font-thin leading-5 py-4">
                    blah blah blah blah blah blah blah blah blah blah blah lah
                    blah blah blah blah{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-96 border border-gray-200 rounded-lg hover:shadow-xl">
            <img
              src="https://opensea.io/static/images/news/bitcoin2.jpeg"
              alt="cardPic"
              className="w-full rounded-t-lg h-56"
            ></img>
            <div className="w-full text-xs">
              <div className="p-4">
                <p className="text-gray-400 text-xl">Bitcoine.com</p>
                <div>
                  <p className="text-gray-500 text-lg font-thin leading-5 py-4">
                    blah blah blah blah blah blah blah blah blah blah{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-96 border border-gray-200 rounded-lg hover:shadow-xl">
            <img
              src="https://opensea.io/static/images/news/techcrunch2.jpeg"
              alt="cardPic"
              className="w-full rounded-t-lg h-56"
            ></img>
            <div className="w-full text-xs">
              <div className="p-4">
                <p className="text-gray-400 text-xl">TechCrunch</p>
                <div>
                  <p className="text-gray-500 text-lg font-thin leading-5 py-4">
                    blah blah blah blah blah lah blah blah blah blah blah blah
                    blah blah blah blah{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="">
          For press inquiries, contact{" "}
          <span className="text-blue-500 hover:text-blue-600">
            press@opensea.io
          </span>
        </p>
      </div>

      {/* interested? */}
      <div className="flex flex-col justify-center items-center py-24">
        <p className="text-4xl font-bold pb-3">Interested in joining us?</p>
        <p className="text-gray-500">Hop aboard and view our open positions</p>
        <div className="pt-12">
          <button className="border rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6">
            See open roles
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

export default About;
