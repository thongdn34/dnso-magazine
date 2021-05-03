import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const FooterNewsCategories = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-3">
                    <ul>
                        <li><Link to="/">Góc nhìn</Link></li>
                        <li><Link to="/">Kinh Doanh</Link></li>
                        <li><Link to="/">Văn hóa</Link></li>
                        <li><Link to="/">Sự kiện</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul>
                        <li><Link to="/">Đầu tư</Link></li>
                        <li><Link to="/">Nhịp sống</Link></li>
                        <li><Link to="/">Công nghệ</Link></li>
                        <li><Link to="/">Videos</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul>
                        <li><Link to="/">Tư vấn</Link></li>
                        <li><Link to="/">Sách hay</Link></li>
                        <li><Link to="/">Doanh nhân</Link></li>
                        <li><Link to="/">Thương mại</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul>
                        <li><Link to="/">Sức khỏe</Link></li>
                        <li><Link to="/">Du lịch</Link></li>
                        <li><Link to="/">Bất động sản</Link></li>
                        <li><Link to="/">Khởi nghiệp</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterNewsCategories;