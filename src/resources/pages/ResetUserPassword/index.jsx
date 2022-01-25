import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form, Button, Container, Spinner } from 'react-bootstrap';

import { useFormik } from 'formik';

import { FetchFromServer } from '../../../utils/helpers';
import { ApiRoutes } from '../../../utils/config';
import logo from '../../../assets/img/logo.svg';
import password from '../../../assets/img/password.svg';
import { SetPasswordSchema } from '../../../validators';

const ResetUserPassword = () => {
  console.log('testingg');
  const { id } = useParams();
  const [isBtnDisable, setDisable] = useState(false);
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: { newPassword: '', confirmPassword: '' },
    validationSchema: SetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      setDisable(true);
      const response = await FetchFromServer(
        ApiRoutes.RESET_PASSWORD.service,
        ApiRoutes.RESET_PASSWORD.url.replace(':id', id),
        ApiRoutes.RESET_PASSWORD.method,
        ApiRoutes.RESET_PASSWORD.authenticate,
        undefined,
        values
      );
      setDisable(false);
      if (response && response.isError) {
        toast.error(response.messages[0]);
      } else {
        resetForm({ values: '' });
        toast.success(response.messages[0]);
      }
    },
  });
  return (
    <Container fluid className="LoginFormWrapper">
      <div className="LoginFormBox">
      
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <div className="position-relative">
              <Form.Control
                type="password"
                placeholder="Enter your new password"
                name="newPassword"
                onChange={handleChange}
                value={values.newPassword}
                autoComplete="off"
              />
              <img src={password} alt={password} />
            </div>
            <p className="mb-0 text-danger small pl-4">
              {errors.newPassword && touched.newPassword
                ? errors.newPassword
                : null}
            </p>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <div className="position-relative">
              <Form.Control
                type="password"
                placeholder="Re-enter your new password"
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                autoComplete="off"
              />
              <img src={password} alt={password} />
            </div>
            <p className="mb-0 text-danger small pl-4">
              {errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : null}
            </p>
          </Form.Group>
          
          <div className="d-flex align-items-center justify-content-center">
            <Button
              variant=""
              className="btn-pink text-uppercase btn px-5 py-2"
              type="submit"
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
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ResetUserPassword;
