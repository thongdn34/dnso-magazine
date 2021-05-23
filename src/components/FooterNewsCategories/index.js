import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { convertPath } from "../../utils/commonFunctions";
import { categoryNames, subCategories } from "../../utils/constants";

const FooterNewsCategories = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-3">
          <ul>
            <li>
              <Link to={`/categories/${(categoryNames.VIEWS)}`}>Góc nhìn</Link>
            </li>
            <li>
              <Link to={`/categories/${(categoryNames.BUSINESS)}`}>Kinh Doanh</Link>
            </li>
            <li>
              <Link to={`/categories/${(categoryNames.CULTURALS)}`}>Văn hóa</Link>
            </li>
            <li>
              <Link to={`/categories/${(categoryNames.EVENTS)}`}>Sự kiện</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul>
            <li>
              <Link to={`/categories/${(categoryNames.INVESTS)}`}>Đầu tư</Link>
            </li>
            <li>
              <Link to={`/categories/${(categoryNames.LIFESTYLES)}`}>Nhịp sống</Link>
            </li>
            <li>
              <Link to={`/categories/${(categoryNames.TECHNOLOGIES)}`}>Công nghệ</Link>
            </li>
            <li>
              <Link to={`/categories/${(categoryNames.VIDEOS)}`}>Videos</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul>
            <li>
              <Link to={`/categories/${(categoryNames.ADVISORIES)}`}>Tư vấn</Link>
            </li>
            <li>
              <Link to={`/sub_categories/${(subCategories.BOOKS)}`}>Sách hay</Link>
            </li>
            <li>
              <Link to={`/sub_categories/${(subCategories.BUSINESSMENS)}`}>Doanh nhân</Link>
            </li>
            <li>
              <Link to={`/sub_categories/${(subCategories.COMMERCES)}`}>Thương mại</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul>
            <li>
              <Link to={`/sub_categories/${(subCategories.HEALTHS)}`}>Sức khỏe</Link>
            </li>
            <li>
              <Link to={`/sub_categories/${(subCategories.TRAVELS)}`}>Du lịch</Link>
            </li>
            <li>
              <Link to={`/sub_categories/${(subCategories.LANDS)}`}>Bất động sản</Link>
            </li>
            <li>
              <Link to={`/sub_categories/${(subCategories.STARTUPS)}`}>Khởi nghiệp</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default FooterNewsCategories;
