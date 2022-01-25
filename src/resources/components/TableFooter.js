import React from 'react';
import Pagination from 'react-js-pagination';
import { Row, Col, Form } from 'react-bootstrap';

const TableFooter = (props) => {
  const {
    totalRecord,
    activePage,
    tableFilter,
    handlePageChange,
    handleSearch,
  } = props;
  console.log(tableFilter.limit,'limit');
  console.log(totalRecord,'totalRecord');
  return (
    <div className="bg-white py-2 px-3 rounded paginationBox">
      <Row className="w-100 no-gutters">
        <Col sm={12} md={6} lg={8}>
          {totalRecord > tableFilter.limit ? (
            <Pagination
              activePage={activePage}
              itemsCountPerPage={tableFilter.limit}
              totalItemsCount={totalRecord}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              hideFirstLastPages="false"
            />
          ) : (
            ''
          )}
        </Col>

        <Col sm={12} md={6} lg={4}>
          {totalRecord ? (
            <div className="d-flex align-items-center justify-content-end fllex-wrap sortBox">
              <Form.Control
                as="select"
                style={{ width: '100px' }}
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
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
};

export default TableFooter;
