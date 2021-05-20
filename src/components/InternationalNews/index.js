import React from 'react';
import {Link} from "react-router-dom";
import { convertPath } from '../../utils/commonFunctions';
import FontAwesome from "../uiStyle/FontAwesome";

const InternationalNews = ({title, showMore, className, data}) => {
    return (
        <div className={`business3 padding30 white_bg border-radious5 ${className ? className : ''}`}>
            {title ? <h4 className="widget-title">{title}</h4> : null}
            {data.map((item, i) => (
                <div key={item.title} className={`single_post post_type12 type20 ${i + 1 < data.length ? 'mb30' : ''}`}>
                    <div className="post_img">
                        <div className="img_wrap  border-radious5">
                            <Link to={`/${convertPath(item.title, item.id)}`}>
                                <img src={item.photo} alt="thumb"/>
                            </Link>
                        </div>
                    </div>
                    <div className="single_post_text">
                        <div className="row">
                            {/* <div className="col-9 align-self-cnter">
                                <div className="meta3">
                                    <Link to="/">{item.category}</Link>
                                </div>
                            </div> */}
                            {/* <div className="col-3 align-self-cnter">
                                <div className="share_meta4 text-right">
                                    <ul className="inline">
                                        <li><Link to="/"><FontAwesome name="bookmark"/></Link></li>
                                        <li><Link to="/"><FontAwesome name="share"/></Link></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <h4><Link to={`/${convertPath(item.title, item.id)}`}>{item.title}</Link></h4>
                        <div className="space-10"/>
                        <p className="post-p">{item.description}</p>
                        <div className="space-10"/>
                        <Link to="/" className="readmore4">Read more</Link>
                    </div>
                </div>
            ))}
            {showMore && data.length ? <Link to="/" className="showmore">Show more</Link> : null}
        </div>
    );
};

export default InternationalNews;