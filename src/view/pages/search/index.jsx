import { useState, useEffect } from "react";
import CategoriesList from "./components/CategoriesList";
import SearchBox from "./components/SearchBox";
import BookOptions from "./components/BookOptions";
//book bookConstants
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

const categoriesList = [
  {
    id: 1,
    categoryType: "fiction",
  },
  {
    id: 2,
    categoryType: "science-fiction",
  },
  {
    id: 3,
    categoryType: "fantasy",
  },
  {
    id: 4,
    categoryType: "horror",
  },
  {
    id: 5,
    categoryType: "non-fiction",
  },
  {
    id: 6,
    categoryType: "literary fiction",
  },
  {
    id: 7,
    categoryType: "historical fiction",
  },
];

const bookSuggestions = [
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
];
const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const [filteredBookSuggestions, setFilteredBookSuggestions] =
    useState(bookSuggestions);

  const filterBooks = (books) => {
    // include
    return books.filter((book) => {
      return book.title.toLowerCase().includes(searchInput);
    });
  };

  useEffect(() => {
    const filteredBooks = filterBooks(bookSuggestions);
    setFilteredBookSuggestions(filteredBooks);
  }, [searchInput]);

  return (
    <div className="pt-20">
      <div className="flex justify-center">
        <div className="w-1/2 mr-8">
          <div className="mb-8">
            <SearchBox
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </div>
          <div className="h-32">
            <BookOptions bookSuggestions={filteredBookSuggestions} />
          </div>
        </div>

        <div className="w-1/4 pt-20">
          <CategoriesList categories={categoriesList} />
        </div>
      </div>
    </div>
  );
};

export default Search;
