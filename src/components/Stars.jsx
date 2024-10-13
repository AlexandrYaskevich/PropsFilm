import React from "react";
import Star from "./Star";


const Stars = ({ count }) => {
  const isValidRating = count > 5 || count < 1;
  const countStars = [...new Array(count).fill(0)];

  return isValidRating ? null : (
    <ul className="card-body-stars u-clearfix">
      {countStars.map(() => (
        <li>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;