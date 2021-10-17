import { useParams } from "react-router-dom";
// components
import UserInfo from "./components/UserInfo";
import FavoutiteShelf from "./components/FavouriteShelf";
import FriendsList from "./components/FriendsList";
import BookUpdates from "./components/BookUpdates";
//book constants
import {
  blindness,
  letterToaChild,
  dariusTheGreat,
  kiterunner,
  persepolis,
  beartown,
  rebecca,
  callMeByYourName,
  theDeathofVivekOji,
  perfume,
  projectHailMary,
  theHobbit,
} from "../../../core/bookConstants";
//user bookConstants
import {
  mahya,
  maede,
  sina,
  saba,
  negar,
  parmida,
  rozi,
} from "../../../core/userConstants";

const User = () => {
  const user = {
    1: mahya,
    2: maede,
    3: sina,
    4: saba,
    5: negar,
    6: parmida,
    7: rozi,
  };

  const friends = {
    1: [
      {
        id: 2,
        friendInfo: maede,
        booksNum: 269,
        friendsNum: 40,
      },
      {
        id: 3,
        friendInfo: sina,
        booksNum: 76,
        friendsNum: 203,
      },
      {
        id: 4,
        friendInfo: saba,
        booksNum: 716,
        friendsNum: 2033,
      },
      {
        id: 5,
        friendInfo: negar,
        booksNum: 36,
        friendsNum: 403,
      },
      {
        id: 6,
        friendInfo: parmida,
        booksNum: 286,
        friendsNum: 203,
      },
      {
        id: 7,
        friendInfo: rozi,
        booksNum: 643,
        friendsNum: 3203,
      },
    ],
    2: [
      {
        id: 1,
        friendInfo: mahya,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 3,
        friendInfo: sina,
        booksNum: 76,
        friendsNum: 203,
      },
      {
        id: 4,
        friendInfo: saba,
        booksNum: 716,
        friendsNum: 2033,
      },
      {
        id: 5,
        friendInfo: negar,
        booksNum: 36,
        friendsNum: 403,
      },
      {
        id: 6,
        friendInfo: parmida,
        booksNum: 286,
        friendsNum: 203,
      },
      {
        id: 7,
        friendInfo: rozi,
        booksNum: 643,
        friendsNum: 3203,
      },
    ],
    3: [
      {
        id: 1,
        friendInfo: mahya,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 2,
        friendInfo: maede,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 4,
        friendInfo: saba,
        booksNum: 716,
        friendsNum: 2033,
      },
      {
        id: 5,
        friendInfo: negar,
        booksNum: 36,
        friendsNum: 403,
      },
      {
        id: 6,
        friendInfo: parmida,
        booksNum: 286,
        friendsNum: 20,
      },
      {
        id: 7,
        friendInfo: rozi,
        booksNum: 643,
        friendsNum: 3203,
      },
    ],
    4: [
      {
        id: 1,
        friendInfo: mahya,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 2,
        friendInfo: maede,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 4,
        friendInfo: saba,
        booksNum: 716,
        friendsNum: 2033,
      },
      {
        id: 3,
        friendInfo: sina,
        booksNum: 76,
        friendsNum: 203,
      },
      {
        id: 6,
        friendInfo: parmida,
        booksNum: 286,
        friendsNum: 203,
      },
      {
        id: 7,
        friendInfo: rozi,
        booksNum: 643,
        friendsNum: 3203,
      },
    ],
    5: [
      {
        id: 1,
        friendInfo: mahya,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 2,
        friendInfo: maede,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 4,
        friendInfo: saba,
        booksNum: 716,
        friendsNum: 2033,
      },
      {
        id: 3,
        friendInfo: sina,
        booksNum: 76,
        friendsNum: 203,
      },
      {
        id: 5,
        friendInfo: negar,
        booksNum: 36,
        friendsNum: 403,
      },
      {
        id: 7,
        friendInfo: rozi,
        booksNum: 643,
        friendsNum: 3203,
      },
    ],
    6: [
      {
        id: 1,
        friendInfo: mahya,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 2,
        friendInfo: maede,
        booksNum: 768,
        friendsNum: 1203,
      },
      {
        id: 4,
        friendInfo: saba,
        booksNum: 716,
        friendsNum: 2033,
      },
      {
        id: 3,
        friendInfo: sina,
        booksNum: 76,
        friendsNum: 203,
      },
      {
        id: 5,
        friendInfo: negar,
        booksNum: 36,
        friendsNum: 403,
      },
    ],
    7: [
      {
        id: 3,
        friendInfo: sina,
        booksNum: 76,
        friendsNum: 203,
      },
      {
        id: 5,
        friendInfo: negar,
        booksNum: 36,
        friendsNum: 403,
      },
      {
        id: 6,
        friendInfo: parmida,
        booksNum: 286,
        friendsNum: 203,
      },
    ],
  };

  const updates = {
    1: [
      {
        id: 10,
        book: perfume,
        progress: {
          totalPages: 250,
          currentPage: 100,
        },
      },
      {
        id: 11,
        book: projectHailMary,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
      {
        id: 12,
        book: theHobbit,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
    ],
    2: [
      {
        id: 2,
        book: letterToaChild,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
      {
        id: 3,
        book: dariusTheGreat,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
    ],
    3: [
      {
        id: 4,
        book: kiterunner,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
      {
        id: 5,
        book: persepolis,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
    ],
    4: [
      {
        id: 6,
        book: beartown,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
      {
        id: 4,
        book: kiterunner,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
    ],
    5: [
      {
        id: 6,
        book: beartown,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
      {
        id: 9,
        book: theDeathofVivekOji,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
    ],
    6: [
      {
        id: 9,
        book: theDeathofVivekOji,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
      {
        id: 10,
        book: perfume,
        progress: {
          totalPages: 250,
          currentPage: 100,
        },
      },
    ],
    7: [
      {
        id: 9,
        book: theDeathofVivekOji,
        progress: {
          totalPages: 269,
          currentPage: 40,
        },
      },
      {
        id: 10,
        book: perfume,
        progress: {
          totalPages: 250,
          currentPage: 100,
        },
      },
    ],
  };

  const favourites = {
    1: [
      blindness,
      letterToaChild,
      dariusTheGreat,
      kiterunner,
      persepolis,
      beartown,
      rebecca,
      callMeByYourName,
      theDeathofVivekOji,
    ],
    2: [beartown, rebecca, callMeByYourName, theDeathofVivekOji],
    3: [letterToaChild, dariusTheGreat, kiterunner, persepolis],
    4: [kiterunner, persepolis, beartown, rebecca],
    5: [letterToaChild, dariusTheGreat, persepolis, beartown, rebecca],
    6: [rebecca, letterToaChild, dariusTheGreat],
    7: [kiterunner, persepolis, dariusTheGreat],
  };

  const { id } = useParams();

  return (
    <div class="flex w-full justify-center pt-24">
      <div class="w-2/5 mr-16">
        <div>
          <UserInfo user={user[id]} />
        </div>
        <div>
          <FavoutiteShelf user={user[id]} favourites={favourites[id]} />
        </div>
        <div>
          <BookUpdates user={user[id]} updates={updates[id]} />
        </div>
      </div>

      <div class="w-1/5">
        <FriendsList user={user[id]} friends={friends[id]} />
      </div>
    </div>
  );
};

export default User;
