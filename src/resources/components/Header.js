import HelloContext from '../../context';
import React, { useState, useEffect,forwardRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Container,
  Row,
  Modal, 
  Spinner,
  Form,
  Tab,
  Nav
} from 'react-bootstrap';
import Bell from '../../assets/img/bell.svg';
import NavUser from '../../assets/img/user-2.svg';
import Calendar from '../../assets/img/calendar.svg';
import Userchat from '../../assets/img/userchat.png';
import Userchat2 from '../../assets/img/userchat2.png';
import Settings from '../../assets/img/setting_cog.svg';
import User from '../../assets/img/user_black.svg';
import Logout from '../../assets/img/logout.svg';
import hamburger from '../../assets/img/hamburger.svg';
import Phone_dt from '../../assets/img/phone_dt.svg';   
import Msg_dt from '../../assets/img/msg_dt.svg';
import { logout } from '../../utils/helpers';
import { Dropdown } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import popupClose from './../../assets/img/popupClose.svg';
import { FetchFromServer } from '../../utils/helpers';
import { ApiRoutes, AppConfig } from '../../utils/config';
import Pagination from 'react-js-pagination';

import NoDataCard from '../components/NoDataCard';
import { useHistory } from "react-router-dom";
import TableLoader from './TableLoader';
import useSocket from "../../utils/socket/soket";

//import "../../assets/css/Datepicker/datepicker.css";
const defaultDatepicker = React.createContext('testing');


const Header = (props) => {
  const history = useHistory();
  const socket = useSocket();
  const {
    headerTitle,
    logoPath,
    pathOne,
    pathTwo,
    pathThree,
    linkOne = '#',
    linkTwo = '#',
    handleHamburger,
  } = props;
  const [activePage, setActivePage] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [userListData, setUserListData] = useState([]);
  const [checkType, setCheckType] = useState(0);
  const [actualKey, setActualKey] = useState('');
  const [tableMessage, setTableMessage] = useState("No Data Available");
  const [isOpen, setIsOpen] = useState(false);
  const [show_assign, setShowAssign] = useState(false);
  const handleCloseAssign = () => setShowAssign(false);

 
  const [userTableFilter, setUserTableFilter] = useState({
    search: '',
    material: '',
    user: '',
    skip: 0,
    limit: 10,
    date:'',
    type:'daily',
    usersType:'available'
  });
  const [isAssignedUser, setAssignedUser] = useState(false);
  const [totalRecord, setTotalRecord] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);
  
  const [showFromDate, setShowFromDate] = useState('');
  const [weeklyDate, setWeeklyDate] = useState('');
  const [notifications, setNotifications] = useState('');
  
  const toggleAvailability = (e,type) => {
    e.preventDefault();
    console.log('fdgsdf',type);
    if(checkType==1){
      setUserTableFilter({
        ...userTableFilter,
        usersType: type,
      });
    }
  };
  let urlTo='';
  return (
    <>
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar static-top">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-0 pl-0"
          onClick={handleHamburger}
        >
          <img width="40" src={hamburger} alt={hamburger} />
        </button>

        <div className="d-flex align-items-center w-100">
          <h6 className="mb-0 view_text">{headerTitle}</h6>
          <img className="ml-3" src={logoPath} alt="" />
          <Link
            to={linkOne}
            className={`m-0 navPath ${pathTwo ? 'headerPath' : ''}`}
          >
            {pathOne}
          </Link>
          <Link
            to={linkTwo}
            className={`m-0 navPath ${pathThree ? 'headerPath' : ''}`}
          >
            {pathTwo}
          </Link>
          {pathThree ? <Link className="m-0 navPath">{pathThree}</Link> : ''}
        </div>

        <div className="d-flex align-items-center justify-content-end w-100">
          
          <ul className="navbar-nav">
            <li className="nav-item dropdown userHead">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  as="a"
                  href="#"
                  id="dropdown-basic"
                  className="nav-link d-flex align-items-center justify-content-between flex-row-reverse"
                >
                  <img
                    className="img-profile rounded-circle"
                    src={NavUser}
                    alt={NavUser}
                  />
                  <span className="ml-1 mr-2 d-none d-lg-inline text-gray-600 small">
                    Hi, <span class="headerUserName">Ethan</span>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/profile" className="dropdown-item">
                    <img className="mr-2" src={User} alt={User} /> Admin Profile
                  </Link>
                  <Link to="/settings" className="dropdown-item">
                    <img className="mr-2" src={Settings} alt={Settings} />{' '}
                    Settings{' '}
                  </Link>
                  <Dropdown.Item onClick={() => logout()}>
                    {' '}
                    <img
                      className="mr-2"
                      src={Logout}
                      alt={Logout}
                    /> Logout{' '}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </div>
   
  </>
  );
};

export default Header;
