import React from "react";
import FontAwesome from "../uiStyle/FontAwesome";
import { Link } from "react-router-dom";

const category = [
  "Tư vấn",
  "Kinh doanh",
  "Văn hóa",
  "Sự kiện",
  "Đầu tư",
  "Công nghệ",
  "Nhịp sống"
];
const CategoryFour = () => {
  return (
    <div className="category4 mb30 border-radious5 shadow7 white_bg padding20">
      {/* <h3 className="widget-title">Categories</h3> */}
      <ul>
        {category.map((cat, i) => (
          <li key={i}>
            <Link to="/">
              {cat}
              <FontAwesome name="play" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFour;
