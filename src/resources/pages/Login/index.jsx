import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form, Button, Container, Spinner } from 'react-bootstrap';

import { useFormik } from 'formik';

import {
  FetchFromServer,
  getCheck,
  setCheck,
  clearCheck,
  setUserData,
} from '../../../utils/helpers';
import { ApiRoutes } from '../../../utils/config';
import logo from '../../../assets/img/logo.svg';
import email from '../../../assets/img/email.svg';
import password from '../../../assets/img/password.svg';
import { LoginSchema } from '../../../validators';

const LoginPage = () => {
  let data = getCheck();
  if (data) {
    data.islogged = true;
  } else {
    data = {
      email: '',
      password: '',
      islogged: false,
    };
  }
  const [isBtnDisable, setDisable] = useState(false);
  const history = useHistory();
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: data,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setDisable(true);
      const response = await FetchFromServer(
        ApiRoutes.LOGIN.service,
        ApiRoutes.LOGIN.url,
        ApiRoutes.LOGIN.method,
        ApiRoutes.LOGIN.authenticate,
        undefined,
        values
      );
      setDisable(false);
      if (response && response.isError) {
        toast.error(response.messages[0]);
      } else {
        await setUserData(response.data.data);
        if (values.islogged) {
          setCheck(values.email, values.password);
        } else {
          clearCheck();
        }

        history.push({
          pathname: '/users',
        });
      }
    },
  });
  return (
    <Container fluid className="LoginFormWrapper">
      <div className="LoginFormBox">
        
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label className="text-white">Email address</Form.Label> */}
            <div className="position-relative">
              <Form.Control
                // type="email"
                placeholder="Username"
                name="email"
                onChange={handleChange}
                value={values.email}
                autoComplete="off"
              />
              <img src={email} alt={email} />
            </div>
            <p className="mb-0 text-danger small pl-4">
              {errors.email && touched.email ? errors.email : null}
            </p>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-0">
            {/* <Form.Label className="text-white">Password</Form.Label> */}
            <div className="position-relative">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={values.password}
                autoComplete="off"
              />
              <img src={password} alt={password} />
            </div>
            <p className="mb-0 text-danger small pl-4">
              {errors.password && touched.password ? errors.password : null}
            </p>
          </Form.Group>
          {/* <div className="d-flex justify-content-between pt-2 pb-3">
            <Form.Group className="pl-2" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Stay logged in"
                name="islogged"
                onChange={handleChange}
                value={values.islogged}
                checked={values.islogged}
                className="d-flex align-items-center"
              />
            </Form.Group>
          </div> */}

          <div className="d-flex align-items-center justify-content-center mt-35px mb-24px">
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
                  className="ml-1"
                />
              ) : (
                ''
              )}{' '}
              LOG IN
            </Button>
          </div>
          <Link to="/forgot-password" className="mb-0 text-white small">
            Forgot Password?
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
