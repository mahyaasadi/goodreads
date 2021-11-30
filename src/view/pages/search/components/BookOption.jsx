import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../style/searchComponentsStyle.scss";

const BookOption = ({ book }) => {
  // const [hover, setHover] = useState(false);

  return (
    <Link to={`/book/${book.id}`}>
      <div
        className="relative"
        // onMouseOver={() => {
        //   setHover(true);
        // }}
        // onMouseOut={() => {
        //   console.log("--------------------");
        //   setHover(false);
        // }}
      >
        {/* ${hover && "opacity-60"}` */}
        <img
          className="w-32 h-40 hover:opacity-60"
          src={book.image}
          alt="bookPic"
        />

        {/* {hover && (
          <div
            className="
            absolute top-2 w-full flex flex-col items-center
            text-gray-700 font-medium text-sm italic
            "
          >
            <p className="w-1/2">{book.title}</p>
            <p className="w-1/2 mt-3">{book.author}</p>
          </div>
        )} */}
      </div>
    </Link>
  );
};

export default BookOption;
