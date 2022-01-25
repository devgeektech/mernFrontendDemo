import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import {
  Nav,
  Tab,
  Form,
  Button,
  Spinner,
  Col,
  Container,
  Row,
  Card,
  Modal,
} from 'react-bootstrap';
import gobackImg from '../../../assets/img/goback.svg';
import { AddUserSchema, AddComplianceSchema } from '../../../validators';
import { FetchFromServer } from '../../../utils/helpers';
import { ApiRoutes, AppConfig } from '../../../utils/config';
import {
  ProfileInformation
} from '../../components/User';

const AddUser = () => {
  const form = useRef(null);
  const history = useHistory();
  const [isBtnDisable, setDisable] = useState(false);
  
 
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        audio:''
      },
      validationSchema: AddUserSchema,
      onSubmit: async (values) => {
        const formData = new FormData(form.current);
        setDisable(true);
        const response = await FetchFromServer(
          ApiRoutes.ADD_USER.service,
          ApiRoutes.ADD_USER.url,
          ApiRoutes.ADD_USER.method,
          ApiRoutes.ADD_USER.authenticate,
          undefined,
          formData
        );
        setDisable(false);
        if (response && response.isError) {
          toast.error(response.messages[0]);
        } else {
          history.push({
            pathname: '/users',
          });
        }
      },
    });
  return (
    <>
      <div className="inner_subheader justify-content-end">
        <Link to="/users" className="btn btn_goback p-0" role="button">
          <img className="mr-3" src={gobackImg} alt={gobackImg} />
          Go Back
        </Link>
      </div>

      <Container fluid className="addNewUserPage">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3 mt-4">
            <Card>
              <Card.Body>
                <div className="p-24">
                  <Form ref={form} onSubmit={handleSubmit}>
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="profile"
                    >
                      <Nav as="ul" className="nav-pills mb-3 position-relative">
                        <Nav.Item as="li">
                          <Nav.Link eventKey="profile">
                            Profile Information
                          </Nav.Link>
                        </Nav.Item>
                        
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="profile">
                          <ProfileInformation
                            handleChange={handleChange}
                            errors={errors}
                            values={values}
                            touched={touched}
                            setFieldValue={setFieldValue}
                          />
                        </Tab.Pane>
                        
                      </Tab.Content>
                    </Tab.Container>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>

          
          <Col md={12} className="mb-5 text-right pageButtomBtn">
            <Button
              variant=""
              className="px-5 py-2 rounded btn-pink ml-3 form_btn"
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
              Add User
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { AddUser };
