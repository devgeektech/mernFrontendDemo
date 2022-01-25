/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {Row, Col } from "react-bootstrap";

const UserLoader = () => {
  return (
    <>
        <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className="mb-4 mt-4"
              >
                <Row>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                    <div className="card userCard">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between pb-3 p-24 boxes">
                          <div className="displayPicture d-flex align-items-center">
                            <div className="img_box">
                              <Skeleton style={{ width: 64, height: 64 }} />
                            </div>

                            <div className="userInfo2 ml-2">
                              <p className="m-0">
                                <Skeleton style={{ width: 90 }} />
                              </p>
                              <h6 className="mt-1 mb-1 ml-0 mr-0">
                                <Skeleton />
                              </h6>
                              <Link className="m-0">
                                <Skeleton />
                              </Link>
                            </div>
                          </div>

                          <Link className="viewProfile">
                            <Skeleton />
                          </Link>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column2 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column3 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-row">
                            <Skeleton style={{ width: 50 }} />
                          </div>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                    <div className="card userCard">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between pb-3 p-24 boxes">
                          <div className="displayPicture d-flex align-items-center">
                            <div className="img_box">
                              <Skeleton style={{ width: 64, height: 64 }} />
                            </div>

                            <div className="userInfo2 ml-2">
                              <p className="m-0">
                                <Skeleton style={{ width: 90 }} />
                              </p>
                              <h6 className="mt-1 mb-1 ml-0 mr-0">
                                <Skeleton />
                              </h6>
                              <Link className="m-0">
                                <Skeleton />
                              </Link>
                            </div>
                          </div>

                          <Link className="viewProfile">
                            <Skeleton />
                          </Link>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column2 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column3 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-row">
                            <Skeleton style={{ width: 50 }} />
                          </div>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                    <div className="card userCard">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between pb-3 p-24 boxes">
                          <div className="displayPicture d-flex align-items-center">
                            <div className="img_box">
                              <Skeleton style={{ width: 64, height: 64 }} />
                            </div>

                            <div className="userInfo2 ml-2">
                              <p className="m-0">
                                <Skeleton style={{ width: 90 }} />
                              </p>
                              <h6 className="mt-1 mb-1 ml-0 mr-0">
                                <Skeleton />
                              </h6>
                              <Link className="m-0">
                                <Skeleton />
                              </Link>
                            </div>
                          </div>

                          <Link className="viewProfile">
                            <Skeleton />
                          </Link>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column2 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column3 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-row">
                            <Skeleton style={{ width: 50 }} />
                          </div>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                    <div className="card userCard">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between pb-3 p-24 boxes">
                          <div className="displayPicture d-flex align-items-center">
                            <div className="img_box">
                              <Skeleton style={{ width: 64, height: 64 }} />
                            </div>

                            <div className="userInfo2 ml-2">
                              <p className="m-0">
                                <Skeleton style={{ width: 90 }} />
                              </p>
                              <h6 className="mt-1 mb-1 ml-0 mr-0">
                                <Skeleton />
                              </h6>
                              <Link className="m-0">
                                <Skeleton />
                              </Link>
                            </div>
                          </div>

                          <Link className="viewProfile">
                            <Skeleton />
                          </Link>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column2 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column3 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-row">
                            <Skeleton style={{ width: 50 }} />
                          </div>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                    <div className="card userCard">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between pb-3 p-24 boxes">
                          <div className="displayPicture d-flex align-items-center">
                            <div className="img_box">
                              <Skeleton style={{ width: 64, height: 64 }} />
                            </div>

                            <div className="userInfo2 ml-2">
                              <p className="m-0">
                                <Skeleton style={{ width: 90 }} />
                              </p>
                              <h6 className="mt-1 mb-1 ml-0 mr-0">
                                <Skeleton />
                              </h6>
                              <Link className="m-0">
                                <Skeleton />
                              </Link>
                            </div>
                          </div>

                          <Link className="viewProfile">
                            <Skeleton />
                          </Link>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column2 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column3 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-row">
                            <Skeleton style={{ width: 50 }} />
                          </div>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                    <div className="card userCard">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between pb-3 p-24 boxes">
                          <div className="displayPicture d-flex align-items-center">
                            <div className="img_box">
                              <Skeleton style={{ width: 64, height: 64 }} />
                            </div>

                            <div className="userInfo2 ml-2">
                              <p className="m-0">
                                <Skeleton style={{ width: 90 }} />
                              </p>
                              <h6 className="mt-1 mb-1 ml-0 mr-0">
                                <Skeleton />
                              </h6>
                              <Link className="m-0">
                                <Skeleton />
                              </Link>
                            </div>
                          </div>

                          <Link className="viewProfile">
                            <Skeleton />
                          </Link>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column2 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                          <div className="d-flex align-items-center flex-column">
                            <Skeleton style={{ width: 45, height: 45 }} />
                          </div>
                        </div>

                        <div className="d-flex align-items-start justify-content-between column3 pt-3 pb-3 p-24">
                          <div className="d-flex align-items-center flex-row">
                            <Skeleton style={{ width: 50 }} />
                          </div>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                          <a>
                            <div className="d-flex align-items-center flex-row">
                              <Skeleton style={{ width: 50 }} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
        </>
    );
};
export default  UserLoader;