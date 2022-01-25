/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState,useContext  } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { Col, Container, FormGroup, Row, Form } from 'react-bootstrap';
import { FetchFromServer } from "../../../utils/helpers";
import { ApiRoutes, AppConfig } from "../../../utils/config";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import { useHistory } from "react-router-dom";
import UserLoader from './UserLoader';
import TableFooter from '../../components/TableFooter';
import NoDataCard from '../../components/NoDataCard';


const Users = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalRecord, setTotalRecord] = useState(0);
  const [totalActive, setTotalActive] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [tableMessage, setTableMessage] = useState('No Data Available');
  let storedtableFilters = JSON.parse(localStorage.getItem('tableFilter'));
  const [tableFilter, setTableFilter] = useState({
    skip: 0,
    limit: 9,
    // type: "",
  });
  const [tabActive, setTabActive] = useState(true);
  const history = useHistory();
  

  const getUser = async (data) => {
    setIsLoading(true);
    const response = await FetchFromServer(
      ApiRoutes.USERS_LIST.service,
      ApiRoutes.USERS_LIST.url,
      ApiRoutes.USERS_LIST.method,
      ApiRoutes.USERS_LIST.authenticate,
      tableFilter,
      undefined
    );
    setIsLoading(false);
    if (response && response.isError) {
      toast.error(response.messages[0]);
    } else {
      setUserData(response.data.data);
      setTotalRecord(response.data.totalRecords);
      
    }
  };

  useEffect(() => {
    getUser();
  }, [tableFilter]);

  const handlePageChange = async (pageNumber) => {
    if (pageNumber !== activePage) {
     
      setActivePage(pageNumber);
      setTableFilter({
        ...tableFilter,
        skip: (pageNumber - 1) * tableFilter.limit,
      });
	  localStorage.setItem('tasksActivePage', pageNumber);
	  localStorage.setItem('tableFilter', JSON.stringify(tableFilter));
    }
  };

  const redirect = () => {
    localStorage.setItem('renderStatus', 1); 
  }

  const handleSearch = async (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setActivePage(1);
    if (name === 'pageSize') {
      setTableFilter({
        ...tableFilter,
        skip: 0,
        limit: value,
      });
      if(storedtableFilters){
        storedtableFilters.skip=0;
	      storedtableFilters.limit=value;
      }
	  
    }
    if (name === 'search') {
      setTableFilter({
        ...tableFilter,
        skip: 0,
        search: value
		});
    if(storedtableFilters){
		storedtableFilters.skip=0;
		storedtableFilters.search=value;}
    }
    localStorage.setItem('tableFilter', JSON.stringify(storedtableFilters));
  };
  
  return (
    <>
      <div className="inner_subheader">
        <Link to="/users/add" className="btn btn-pink">
          Add New User
        </Link>
      </div>
      
      <Container fluid>
        <Row className="jobHistoryPage inventory mt-4">
          <Col xs={12} sm={12} md={4} lg={4} xl={3}>
            <FormGroup className="mb-0">
              <Form.Control
                type="text"
                placeholder="Search"
                name="search"
                onChange={handleSearch}
              />
            </FormGroup>
            <label className="mb-0">
              <span>Search</span> in all fields
            </label>
          </Col>

          <Col sm={12}>
            <div className="table-responsive">
              <div className="table mt-3 rateTask_table position-relative">
                <div className="tr bg-transparent">
                  
                  <div className="th">NAME</div>
                  <div className="th">Email</div>
                  <div className="th">Phone</div>
                  <div className="th"></div>
                </div>
                {userData && userData.length>0 ?
                  userData.map((data,id) => {
                    return (
                      <div
                        key={id}
                        class={`tr position-relative`}
                      >
                        
                        <div className="td">{data.firstName} {data.lastName}</div>
                        <div className="td">{data.email}</div>
                        <div className="td">{data.phoneNumber}</div>
                        <div className="td" onClick={redirect}>
                          <Link to={`/users/edit/${data._id}`}>Edit</Link>
                        </div>
                      </div>
                     );
                    })
                  :
                  (<Col xs={12} sm={12} md={12} lg={6} xl={12} key="2">
                  <NoDataCard />
                </Col>)
                  }

                {userData.length === 0 && isLoading === false ? (
                  <tr>
                    <td colSpan="7">
                      <NoDataCard title={tableMessage} />
                    </td>
                  </tr>
                ) : (
                  ''
                )}

                {isLoading ? (
                  <>
                    <div class="tr position-relative">
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Link to="#">
                          <Skeleton />
                        </Link>
                      </div>
                      <span className="title" style={{ width: 300 }}>
                        <Skeleton />
                      </span>
                      <span
                        className="title categoryName"
                        style={{ width: 300 }}
                      >
                        <Skeleton />
                      </span>
                      <div className="description">
                        <p class="mb-0">
                          <Skeleton />
                        </p>
                      </div>
                    </div>
                    <div class="tr position-relative">
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Link to="#">
                          <Skeleton />
                        </Link>
                      </div>
                      <span className="title" style={{ width: 300 }}>
                        <Skeleton />
                      </span>
                      <div className="description">
                        <p class="mb-0">
                          <Skeleton />
                        </p>
                      </div>
                    </div>
                    <div class="tr position-relative">
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Skeleton />
                      </div>
                      <div className="td">
                        <Link to="#">
                          <Skeleton />
                        </Link>
                      </div>
                      <span className="title" style={{ width: 300 }}>
                        <Skeleton />
                      </span>
                      <div className="description">
                        <p class="mb-0">
                          <Skeleton />
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          </Col>
        </Row>
        <TableFooter
          totalRecord={totalRecord}
          activePage={activePage}
          tableFilter={tableFilter}
          handlePageChange={handlePageChange}
          handleSearch={handleSearch}
        />
      </Container>
    </>
  );
};

export { Users };
