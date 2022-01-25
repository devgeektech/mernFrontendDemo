import InnerPageHeader from './../../components/User/InnerPageHeader';
import React, { useEffect, useState } from 'react';
import {
  Card,
  Col,
  Container,
  Nav,
  Tab,
  Row, 
  Button,
  Modal,
} from 'react-bootstrap';

import CameraIcon from './../../../assets/img/camera_chooseFile.svg';
import userChat from './../../../assets/img/userchat5.png';
import gallery from './../../../assets/img/gallery.svg';
import edit from './../../../assets/img/edit.svg';
import previewEye from './../../../assets/img/previewEye.svg';
import plus from './../../../assets/img/plus.svg';
import handCard from './../../../assets/img/handCard.svg';
import popupClose from './../../../assets/img/popupClose.svg';

const EditProfile = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <InnerPageHeader />

      <Container fluid className="addNewUserPage">
        <Row>
          <Col lg={12} className="mb-3 mt-4">
            <Card>
              <Card.Body>
                <div className="p-24">
                  <Tab.Container defaultActiveKey="profile">
                    <Nav
                      as="ul"
                      variant="pills"
                      className="mb-3 ml-0 mr-0 position-relative"
                    >
                      <Nav.Item as="li">
                        <Nav.Link as="a" href="#" eventKey="profile">
                          Profile Information
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" href="#" eventKey="emergency">
                          Emergency Information
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="profile">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="input-file position-relative d-flex align-items-center">
                              <div className="position-relative">
                                <img
                                  id="file_upload"
                                  src={userChat}
                                  alt={userChat}
                                  className="upload-img"
                                />
                                <span className="upload-label">
                                  <img src={CameraIcon} alt={CameraIcon} />
                                </span>
                              </div>
                              <p className="mb-0">
                                Click to add a profile picture
                              </p>
                              <div className="input-file-upload">
                                <input type="file" onchange="readURL(this);" />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                              <label className="mb-0">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                              <label className="mb-0">Last Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                              <label className="mb-0">Email</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                              <label className="mb-0">Phone</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="emergency">
                        <Row className="arrow_Dropdown">
                          <Col xs={12} sm={6} md={6} lg={4}>
                            <div className="form-group">
                              <label className="mb-0">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </Col>

                          <Col xs={12} sm={6} md={6} lg={4}>
                            <div className="form-group">
                              <label className="mb-0">Last Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </Col>

                          <Col xs={12} sm={6} md={6} lg={4}>
                            <div className="form-group">
                              <label className="mb-0">Relationship</label>
                              <select className="form-control">
                                <option hidden>Select relationship</option>
                                <option value="Parent">Parent</option>
                                <option value="Child">Child</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Partner">Partner</option>
                                <option value="Friend">Friend</option>
                                <option value="Colleague">Colleague</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </Col>

                          <Col xs={12} sm={6} md={6} lg={4}>
                            <div className="form-group">
                              <label className="mb-0">Email</label>
                              <input type="text" className="form-control" />
                            </div>
                          </Col>

                          <Col xs={12} sm={6} md={6} lg={4}>
                            <div className="form-group">
                              <label className="mb-0">Phone</label>
                              <input type="text" className="form-control" />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={12} className="mb-3 mt-4">
            <Card>
              <Card.Body>
                <div className="p-24">
                  <Tab.Container defaultActiveKey="compliances">
                    <Nav
                      as="ul"
                      variant="pills"
                      className="mb-3 ml-0 mr-0 position-relative compliances"
                    >
                      <Nav.Item as="li">
                        <Nav.Link as="a" href="#" eventKey="compliances">
                          Compliances
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="compliances">
                        <Row className="pt-3">
                          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <Card className="addCardProfile">
                              <Card.Body>
                                <div className="p-24">
                                  <div className="d-flex align-items-start justify-content-between">
                                    <div className="d-flex flex-column">
                                      <h5 className="mb-0">Drivers License</h5>
                                      <p className="mb-0">N-35432132</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <img
                                        className="mr-2"
                                        src={gallery}
                                        alt={gallery}
                                      />
                                      <img src={edit} alt={edit} />
                                    </div>
                                  </div>

                                  <div className="attach_preview">
                                    <p className="mb-0">
                                      Statement of attainment_Mark.PDF
                                    </p>
                                    <img src={previewEye} alt={previewEye} />
                                  </div>

                                  <div className="validity">
                                    <div>
                                      <span>Issued</span> 05/11/2018
                                    </div>
                                    <div>
                                      <span>Issued</span> 05/11/2018
                                    </div>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <Card className="addCardProfile">
                              <Card.Body>
                                <div className="p-24">
                                  <div className="d-flex align-items-start justify-content-between">
                                    <div className="d-flex flex-column">
                                      <h5 className="mb-0">Drivers License</h5>
                                      <p className="mb-0">N-35432132</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <img
                                        className="mr-2"
                                        src={gallery}
                                        alt={gallery}
                                      />
                                      <img src={edit} alt={edit} />
                                    </div>
                                  </div>

                                  <div className="attach_preview">
                                    <p className="mb-0">
                                      Statement of attainment_Mark.PDF
                                    </p>
                                    <img src={previewEye} alt={previewEye} />
                                  </div>

                                  <div className="validity">
                                    <div>
                                      <span>Issued</span> 05/11/2018
                                    </div>
                                    <div>
                                      <span>Issued</span> 05/11/2018
                                    </div>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col md={12}>
                            <Button variant="" className="addCard mt-3 mb-3">
                              <img className="mr-2" src={plus} alt={plus} /> Add
                              a Card
                            </Button>
                            <Button
                              variant="success"
                              className="px-5 py-2 rounded addcard ml-5"
                              style={{ fontSize: '14px' }}
                              onClick={handleShow1}
                            >
                              Card Successfully added
                            </Button>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} className="mb-5 text-right pageButtomBtn">
            <Button
              variant=""
              className="px-5 py-2 rounded addcard"
              style={{ background: '#E5EAEE', fontSize: '14px' }}
              onClick={handleShow}
            >
              Delete User
            </Button>
            <Button
              variant=""
              className="px-5 py-2 rounded btn-pink ml-3"
              style={{ fontSize: '14px' }}
            >
              Save Updates
            </Button>
          </Col>

          {/* modal >> card added successfully */}

          <Modal
            className="profileEditModel"
            show={show1}
            onHide={handleClose1}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body className="p-0">
              <div className="firstSection d-flex align-item-end justify-content-center px-3 pt-4">
                <img src={handCard} alt={handCard} className="img-responsive" />
              </div>
              <div className="secondSection px-5 py-3 text-center">
                <h2 className="font-weight-600">Your card was added!</h2>
                <p>
                  You can click on the button below to continue to add staff
                  cards
                </p>
              </div>
              <div className="px-3 pb-5 d-flex align-items-center justify-content-center flex-wrap">
                <Button
                  variant=""
                  className="btn-pink mr-3 px-4 py-2 popupBtn"
                  onClick={handleClose1}
                >
                  Add Another
                </Button>
                <Button
                  variant="light"
                  className="px-4 py-2 popupBtn"
                  onClick={handleClose1}
                >
                  I’m Done
                </Button>
              </div>
            </Modal.Body>
          </Modal>

          {/* modal >> delete this user */}

          <Modal
            className="profileEditModel two"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <span className="modelClose" onClick={handleClose}>
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
                  onClick={handleClose}
                >
                  Yes, Delete
                </Button>
                <Button
                  variant=""
                  className="btn-pink px-4 py-2 popupBtn"
                  onClick={handleClose}
                >
                  No, Go Back
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </div>
  );
};

export { EditProfile };
