import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Custom.css';

import Logo from '../../assets/img/logo.svg';
import Logo2 from '../../assets/img/logo-w.svg';
import HomeIcon from '../../assets/img/home.svg';
import UserIcon from '../../assets/img/user.svg';
import WarehouseIcon from '../../assets/img/warehouse.svg';
import RatesIcon from '../../assets/img/rates.svg';
import ReportsIcon from '../../assets/img/reports.svg';
import ChatIcon from '../../assets/img/chat.svg';
import CollapseIcon from '../../assets/img/collapse.svg';
import CollapseIcon2 from '../../assets/img/collapse_right.svg';

const Sidebar = (props) => {
  const {
    collapseSideBar,
    collapseClass,
    mobileScreen,
    toggleClass,
    handleHamburger,
  } = props;
  const history = useHistory();
  let path = history.location.pathname.split('/');
  let segment1 = path[1];
  return (
    <ul
      className={`navbar-nav bg-sidebar-primary sidebar sidebar-dark accordion ${collapseClass} ${mobileScreen} ${toggleClass}`}
      id="accordionSidebar"
    >
      <Link
        to=""
        className="sidebar-brand d-flex align-items-start justify-content-start"
      >
        <div className="sidebar-brand-text mx-3">
          <h3>Mern Demo</h3>
          {/*<img className="img-responsive" src={Logo} alt={Logo} />*/}
        </div>
        <div className="sidebar-brand-text-2">
          <img className="img-responsive" src={Logo2} alt={Logo2} />
        </div>
      </Link>

      

      <li className={`nav-item ${segment1 === 'users' ? 'active' : ''}`}>
        <Link to="/users" className="nav-link">
          <span className="sidebar_iconBox">
            <img src={UserIcon} alt={UserIcon} className="sidebar_icon" />
          </span>
          <span>Users</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
