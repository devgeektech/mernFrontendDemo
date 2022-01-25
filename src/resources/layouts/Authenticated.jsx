import React, { useLayoutEffect,useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import logoGray from '../../assets/img/logo-w-fade.svg';


import {
  Users,
  AddUser,
  EditUser,
} from '../pages/Users';

import AdminProfile from '../pages/AdminProfile';
import Settings from '../pages/Settings';
import { Route } from 'react-router-dom';




const AuthenticatedLayout = () => {
  const [collapseClass, setCollapseClass] = useState('');
  const [toggleClass, setToggleClass] = useState('');
  const [mobileScreen, setMobileScreen] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [scheduleName, setScheduleName] = useState('');
  const collapseSideBar = () => {
    if (collapseClass === 'collapse-side-bar') setCollapseClass('');
    else setCollapseClass('collapse-side-bar');
  };
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  //const messagesStartRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); 
  useEffect(() => {
    executeScroll();
  }, []);
  useLayoutEffect(() => {
    const updateSize = () => {
      let innerWidth = 1024;
      if (window.innerWidth <= innerWidth) {
        setMobileScreen('collapse-side-bar-0');
      } else {
        setMobileScreen('');
      }
      // console.log('here', window.innerWidth);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    
  }, []);

  const handleHamburger = () => {
    if (toggleClass === 'mobile_sidebar') setToggleClass('');
    else setToggleClass('mobile_sidebar');
  };

  return (
    <div id="wrapper" ref={myRef}>
      <Sidebar
        collapseSideBar={collapseSideBar}
        collapseClass={collapseClass}
        mobileScreen={mobileScreen}
        toggleClass={toggleClass}
        handleHamburger={handleHamburger}
      />

      <div
        id="content-wrapper"
        className={`d-flex flex-column ${
          collapseClass === 'collapse-side-bar' ? 'contentWidth' : ''
        } ${mobileScreen === 'collapse-side-bar-0' ? 'contentWidth-0' : ''}`}
      >
        <div id="content" >
          <Route path="/" exact={true}>
            <Header
              handleHamburger={handleHamburger}
              headerTitle="Users List"
              //logoPath={logoGray}
              pathOne="Users"
              pathTwo=""
            />
            <Users />
          </Route>
          
          <Route path="/users" exact={true}>
            <Header
              handleHamburger={handleHamburger}
              headerTitle="Users"
              //logoPath={logoGray}
              pathOne="Users"
              pathTwo=""
            />
            <Users />
          </Route>
          <Route path="/users/add" exact={true}>
            <Header
              handleHamburger={handleHamburger}
              headerTitle="Add New User"
              //logoPath={logoGray}
              pathOne="Users"
              pathTwo="Add New User"
              linkOne="/users"
            />
            <AddUser />
          </Route>
          <Route path="/users/edit/:id">
            <Header
              handleHamburger={handleHamburger}
              headerTitle={userName}
              //logoPath={logoGray}
              pathOne="Users"
              pathTwo="User Profile"
              linkOne="/users"
              linkTwo={`/users/overview/${userId}`}
            />
            <EditUser />
          </Route>
          <Route path="/profile" exact={true}>
            <Header
              handleHamburger={handleHamburger}
              headerTitle="Admin Profile"
              //logoPath={logoGray}
            />
            <AdminProfile />
          </Route>
          <Route path="/settings" exact={true}>
            <Header
              handleHamburger={handleHamburger}
              headerTitle="Settings"
              //logoPath={logoGray}
            />
            <Settings />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
