import React from 'react';
import { Card } from 'react-bootstrap';
import NotFound from '../../assets/img/on_data_found.svg';

const NoDataCard = (props) => {
  const {
    title = 'No Data Available',
    description = "The data you're looking for is not available",
  } = props;
  return (
    <Card>
      <Card.Body className="py-3 px-4">
        <div className="d-flex align-items-center justify-content-center py-5">
          <div className="position-relative noDataFound">
            <img src={NotFound} alt={NotFound} />
            <h6 className="mb-0">{title}</h6>
            <p>{description}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NoDataCard;
