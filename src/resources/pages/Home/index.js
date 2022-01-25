import HelloContext from "../../../context";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, Row, Col, Card } from "react-bootstrap";

import {
  RecentActivity,
  RecentActiveChat,
  RecentChat,
  DataTableHome,
  MaterialRequest,
  ExchangeRequest,
} from "../../components/Home";
import Skeleton from "react-loading-skeleton";

import ExportWeek from "../../../assets/img/exportWeek.svg";
import Revenue from "../../../assets/img/revenue.svg";
import Scheduled_job from "../../../assets/img/scheduled_job.svg";
import Complete_jobs from "../../../assets/img/complete_jobs.svg";
import LinkImg from "../../../assets/img/link.svg";
import LogIn from "../../../assets/img/recentActivity_login.svg";
import LogOut from "../../../assets/img/recentActivity_logout.svg";
import Report from "../../../assets/img/recentActivity_report.svg";
import OpenJob from "../../../assets/img/recentActivity_openJob.svg";
import Complete from "../../../assets/img/recentActivity_completeJob.svg";
import Incomplete from "../../../assets/img/recentActivity_IncompleteJob.svg";
import NotFound from "../../../assets/img/on_data_found.svg";
import topGeenArrow from "../../../assets/img/green_arrowTop.svg";
import downloadArrow from "../../../assets/img/downloadArrow.svg";
import UserLoader from "../Users/UserLoader";
import TableLoader from "../../components/TableLoader";

import { FetchFromServer } from "../../../utils/helpers";
import { ApiRoutes,AppConfig } from "../../../utils/config";
import useSocket from "../../../utils/socket/soket";
import userAvtar from "../../../assets/img/user_avtar.svg";

const activityDataArray = [];

