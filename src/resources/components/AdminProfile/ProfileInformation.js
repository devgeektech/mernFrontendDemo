import React from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';

const ProfileInformation = (props) => {
  const {
    handleChange,
    errors,
    values,
    touched,
    handleSubmit,
    isBtnDisable,
  } = props;
  return (
    <Row>
      <Col xs={12} sm={6} md={6} lg={4} xl={4}>
        <Form.Group>
          <Form.Label className="mb-0">Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            onChange={handleChange}
            value={values ? values.email : ''}
          />
          <span className="errorMsg">
            {' '}
            {errors.email && touched.email ? errors.email : null}
          </span>
        </Form.Group>
      </Col>
      <Col md={12} className="mb-5 mt-5 text-right pageButtomBtn">
        <Button
          variant=""
          className="px-5 py-2 rounded btn-pink ml-3"
          style={{ fontSize: '14px' }}
          onClick={handleSubmit}
          disabled={isBtnDisable}
        >
          {isBtnDisable ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            ''
          )}{' '}
          Update
        </Button>
      </Col>
    </Row>
  );
};

export { ProfileInformation };
