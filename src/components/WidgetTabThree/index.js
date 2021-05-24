import React, { Fragment, useState } from "react";
import { Nav, NavItem, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import Fade from "reactstrap/es/Fade";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import { convertPath } from "../../utils/commonFunctions";

// const data = [
//   {
//     title:
//       "Cheers, darling. Virtual cheer. How to throw a virtual cock tail party"
//   },
//   {
//     title:
//       "Cheers, darling. Virtual cheer. How to throw a virtual cock tail party"
//   },
//   {
//     title:
//       "Cheers, darling. Virtual cheer. How to throw a virtual cock tail party"
//   },
//   {
//     title:
//       "Cheers, darling. Virtual cheer. How to throw a virtual cock tail party"
//   },
//   {
//     title:
//       "Cheers, darling. Virtual cheer. How to throw a virtual cock tail party"
//   }
// ];

const WidgetTabPane = ({ arr, a_id, id }) => {
  return (
    <Fade in={id === a_id}>
      {arr.map((item, i) => (
        <Fragment key={i}>
          <div className="single_post widgets_small widgets_type4">
            <div className="post_img number">
              <h2>{i + 1}</h2>
            </div>
            <div className="single_post_text">
              <h4>
                <Link to={`/${convertPath(item.title, item.id)}`} title={item.title}>{item.title}</Link>
              </h4>
              <div className="row">
                <div className="col-7 align-self-cnter">
                  <div className="meta4">
                    <Link to={`/${convertPath(item.title, item.id)}`} title={item.title}>{item?.updateAt}</Link>
                  </div>
                </div>
                <div className="col-5 align-self-cnter">
                  <div className="share_meta4 text-right">
                    <ul className="inline">
                      <li>
                        <Link to="/">
                          <FontAwesome name="bookmark" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FontAwesome name="share" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {i + 1 < arr.length ? (
            <Fragment>
              <div className="space-15" />
              <div className="border4" />
              <div className="space-15" />
            </Fragment>
          ) : null}
        </Fragment>
      ))}
    </Fade>
  );
};
const WidgetTabThree = (props) => {
  const { tab1, tab2, tab3, categories } = props;
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="tab4 padding20 white_bg border-radious5 shadow7">
      <Nav tabs>
        {categories.map((item, i) => (
          <NavItem key={item}>
            <Link
              to="/"
              className={classnames({ active: activeTab === i })}
              onClick={(e) => {
                e.preventDefault();
                toggle(i);
              }}
            >
              {item}
            </Link>
          </NavItem>
        ))}
      </Nav>
      <div className="space-20" />
      <TabContent activeTab={`${activeTab}`}>
        <TabPane tabId="0">
          <WidgetTabPane a_id={`${activeTab}`} id="0" arr={tab1} />
        </TabPane>
        <TabPane tabId="1">
          <WidgetTabPane a_id={`${activeTab}`} id="1" arr={tab2} />
        </TabPane>
        <TabPane tabId="2">
          <WidgetTabPane a_id={`${activeTab}`} id="2" arr={tab3} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default WidgetTabThree;
