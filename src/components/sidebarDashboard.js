import React from "react";

import { Link } from "gatsby";
import "../styles/sidebarDashboard.css";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
const navDashboard = () => {
  const show_sub_menu = () => {
    alert("click");
  };
  return (
    <>
      <aside className="aside-dashboard">
        <div className="main">
          <ul className="nav-links">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </ul>
        </div>
        {/* <div className="main">
          <ul className="nav-links">
            <li className="links-menu-dashboard" onClick={show_sub_menu}>
              <Link className="link-active-d toggle-drop">
                <div className="left-link">
                  <FaChartPie /> Registros
                </div>
                <div className="right-link">
                  <FaAngleDown />
                </div>
              </Link>
              <ul className="submenu-nav">
                <li className="link-submenu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li className="link-submenu">
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li className="link-submenu">
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="links-menu-dashboard">
              <Link className="toggle-drop">
                <div className="left-link">
                  <FaRegFileAlt /> Generate PDF
                </div>
              </Link>
            </li>
            <li className="links-menu-dashboard">
              <Link className="toggle-drop">
                <div className="left-link">
                  <FaShoppingBag /> Sales
                </div>
              </Link>
            </li>
            <li className="links-menu-dashboard">
              <Link className="toggle-drop">
                <div className="left-link">
                  <FaRegEnvelope /> Messages
                </div>
              </Link>
            </li>
          </ul>
        </div>
       */}
      </aside>
    </>
  );
};

export default navDashboard;
