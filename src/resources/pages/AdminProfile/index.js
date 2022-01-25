import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

import { Nav, Tab, Col, Container, Row, Card } from 'react-bootstrap';

import { AdminProfileSchema, ChangePasswordSchema } from '../../../validators';
import { FetchFromServer } from '../../../utils/helpers';
import { ApiRoutes } from '../../../utils/config';

import { ProfileInformation, Password } from '../../components/AdminProfile';

const AdminProfile = () => {
  const [isProfileBtnDisable, setIsProfileBtnDisable] = useState(false);
  const [isPasswordBtnDisable, setIsPasswordBtnDisable] = useState(false);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: {},
    validationSchema: AdminProfileSchema,
    onSubmit: async (values) => {
      setIsProfileBtnDisable(true);
      const response = await FetchFromServer(
        ApiRoutes.EDIT_ADMIN.service,
        ApiRoutes.EDIT_ADMIN.url,
        ApiRoutes.EDIT_ADMIN.method,
        ApiRoutes.EDIT_ADMIN.authenticate,
        undefined,
        values
      );
      setIsProfileBtnDisable(false);
      if (response && response.isError) {
        toast.error(response.messages[0]);
      } else {
        toast.success(response.messages[0]);
      }
    },
  });

  const {
    handleSubmit: handlePasswordSubmit,
    handleChange: handlePasswordChange,
    values: passwordValues,
    errors: passwordErrors,
    touched: passwordTouched,
  } = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsPasswordBtnDisable(true);
      const response = await FetchFromServer(
        ApiRoutes.CHANGE_PASSWORD.service,
        ApiRoutes.CHANGE_PASSWORD.url,
        ApiRoutes.CHANGE_PASSWORD.method,
        ApiRoutes.CHANGE_PASSWORD.authenticate,
        undefined,
        values
      );
      setIsPasswordBtnDisable(false);
      if (response && response.isError) {
        toast.error(response.messages[0]);
      } else {
        resetForm();
        toast.success(response.messages[0]);
      }
    },
  });

  useEffect(() => {
    async function getUser() {
      const response = await FetchFromServer(
        ApiRoutes.ADMIN_INFO.service,
        ApiRoutes.ADMIN_INFO.url,
        ApiRoutes.ADMIN_INFO.method,
        ApiRoutes.ADMIN_INFO.authenticate,
        undefined
      );
      if (response && response.isError) {
        toast.error(response.messages[0]);
      } else {
        let data = response.data.data;
        values.email = data.email;
        setFieldValue({ email: '' });
      }
    }
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container fluid className="addNewUserPage">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3 mt-4">
            <Card>
              <Card.Body>
                <div className="p-24">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="profileNav"
                  >
                    <Nav as="ul" className="nav-pills mb-3 position-relative">
                      <Nav.Item as="li">
                        <Nav.Link eventKey="profileNav">Change Email</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="passwordNav">
                          Change Password
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="profileNav">
                        <ProfileInformation
                          handleChange={handleChange}
                          errors={errors}
                          values={values}
                          touched={touched}
                          handleSubmit={handleSubmit}
                          isBtnDisable={isProfileBtnDisable}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="passwordNav">
                        <Password
                          handleSubmit={handlePasswordSubmit}
                          handleChange={handlePasswordChange}
                          errors={passwordErrors}
                          values={passwordValues}
                          touched={passwordTouched}
                          isBtnDisable={isPasswordBtnDisable}
                        />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminProfile;
