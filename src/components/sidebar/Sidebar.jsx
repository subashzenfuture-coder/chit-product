import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";
import Logo1 from "../../assets/images/fav-icon.png";
import "./Sidebar.css";
import { useState } from "react";

const isActive = (path, current) => current === path || current.startsWith(path + "/");

const isAnyActive = (paths, current) => {
  return paths.some((p) => current.startsWith(p));
};

export const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const [openSub, setOpenSub] = useState(null);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* HEADER */}
      <div className="sidebar_header">
        <div className="header_logo">
          <Link to="">{collapsed ? <img src={Logo1} alt="logo" /> : <img src={Logo} alt="logo" />}</Link>
        </div>

        <button className="collapse_btn" onClick={() => setCollapsed(!collapsed)}>
          <i className={`fi ${collapsed ? "fi-tr-angle-small-right" : "fi-tr-angle-small-left"}`}></i>
        </button>
      </div>

      {/* MENU */}
      <div className="sidebar_menu_list">
        <ul className="sidebar_menu_items">
          <li className={`sidebar_menu ${isActive("/", location.pathname) ? "active" : ""}`}>
            <Link to="/" className="menu_header" data-tooltip="Dashboard">
              <span className="sidebar_icon">
                <i className="fi fi-tr-objects-column"></i>
              </span>
              <span className="sidebar_text">Dashboard</span>
            </Link>
          </li>

          <li className={`sidebar_menu ${isActive("/chit-plans", location.pathname) ? "active" : ""}`}>
            <Link to="/chit-plans" className="menu_header" data-tooltip="Chit Plans">
              <span className="sidebar_icon">
                <i class="fi fi-tr-plan"></i>
              </span>
              <span className="sidebar_text">Chit Plans</span>
            </Link>
          </li>

          <li className={`sidebar_menu ${isActive("/chit-customers", location.pathname) ? "active" : ""}`}>
            <Link to="/chit-customers" className="menu_header" data-tooltip="Customers">
              <span className="sidebar_icon">
                <i class="fi fi-tr-user-tie-hair"></i>
              </span>
              <span className="sidebar_text">Chit Customers</span>
            </Link>
          </li>

          <li className={`sidebar_menu ${isActive("/chit-groups", location.pathname) ? "active" : ""}`}>
            <Link to="/chit-groups" className="menu_header" data-tooltip="Chit Groups">
              <span className="sidebar_icon">
                <i class="fi fi-tr-users-alt"></i>
              </span>
              <span className="sidebar_text">Chit Groups</span>
            </Link>
          </li>

          <li className={`sidebar_menu ${isActive("/agent-staff", location.pathname) ? "active" : ""}`}>
            <Link to="/agent-staff" className="menu_header" data-tooltip="Staffs">
              <span className="sidebar_icon">
                <i class="fi fi-tr-id-card-clip-alt"></i>
              </span>
              <span className="sidebar_text">Staff</span>
            </Link>
          </li>

          <li className={`sidebar_menu ${isActive("/gst", location.pathname) ? "active" : ""}`}>
            <Link to="/gst" className="menu_header" data-tooltip="GST">
              <span className="sidebar_icon">
                <i class="fi fi-tr-badge-percent"></i>
              </span>
              <span className="sidebar_text">GST</span>
            </Link>
          </li>

          <li className={`sidebar_menu ${isActive("/chit-auctions-list", location.pathname) ? "active" : ""}`}>
            <Link to="/chit-auctions-list" className="menu_header" data-tooltip="Auctions">
              <span className="sidebar_icon">
                <i className="fi fi-tr-gavel"></i>
              </span>
              <span className="sidebar_text">Auctions</span>
            </Link>
          </li>

          <li className={`sidebar_menu ${isActive("/chit-payments", location.pathname) ? "active" : ""}`}>
            <Link to="/chit-payments" className="menu_header" data-tooltip="Collections">
              <span className="sidebar_icon">
                <i className="fi fi-tr-wallet-money"></i>
              </span>
              <span className="sidebar_text">Collections</span>
            </Link>
          </li>

          {/* REPORT */}
          <li className={`sidebar_menu pd-l15 ${isAnyActive(["/report"], location.pathname) ? "active" : ""}`}>
            <div
              className="menu_header submenu_toggle"
              onClick={() => {
                if (!collapsed) {
                  setOpenSub(openSub === "report" ? null : "report");
                }
              }}>
              <span className="sidebar_icon">
                <i className="fi fi-tr-chart-simple"></i>
              </span>
              <span className="sidebar_text">Report</span>
            </div>

            {/* Always in DOM — CSS controls collapsed popup, class controls expanded */}
            <ul className={`submenu submenu_list pd-l25 ${openSub === "report" ? "submenu--open" : ""}`}>
              <li className={isActive("/report/collection-report", location.pathname) ? "active" : ""}>
                <Link to="/report/collection-report">
                  <span className="submenu_icon">
                    <i className="fi fi-tr-big-data-analytics"></i>
                  </span>
                  <span className="submenu_text">Collection Report</span>
                </Link>
              </li>
              <li className={isActive("/report/group-report", location.pathname) ? "active" : ""}>
                <Link to="/report/group-report">
                  <span className="submenu_icon">
                    <i className="fi fi-tr-big-data-analytics"></i>
                  </span>
                  <span className="submenu_text">Group Report</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* FOOTER */}
      <div className="sidebar_footer">
        <Link to="/logout" className="footer_item" data-tooltip="Logout">
          <span className="sidebar_icon">
            <i className="fi fi-tr-sign-out-alt"></i>
          </span>
          <span className="sidebar_text">Logout</span>
        </Link>
      </div>
    </aside>
  );
};
