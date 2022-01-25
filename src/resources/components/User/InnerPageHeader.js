import React from 'react';
import { Link } from 'react-router-dom';
import UserPageChat from '../../../assets/img/userPage-chat.svg';
import UserPageCall from '../../../assets/img/userPage_call.svg';
import UserPageMail from '../../../assets/img/userPage_mail.svg';

const InnerPageHeader = (props) => {
  const { id, email, mobile, activeTab = 'overview' } = props;

  return (
    <div className="inner_subheader">
      <div className="d-flex align-items-center tabBtn">
        <Link
          to={`/users/overview/${id}`}
          className={`btn ${activeTab === 'overview' ? 'active' : ''}`}
        >
          Overview
        </Link>
        <Link
          to={`/users/jobs-history/${id}`}
          className={`btn ml-2 ${activeTab === 'jobsHistory' ? 'active' : ''}`}
        >
          Jobs History
        </Link>
        <Link
          to={`/users/inventory/${id}`}
          className={`btn ml-2 ${activeTab === 'inventory' ? 'active' : ''}`}
        >
          Inventory
        </Link>
        <Link
          to={`/users/tools/${id}`}
          className={`btn ml-2 ${activeTab === 'tools' ? 'active' : ''}`}
        >
          Tools
        </Link>
        <Link
          to={`/users/calender/${id}`}
          className={`btn ml-1 ${activeTab === 'calender' ? 'active' : ''}`}
        >
          Calender
        </Link>
        <Link
          to={`/users/edit/${id}`}
          className={`btn ml-2 ${activeTab === 'editProfile' ? 'active' : ''}`}
        >
          Edit Profile
        </Link>
        
      </div>

      <div className="d-flex align-items-start justify-content-between column1 mr-5 pr-5">
        <div className="d-flex align-items-center flex-row mr-4">
          <img className="mr-2" src={UserPageChat} alt={UserPageChat} />
          <Link to="/chat"><h6 className="m-0">Chat</h6></Link>
        </div>
        <a href={`tel:${mobile}`}>
          <div className="d-flex align-items-center flex-row mr-4">
            <img className="mr-2" src={UserPageCall} alt={UserPageCall} />
            <h6 className="m-0">Call</h6>
          </div>
        </a>
        <a href={`mailto:${email}`}>
          <div className="d-flex align-items-center flex-row">
            <img className="mr-2" src={UserPageMail} alt={UserPageMail} />
            <h6 className="m-0">Mail</h6>
          </div>
        </a>
      </div>
    </div>
  );
};

export default InnerPageHeader;
