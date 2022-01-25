import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form, Button, Container, Spinner } from 'react-bootstrap';

import { useFormik } from 'formik';

import { FetchFromServer } from '../../../utils/helpers';
import { ApiRoutes } from '../../../utils/config';
import logo from '../../../assets/img/logo.svg';
import password from '../../../assets/img/password.svg';
import { ForgotPasswordSchema } from '../../../validators';

const ForgotPassword = () => {
  const { id } = useParams();
  const [isBtnDisable, setDisable] = useState(false);
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: { email: '' },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      setDisable(true);
      const response = await FetchFromServer(
        ApiRoutes.PASSWORD_FORGOT.service,
        ApiRoutes.PASSWORD_FORGOT.url.replace(':id', id),
        ApiRoutes.PASSWORD_FORGOT.method,
        ApiRoutes.PASSWORD_FORGOT.authenticate,
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
        
        <p className="text-white small">
          We will send a link on your enter email to reset the password.
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <div className="position-relative">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
                value={values.email}
                autoComplete="off"
              />
              <img src={password} alt={password} />
            </div>
            <p className="mb-0 text-danger small pl-4">
              {errors.email && touched.email ? errors.email : null}
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
          <br></br>
          <Link to="/login" className="mb-0 text-white small">
            Back to Log in
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