const Home = () => {
  const [weeklyEarnings, setWeeklyEarnings] = useState();
  const [weeklyRevenue, setWeeklyRevenue] = useState();
  const [previousWeeklyRevenue, setPreviousWeeklyRevenue] = useState();

  const [currentUsers, setCurrentUsers] = useState([]);
  const [activityData, setActivityData] = useState();
  const [totalRecord, setTotalRecord] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [globalDate, setGlobalDate] = useState(new Date());
  const [tableMessage, setTableMessage] = useState("No Data Available");
  const [isFeedLoading, setIsFeedLoading] = useState(true);
  const [tableFilter, setTableFilter] = useState({
    search: "",
    status: "",
    skip: 0,
    limit: 10,
    date: new Date(),
  });
  const [liveFeedData, setLiveFeedData] = useState([]);
  const [test, setTest] = useState();
  const socket = useSocket();
  const [receiverData, setReceiverData] = useState([]);
  const [copyReceiverData, setCopyReceiverData] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Congrats! Socket is connected");
    });
  }, [socket]);

  useEffect(() => {
    getWeeklyEarnings();
  }, [globalDate]);

  useEffect(() => {
    socket.on("recentActivity", (data) => {
      if (activityData?.length === 10) {
        const activityArray = [...activityData];
        activityArray.splice(0, 0, data);
        activityArray.pop();

        setActivityData(activityArray);
      } else if (activityData?.length < 10) {
        const temp2 = [...activityData];
        temp2.splice(0, 0, data);
        setActivityData(temp2);
      }
    });
  }, [activityData, socket]);

  useEffect(() => {
    socket.on("activeUsers", (data) => {
      if(receiverData.length>0 && data.length>0){
        const array = receiverData.map((index1) => {
          const index = data.findIndex((online) => online.userId === index1._id);
          if (index === -1) {
            return { ...index1, socketActive: false };
          } else {
            return { ...index1, socketActive: true };
          }
        });
        setReceiverData(array);
      }
     });
  },[socket,copyReceiverData]);


  const hellocontext = useContext(HelloContext);

  useEffect(() => {
    
    const gloablDate = localStorage.getItem("globalDatepicker");
    if (gloablDate && gloablDate != "") {
      //setGlobalDate(gloablDate);
      //alert(gloablDate);
    }
  });

  useEffect(() => {
    getReceiverList();
    /*const interval = setInterval(() => {
      getReceiverList();
    }, 60000);
    return () => clearInterval(interval);*/
    
  }, []);

  const refreshMaterial = async () => {};

  const getWeeklyEarnings = async () => {
    const response = await FetchFromServer(
      ApiRoutes.WEEKLY_EARNINGS.service,
      ApiRoutes.WEEKLY_EARNINGS.url,
      ApiRoutes.WEEKLY_EARNINGS.method,
      ApiRoutes.WEEKLY_EARNINGS.authenticate,
      undefined
    );
    if (response && response.isError) {
      toast.error(response.messages[0]);
    } else {
      setWeeklyEarnings(response.data.data);
    }
  };

  const getReceiverList = async () => {
    //setIsListLoading(true);
    const response = await FetchFromServer(
      ApiRoutes.RECEIVER_LIST_TOP.service,
      ApiRoutes.RECEIVER_LIST_TOP.url,
      ApiRoutes.RECEIVER_LIST_TOP.method,
      ApiRoutes.RECEIVER_LIST_TOP.authenticate,
      tableFilter,
      undefined
    );
    //setIsListLoading(false);
    if (response && response.isError) {
      //toast.error(response.messages[0]);
    } else {
      setReceiverData(response.data.data);
      setCopyReceiverData(response.data.data);
    }
  };
  

  const getCurrentUsers = async () => {
    setIsLoading(true);
    const response = await FetchFromServer(
      ApiRoutes.CURRENT_USERS.service,
      ApiRoutes.CURRENT_USERS.url,
      ApiRoutes.CURRENT_USERS.method,
      ApiRoutes.CURRENT_USERS.authenticate,
      tableFilter,
      undefined
    );
    setIsLoading(false);
    if (response && response.isError) {
      toast.error(response.messages[0]);
    } else {
      setTableMessage(response.messages[0]);
      setCurrentUsers(response.data.data);
      setTotalRecord(response.data.totalRecords);
    }
  };
  const getActivity = async () => {
    const response = await FetchFromServer(
      ApiRoutes.ACTIVITY_LIST.service,
      ApiRoutes.ACTIVITY_LIST.url,
      ApiRoutes.ACTIVITY_LIST.method,
      ApiRoutes.ACTIVITY_LIST.authenticate,
      undefined
    );
    if (response && response.isError) {
      toast.error(response.messages[0]);
    } else {
      setTest(response?.data?.data?.length);
      setActivityData(response?.data?.data);
    }
  };
  const getLiveFeed = async () => {

    const response = await FetchFromServer(
      ApiRoutes.LIVE_FEED.service,
      ApiRoutes.LIVE_FEED.url,
      ApiRoutes.LIVE_FEED.method,
      ApiRoutes.LIVE_FEED.authenticate,
      undefined
    );
    if (response && response.isError) {
      toast.error(response.messages[0]);
    } else {
      setLiveFeedData(response.data.data);
      setIsFeedLoading(false);
    }
  };
  useEffect(() => {
    getWeeklyEarnings();
    getLiveFeed();
    getActivity();
    //getWeeklyRevenue();
    //getPreviousWeeklyRevenue();
  }, [test]);
  useEffect(() => {
    getCurrentUsers();
    // eslint-disable-next-line
  }, [tableFilter, activityData]);
  const handlePageChange = async (pageNumber) => {
    if (pageNumber !== activePage) {
      setActivePage(pageNumber);
      setTableFilter({
        ...tableFilter,
        skip: (pageNumber - 1) * tableFilter.limit,
      });
    }
  };
  const handleSearch = async (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setActivePage(1);
    if (name === "pageSize") {
      setTableFilter({
        ...tableFilter,
        skip: 0,
        limit: value,
      });
    }
    if (name === "search") {
      setTableFilter({
        ...tableFilter,
        skip: 0,
        search: value,
      });
    }
    if (name === "status") {
      setTableFilter({
        ...tableFilter,
        skip: 0,
        status: value,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={8}
          className="mb-0 mb-xl-4 mt-4"
        >
          <div className="earning_line d-flex align-items-center justify-content-between">
            <h5 className="m-0">Weekly Earnings</h5>
            <h6 className="m-0">
              {/*Export Week Summary*/}{" "}
              {/*<img className="ml-2" src={ExportWeek} alt={ExportWeek} />*/}
            </h6>
          </div>

          <Row>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Card className="mb-0">
                <Card.Body>
                  <div className="card_flex h-177px">
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-wrap innerBox box1">
                      <img src={Revenue} alt={Revenue} />
                      <div className="price">
                        <h5 className="mb-0 d-flex align-items-center justify-content-between">
                          $
                          {weeklyEarnings
                            ? weeklyEarnings.currentWeekEarning
                            : 0}{" "}
                          <span>
                            {weeklyEarnings ? (
                              weeklyEarnings.upDown === "Up" ? (
                                <img
                                  src={topGeenArrow}
                                  className="mr-1"
                                  alt={topGeenArrow}
                                />
                              ) : (
                                <img
                                  src={downloadArrow}
                                  className="mr-1"
                                  alt={downloadArrow}
                                />
                              )
                            ) : (
                              ""
                            )}{" "}
                            {weeklyEarnings ? weeklyEarnings.percentage : 0}%
                          </span>
                        </h5>
                        <p className="mb-0">Week Revenue</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex align-items-center justify-content-between lastWeek_amount">
                      <p className="m-0">Last Week</p>
                      <h5 className="m-0">
                        $
                        {weeklyEarnings ? weeklyEarnings.previousWeekEaring : 0}
                      </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3} xl={3} className="mt-4 mt-lg-0">
              <Card className="mb-0">
                <Card.Body>
                  <div className="card_flex h-177px">
                    <div className="d-flex align-items-center justify-content-center flex-column scheduled_job text-black">
                      <img
                        className="mb-3"
                        src={Scheduled_job}
                        alt={Scheduled_job}
                      />
                      <h5 className="mb-3">
                        {weeklyEarnings ? weeklyEarnings.scheduledJobs : 0}
                      </h5>
                      <h6 className="m-0">Scheduled Jobs</h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3} xl={3} className="mt-4 mt-lg-0">
              <Card className="mb-0">
                <Card.Body>
                  <div className="card_flex h-177px">
                    <div className="d-flex align-items-center justify-content-center flex-column scheduled_job text-black">
                      <img
                        className="mb-3"
                        src={Complete_jobs}
                        alt={Complete_jobs}
                      />
                      <h5 className="mb-3">
                        {weeklyEarnings ? weeklyEarnings.completedJobs : 0}
                      </h5>
                      <h6 className="m-0">Completed Jobs</h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={12} className="mt-4">
              <Card className="mb-0 homePageDataTable">
                <Card.Header className="px-3 py-3 bg-transparent d-flex align-items-center justify-content-between pink_btn">
                  <h6 className="m-0">Current Users</h6>
                  <Link to="/users/add" className="btn-pink" variant="">
                    Add New User
                  </Link>
                </Card.Header>
                <Card.Body>
                  <DataTableHome
                    currentUsers={currentUsers}
                    isLoading={isLoading}
                    totalRecord={totalRecord}
                    tableFilter={tableFilter}
                    activePage={activePage}
                    handlePageChange={handlePageChange}
                    handleSearch={handleSearch}
                    tableMessage={tableMessage}
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col md={12} className="mt-4">
              <Card>
                <Card.Header className="p-4 bg-transparent d-flex align-items-center justify-content-between pink_btn">
                  <h6 className="m-0">Live Stock Feed</h6>
                  <p className="m-0 p-0 warehouse d-flex align-items-center">
                    Visit Warehouse{" "}
                    <Link to="/warehouse" className="d-flex">
                      <img className="ml-2" src={LinkImg} alt={LinkImg} />
                    </Link>
                  </p>
                </Card.Header>
                <Card.Body>
                {isFeedLoading ? (
                       <>
                      <div class="card_flex">
                      <Row>
                        <Col md={12}>
                          <div className="d-flex align-items-center justify-content-start overflow-auto wareHousePageSlide">

                          <div className="material_request">
                            <div className="card">
                              <div className="card-header exchange_request_div">
                                <h6 className="m-0 text-center"><Skeleton style={{ width: 150, height: 10}} /></h6>
                              </div>
                              <div className="card-body">
                                <div className="d-flex align-items-center p-3 row_1">
                                  <div className="img_box mr-2">
                                    <Skeleton style={{ width: 64, height: 64 }} />
                                  </div>
                                  <p className="m-0">
                                  <Skeleton style={{ width: 70, height: 10}} />
                                  <Skeleton style={{ width: 100, height: 10}} />
                                  <Skeleton style={{ width: 128, height: 10}} />
                                  </p>
                                </div>
                                <table className="table table-responsive m-0">
                                  <tbody>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value text_blue">
                                        <Skeleton style={{ width: 100, height: 10}} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value text_blue">
                                      <Skeleton style={{ width: 100, height: 10}} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value"><Skeleton style={{ width: 100, height: 10}} /></td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value"><Skeleton style={{ width: 100, height: 10}} /></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="card-footer">
                                <Link to="#">
                                  <Skeleton style={{ width: 70, height: 10}} />
                                </Link>
                                
                              </div>
                            </div>
                            </div>

                            <div className="material_request">
                            <div className="card">
                              <div className="card-header exchange_request_div">
                                <h6 className="m-0 text-center"><Skeleton style={{ width: 150, height: 10}} /></h6>
                              </div>
                              <div className="card-body">
                                <div className="d-flex align-items-center p-3 row_1">
                                  <div className="img_box mr-2">
                                    <Skeleton style={{ width: 64, height: 64 }} />
                                  </div>
                                  <p className="m-0">
                                  <Skeleton style={{ width: 70, height: 10}} />
                                  <Skeleton style={{ width: 100, height: 10}} />
                                  <Skeleton style={{ width: 128, height: 10}} />
                                  </p>
                                </div>
                                <table className="table table-responsive m-0">
                                  <tbody>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value text_blue">
                                        <Skeleton style={{ width: 100, height: 10}} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value text_blue">
                                      <Skeleton style={{ width: 100, height: 10}} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value"><Skeleton style={{ width: 100, height: 10}} /></td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value"><Skeleton style={{ width: 100, height: 10}} /></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="card-footer">
                                <Link to="#">
                                  <Skeleton style={{ width: 70, height: 10}} />
                                </Link>
                                
                              </div>
                            </div>
                            </div>

                            <div className="material_request">
                            <div className="card">
                              <div className="card-header exchange_request_div">
                                <h6 className="m-0 text-center"><Skeleton style={{ width: 150, height: 10}} /></h6>
                              </div>
                              <div className="card-body">
                                <div className="d-flex align-items-center p-3 row_1">
                                  <div className="img_box mr-2">
                                    <Skeleton style={{ width: 64, height: 64 }} />
                                  </div>
                                  <p className="m-0">
                                  <Skeleton style={{ width: 70, height: 10}} />
                                  <Skeleton style={{ width: 100, height: 10}} />
                                  <Skeleton style={{ width: 128, height: 10}} />
                                  </p>
                                </div>
                                <table className="table table-responsive m-0">
                                  <tbody>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value text_blue">
                                        <Skeleton style={{ width: 100, height: 10}} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value text_blue">
                                      <Skeleton style={{ width: 100, height: 10}} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value"><Skeleton style={{ width: 100, height: 10}} /></td>
                                    </tr>
                                    <tr>
                                      <td><Skeleton style={{ width: 30, height: 10}} /></td>
                                      <td className="value"><Skeleton style={{ width: 100, height: 10}} /></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="card-footer">
                                <Link to="#">
                                  <Skeleton style={{ width: 70, height: 10}} />
                                </Link>
                                
                              </div>
                            </div>
                            </div>

                          </div>
                        </Col>
                      </Row>
                      </div></>) :
                      liveFeedData.length ? (
                      <div className="card_flex">
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <div className="d-flex align-items-center justify-content-start overflow-auto wareHousePageSlide">
                            {/* <ExchangeRequest /> */}
                            {liveFeedData.map((item, key) => {
                              return (
                                <MaterialRequest
                                  data={item}
                                  key={key}
                                  getLiveFeed={getLiveFeed}
                                  refreshMaterial={refreshMaterial}
                                />
                              );
                            })}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center py-5">
                      <div className="position-relative noDataFound">
                        <img src={NotFound} alt={NotFound} />
                        <h6 className="mb-0">No Data Available</h6>
                        <p>The data you're looking for is not available</p>
                      </div>
                    </div>
                  )}
                  {/* <div className="card_flex">
                    <Row>
                      <Col xs={12} sm={6} md={6} lg={6} xl={4}>
                        <MaterialRequest />
                      </Col>
                      <Col xs={12} sm={6} md={6} lg={6} xl={4}>
                        <ExchangeRequest />
                      </Col>
                    </Row>
                  </div> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={4}
          className="mb-4 mt-0 mt-xl-4"
        >
          <Row className="recentActivity_box mb-4">
            <Col md={12}>
              <Card className="mb-0 customHeight-485" style={{ height: 780.1 }}>
                <Card.Header className="p-4 bg-transparent d-flex align-items-center justify-content-between pink_btn">
                  <h6 className="m-0">Recent Activity</h6>
                </Card.Header>
                <Card.Body>
                  {test > 0 ? (
                    activityData?.map((item, key) => {
                      let activityImg = "";
                      if (item.type === "loggedIn") activityImg = LogIn;
                      if (item.type === "loggedOut") activityImg = LogOut;
                      if (item.type === "reportIssue") activityImg = OpenJob;
                      if (item.type === "openJob") activityImg = OpenJob;
                      if (item.type === "suspendJob") activityImg = OpenJob;
                      if (item.type === "completeJob") activityImg = OpenJob;
                      if (item.type === "incompleteJob")
                        activityImg = Incomplete;
                      return item?.type !== "chatNotification" ? (
                        <RecentActivity
                          id={item.createdBy}
                          img={activityImg}
                          message={item.message}
                          alt={activityImg}
                          type={item.type}
                          time={item.createdAt}
                          profilePicture={item.profilePicture}
                          data="yes"
                        />
                      ) : (
                        <> </>
                      );
                    })
                  ) : test === 0 ? (
                    <div className="d-flex align-items-center justify-content-center my-5">
                      <div className="position-relative noDataFound">
                        <img src={NotFound} alt={NotFound} />
                        <h6 className="mb-0">No Data Available</h6>
                        <p>The data you're looking for is not available</p>
                      </div>
                    </div>
                  ) : (
                    <RecentActivity data="no" />
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="recentChat_box">
            <Col md={12}>
              <Card className="customHeight-304">
                <Card.Header className="p-4 bg-transparent d-flex align-items-center justify-content-between pink_btn">
                  <h6 className="m-0">Recent Chat</h6>
                  <Link to="/chat" className="card-link">
                    <p
                      className="m-0 p-0 warehouse d-flex align-items-center"
                      style={{ color: "black" }}
                    >
                      Visit Chat
                      <img className="ml-2" src={LinkImg} alt={LinkImg} />
                    </p>
                  </Link>
                </Card.Header>
                <Card.Body>
                  {test > 0 ? (
                    activityData?.map((item, key) => {
                      let activityImg = "";
                      if (item.type === "loggedIn") activityImg = LogIn;
                      if (item.type === "loggedOut") activityImg = LogOut;
                      if (item.type === "reportIssue") activityImg = OpenJob;
                      if (item.type === "openJob") activityImg = OpenJob;
                      if (item.type === "completeJob") activityImg = OpenJob;
                      if (item.type === "suspendJob") activityImg = OpenJob;
                      if (item.type === "incompleteJob")
                        activityImg = Incomplete;
                      return item?.type === "chatNotification" ? (
                        <RecentActivity
                          id={item.createdBy}
                          img={activityImg}
                          message={item.message}
                          alt={activityImg}
                          type={item.type}
                          time={item.createdAt}
                          profilePicture={item.profilePicture}
                          data="yes"
                        />
                      ) : (
                        <> </>
                      );
                    })
                  ) : test === 0 ? (
                    <div className="d-flex align-items-center justify-content-center my-5">
                      <div className="position-relative noDataFound">
                        <img src={NotFound} alt={NotFound} />
                        <h6 className="mb-0">No Data Available</h6>
                        <p>The data you're looking for is not available</p>
                      </div>
                    </div>
                  ) : (
                    <RecentActivity data="no" />
                  )}
                  {<RecentActiveChat receiverData={receiverData} />
                  /*<RecentChat />
                  <RecentChat />*/ }
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
