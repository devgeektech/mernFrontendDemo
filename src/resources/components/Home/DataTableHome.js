import React from 'react';

import Phone_dt from '../../../assets/img/phone_dt.svg';
import Msg_dt from '../../../assets/img/msg_dt.svg';
import { Col, Form, Row } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import TableLoader from '../../components/TableLoader';
import NoDataCard from '../../components/NoDataCard';
import { useHistory } from "react-router-dom";


const DataTableHome = (props) => {
  const history = useHistory();
  const {
    currentUsers,
    isLoading,
    totalRecord,
    tableFilter,
    activePage,
    handlePageChange,
    handleSearch,
    tableMessage,
  } = props;
  return (
    <div className="card_flex homeDTable">
      <Form.Group className="d-flex flex-row flex-wrap">
        <div>
          <Form.Control as="select" name="status" onChange={handleSearch}>
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Offline</option>
          </Form.Control>
          <label>
            <span>Filter</span> by status
          </label>
        </div>
        <div>
          <Form.Control
            placeholder="Search"
            type="text"
            name="search"
            onChange={handleSearch}
          />
          <label>
            <span>Search</span> in all fields
          </label>
        </div>
      </Form.Group>

      <table id="myTable" className="mycustomDT table">
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>STATUS</th>
            <th>ACTIVE JOBS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers &&
            isLoading === false &&
            currentUsers.map((data, id) => {
              //let activeJobs = data.job.length;
              return (
                <tr key={id}>
                  <td>{data.userId}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>
                    {data.status === 'Active' ? (
                      <span className="activeTd">Active</span>
                    ) : (
                      <span className="offlineTd">Offline</span>
                    )}
                  </td>
                  <td>{data.scheduledJobs ? data.scheduledJobs : 0}</td>
                  <td className="action-td">
                    <div className="text-right">
                      <a href={`tel:${data.phoneNumber}`}><img src={Phone_dt} alt={Phone_dt} /></a>
                      <img onClick={() => history.push({pathname: "/chat",state: data._id})} className="ml-3" src={Msg_dt} alt={Msg_dt} />
                    </div>
                  </td>
                </tr>
              );
            })}
          {currentUsers.length === 0 && isLoading === false ? (
            <tr>
              <td colSpan="6">
                <NoDataCard title={tableMessage} />
              </td>
            </tr>
          ) : (
            ''
          )}
          {isLoading ? <TableLoader numOfrows={10} cols={6} /> : ''}
        </tbody>
      </table>
      <div className="bg-white py-2 px-0 rounded jobHistoryPage">
        {totalRecord && tableFilter.limit !== 'all' ? (
          <Row className="no-gutters">
            <Col sm={12} md={6} lg={7} className="paginationBox">
              {totalRecord > tableFilter.limit ? (
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={tableFilter.limit}
                  totalItemsCount={totalRecord}
                  // pageRangeDisplayed={5}
                  onChange={handlePageChange}
                  hideFirstLastPages="false"
                />
              ) : (
                ''
              )}
            </Col>
            <Col sm={12} md={6} lg={5}>
              <div className="d-flex align-items-center justify-content-end sortBox">
                <Form.Control
                  as="select"
                  className="mr-0"
                  style={{ width: '100px', background: '#F4F6F9' }}
                  name="pageSize"
                  onChange={handleSearch}
                >
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </Form.Control>
                <p className="mb-0 ml-2">
                  showing rows {tableFilter.skip + 1} to{' '}
                  {Number(tableFilter.skip) + Number(tableFilter.limit) >
                  totalRecord
                    ? totalRecord
                    : Number(tableFilter.skip) + Number(tableFilter.limit)}{' '}
                  of {totalRecord}
                </p>
              </div>
            </Col>
          </Row>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export { DataTableHome };
