import React from 'react';
import { Row, Col, Button, Spinner, Form } from 'react-bootstrap';

const Password = (props) => {
  const {
    handleChange,
    errors,
    touched,
    isBtnDisable,
    handleSubmit,
    values,
  } = props;
  return (
    <Row>
      <Col xs={12} sm={6} md={6} lg={4} xl={4}>
        <Form.Group>
          <Form.Label className="mb-0">Current Password</Form.Label>
          <Form.Control
            type="password"
            name="oldPassword"
            onChange={handleChange}
            value={values ? values.oldPassword : ''}
          />
          <span className="errorMsg">
            {' '}
            {errors.oldPassword && touched.oldPassword
              ? errors.oldPassword
              : null}
          </span>
        </Form.Group>
      </Col>

      <Col xs={12} sm={6} md={6} lg={4} xl={4}>
        <Form.Group>
          <Form.Label className="mb-0">New Password</Form.Label>
          <Form.Control
            type="password"
            name="newPassword"
            onChange={handleChange}
            value={values ? values.newPassword : ''}
          />
          <span className="errorMsg">
            {' '}
            {errors.newPassword && touched.newPassword
              ? errors.newPassword
              : null}
          </span>
        </Form.Group>
      </Col>
      <Col xs={12} sm={6} md={6} lg={4} xl={4}>
        <Form.Group>
          <Form.Label className="mb-0">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={values ? values.confirmPassword : ''}
          />
          <span className="errorMsg">
            {' '}
            {errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : null}
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

export { Password };
