import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import InnerPageHeader from '../../components/User/InnerPageHeader';
import TableFooter from '../../components/TableFooter';
import '../../../assets/css/Custom.css';

import plusImg from '../../../assets/img/plus.svg';


import previewEyeImg from '../../../assets/img/previewEye.svg';
import editImg from '../../../assets/img/edit.svg';
import galleryImg from '../../../assets/img/gallery.svg';
import addCardImg from '../../../assets/img/addCard.svg';
import uploadCloudImg from '../../../assets/img/uploadCloud.svg';
import popupClose from './../../../assets/img/popupClose.svg';
import handCard from './../../../assets/img/handCard.svg';
import dummyImage from '../../../assets/img/noimage.jpeg';
import modalDeleteBtn from './../../../assets/img/modaldelete_btn.svg';
import tikImg from '../../../assets/img/tik.jpg';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import {  pdfjs } from "react-pdf";


import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tab,
  Form,
  Nav,
  Spinner,
  Modal,
} from 'react-bootstrap';

import {
  ProfileInformation,
} from '../../components/User';

import { AddUserSchema, AddComplianceSchema } from '../../../validators';
import { FetchFromServer } from '../../../utils/helpers';
import { ApiRoutes, AppConfig } from '../../../utils/config';

const EditUser = () => {
  const form = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [isBtnDisable, setDisable] = useState(false);
  const [isDeleteBtnDisable, setDeleteBtnDisable] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const handleDeleteClose = () => setDeleteModalShow(false);
  const [isEdit, setIsEdit] = useState(-1);
  
   useEffect(() => {
    getUser();
  }, []);

  const { handleSubmit, handleChange, values, errors, setFieldValue, touched } =
    useFormik({
      initialValues: {},
      validationSchema: AddUserSchema,
      onSubmit: async (values) => {
        setDisable(true);
        const formData = new FormData(form.current);
        const response = await FetchFromServer(
          ApiRoutes.EDIT_USER.service,
          ApiRoutes.EDIT_USER.url.replace(':id', id),
          ApiRoutes.EDIT_USER.method,
          ApiRoutes.EDIT_USER.authenticate,
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
  
 async function getUser() {
    const response = await FetchFromServer(
      ApiRoutes.USER_INFO.service,
      ApiRoutes.USER_INFO.url.replace(':id', id),
      ApiRoutes.USER_INFO.method,
      ApiRoutes.USER_INFO.authenticate,
      undefined
    );
    if (response && response.isError) {
      toast.error(response.messages[0]);
      history.push({
        pathname: '/users',
      });
    } else {
      let data = response.data.data;
      console.log('data', data);
      values.firstName = data.firstName;
      values.lastName = data.lastName;
      values.email = data.email;
      values.phoneNumber = data.phoneNumber;
      values.audio = data.audio
        ? `${AppConfig.FILES_ENDPOINT}${data.audio}`
        : '';
      setUserData(values);
    }
  }
  const deleteUser = async () => {
    setDeleteBtnDisable(true);
    const response = await FetchFromServer(
      ApiRoutes.DELETE_USER.service,
      ApiRoutes.DELETE_USER.url.replace(':id', id),
      ApiRoutes.DELETE_USER.method,
      ApiRoutes.DELETE_USER.authenticate,
      undefined
    );
    setDeleteBtnDisable(false);
    if (response && response.isError) {
      toast.error(response.messages[0]);
    } else {
      toast.error(response.messages[0]);
      history.push({
        pathname: '/users',
      });
    }
  };

  
  return (
    <>
      <Container fluid className="addNewUserPage">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3 mt-4">
            <Card>
              <Card.Body>
                <div className="p-24">
                  <Form
                    ref={form}
                    enablereinitialize="true"
                    onSubmit={handleSubmit}
                  >
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
              className="px-5 py-2 rounded addcard form_btn"
              style={{ background: '#E5EAEE', fontSize: '14px' }}
              onClick={() => setDeleteModalShow(true)}
            >
              Delete User
            </Button>
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
              Save Updates
            </Button>
          </Col>
        </Row>
      </Container>

      
      <Modal
        className="profileEditModel two"
        show={deleteModalShow}
        onHide={handleDeleteClose}
        backdrop="static"
        keyboard={false}
      >
        <span className="modelClose" onClick={handleDeleteClose}>
          <img src={popupClose} alt={popupClose} />
        </span>
        <Modal.Body className="p-0">
          <div className="secondSection px-5 pb-3 pt-5 text-center">
            <h3 className="font-weight-600">
              Are you sure you want to delete this user?
            </h3>
          </div>
          <div className="px-3 pb-5 d-flex align-items-center justify-content-center flex-wrap">
            <Button
              variant="light"
              className="mr-3 px-4 py-2 popupBtn"
              onClick={deleteUser}
              disabled={isDeleteBtnDisable}
            >
              {isDeleteBtnDisable ? (
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
              Yes, Delete
            </Button>
            <Button
              variant=""
              className="btn-pink px-4 py-2 popupBtn"
              onClick={handleDeleteClose}
            >
              No, Go Back
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      
    </>
  );
};

export { EditUser };
