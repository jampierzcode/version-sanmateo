import React, { useState } from "react";
import { Link } from "gatsby";
const SubMenu = ({ item, index }) => {
  console.log(item.subNav);
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <>
      <li className="links-menu-dashboard" onClick={item.subNav && showSubnav}>
        <div className={`link-block ${subnav ? "link-active" : ""}`}>
          <div className="left-link">
            <Link className="toggle-drop" to={item.path}>
              {item.icon} <p>{item.title}</p>
            </Link>
          </div>
          {item.subNav && subnav ? (
            <div className="right-link">{item.iconOpened}</div>
          ) : item.subNav ? (
            <div className="right-link">{item.iconClosed}</div>
          ) : null}
        </div>
        {item.subNav ? (
          <ul className={`submenu-nav ${subnav ? "show-menu" : ""}`}>
            {item.subNav &&
              item.subNav.map((item, index) => {
                return (
                  <li className="link-submenu">
                    <a className="dropdown-items" href="#" key={index}>
                      {item.icon} {item.title}
                    </a>
                  </li>
                );
              })}
          </ul>
        ) : null}
      </li>
    </>
  );
};

export default SubMenu;
