import React from "react";
import {Star} from "./Star";

interface StarsProps {
  count: number;
}

export const Stars: React.FC<StarsProps> = ({ count }) => {
  const isValidRating = count > 5 || count < 1;
  const countStars = Array.from({ length: count }, (_, index) => index);

  return isValidRating ? null : (
    <ul className="card-body-stars u-clearfix">
      {countStars.map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

